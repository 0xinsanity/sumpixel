import React, { Component, createContext } from "react";
import { myFirebase } from "./firebase";
import {User, Employer} from '../model/model'
import {getEmployer, getUser} from './server'
import Router from "next/router";

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
        const user = await getUser(userAuth.uid)
        const employer = await getEmployer(userAuth.uid)

        if (user['user_exists'] == undefined) {
            this.changeUser(user as User)
            Router.replace('/dashboard_user')
        } else if (employer['employer_exists'] == undefined) {
            this.changeUser(employer as Employer)
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