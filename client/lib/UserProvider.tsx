import React, { Component, createContext } from "react";
import { myFirebase } from "./firebase";
import {User, Employer} from '../model/model'
import {getEmployer, getUser} from './server'
import Router, {withRouter} from "next/router";
import {message} from 'antd'
import Loading from '../components/General/Loading'
import { NextPage, NextPageContext } from 'next';

interface ContextProps {
  loading: boolean,
  setLoading: (newLoad: boolean) => void,
  currentUser: User | Employer | null,
  changeUser: (newUser: User | Employer | null) => void
}

export const UserContext = createContext<Partial<ContextProps>>({
    currentUser: null,
    changeUser: () => {},
    loading: false,
    setLoading: () => {}
});
class UserProvider extends Component {
  changeUser = (newUser: User | Employer | null) => {
      console.log('This is current: ' + newUser)
      this.setState({currentUser: newUser})
  }

  setLoading = (newLoad: boolean) => {
      this.setState({loading: newLoad})
  }

  state = {
    loading: false,
    currentUser: null,
    changeUser: this.changeUser,
    setLoading: this.setLoading
  };

  componentDidMount = () => {
    myFirebase.auth().onAuthStateChanged(async (userAuth) => {
      //this.setLoading(true)
      if (userAuth === null) {
          this.setLoading(false)
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
        this.setLoading(false)
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
      } else if (current !== undefined && current['employer_exists'] === undefined) {
          this.changeUser(current as Employer)
          window.analytics.identify(current.id, {
            name: current.name,
            email: current.email
          });
      } else {
            if (userAuth.email === null && userAuth.isAnonymous === false) {
              // something's wrong
              myFirebase.auth().signOut()
              this.changeUser(undefined)
              this.setLoading(false)
              return
            }
            // In process of making account
            this.changeUser({
                email: userAuth.email,
                id: userAuth.uid,
                firstName: userAuth.displayName.substr(0, userAuth.displayName.indexOf(' ')),
                lastName: userAuth.displayName.substr(userAuth.displayName.indexOf(' ')+1),
            })  
            this.setLoading(false)
      }
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        <Loading loading={this.state.loading}/>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;