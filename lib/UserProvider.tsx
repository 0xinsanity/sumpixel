import React, { Component, createContext } from "react";
import { myFirebase } from "./firebase";
import {User, Employer} from '../model/model'
import {getEmployer, getUser} from './server'
import Router from "next/router";
import {message} from 'antd'

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
      this.setState({currentUser: newUser})
  }

  state = {
    currentUser: null,
    changeUser: this.changeUser
  };

  componentDidMount = () => {
    myFirebase.auth().onAuthStateChanged(async (userAuth) => {
        if (userAuth === null) {
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
            message.error("There was an error trying to retrieve your account.")
            return
          }
        }

        if (current['user_exists'] === undefined) {
          console.log(current['user_exists'])
            this.changeUser(current as User)
            Router.replace('/dashboard_user')
        } else if (current['employer_exists'] === undefined) {
            this.changeUser(current as Employer)
            Router.push('/dashboard_employer')
        } else {
            // TODO: Find alternate way to wait until names are updated
            // Works for both
            setTimeout(() => {
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
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;