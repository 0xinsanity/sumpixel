import React, { Component, createContext } from "react";
import { myFirebase } from "./firebase";
import {User, Employer} from '../model/model'
import {getEmployer, getUser} from './server'
import Router, {withRouter} from "next/router";
import {message} from 'antd'
import Loading from '../components/General/Loading'
import { NextPage, NextPageContext } from 'next';

interface ContextProps {
    currentUser: User | Employer | null,
    changeUser: (newUser: User | Employer | null) => void
}

export const UserContext = createContext<Partial<ContextProps>>({
    currentUser: null,
    changeUser: () => {}
});
class UserProvider extends Component {
  changeUser = (newUser: User | Employer | null) => {
      this.setState({currentUser: newUser, loading: false})
  }

  state = {
    loading: false,
    currentUser: null,
    changeUser: this.changeUser
  };

  componentDidMount = () => {
    myFirebase.auth().onAuthStateChanged(async (userAuth) => {
        this.setState({loading: true})
        if (userAuth === null) {
            this.setState({loading: false})
            return
        }

        if (userAuth.isAnonymous) {
          console.log('userauth:' + userAuth)
          this.changeUser({
            firstName: '',
            lastName: '',
            email: '',
            id: userAuth.uid,
            isAnonymous: true
          } as Employer)
          return
        }

        // This is some of the worst code I've ever made
        var current;
        try {
          current = await getUser(userAuth.uid)
        } catch (error) {
          try {
            current = await getEmployer(userAuth.uid)
            current["user_exists"] = false
          } catch (error) {
            console.log("this better be a new user")
          }
        }

        if (current !== undefined && current['user_exists'] === undefined) {
            this.changeUser(current as User)
            window.analytics.identify(current.id, {
              name: current.name,
              email: current.email
            });
            if (Router.router.route === '/' || Router.router.route === '/signup') {
              setTimeout(() => {
                Router.push('/dashboard_user')
              }, 500)
            }
        } else if (current !== undefined && current['employer_exists'] === undefined) {
            window.analytics.identify(current.id, {
              name: current.name,
              email: current.email
            });
            this.changeUser(current as Employer)
            if (Router.router.route === '/' || Router.router.route === '/signup') {
              setTimeout(() => {
                Router.push('/dashboard_employer')
              }, 500)
            }
        } else {
            // TODO: Find alternate way to wait until names are updated
            // Works for both
            setTimeout(() => {
              if (userAuth.email === null && userAuth.isAnonymous === false) {
                // something's wrong
                myFirebase.auth().signOut()
                this.changeUser(undefined)
                return
              }
              this.changeUser({
                  email: userAuth.email,
                  id: userAuth.uid,
                  firstName: userAuth.displayName.substr(0, userAuth.displayName.indexOf(' ')),
                  lastName: userAuth.displayName.substr(userAuth.displayName.indexOf(' ')+1),
              })
            }, 500)
            
        }
    });
  };
  render() {
    if (this.state.loading) {
      return (<Loading/>)
    }

    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;