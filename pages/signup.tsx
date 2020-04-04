import React, {useEffect, useState, useContext} from 'react'
import {message} from 'antd'
import {PopupModal} from '../components/General/PopupModal';
import {myFirebase} from '../lib/firebase'
import {Onboard} from '../components/OnboardingFlow/Onboard'
import { UserContext } from '../lib/UserProvider';
import LoginComponent from '../components/Login/LoginComponent'

const SignUp: React.FC = (props) => {
    const {currentUser} = useContext(UserContext)
    const [isSignedIn, setIsSignedIn] = useState(false);
    
    useEffect(() => {
        if (currentUser !== null) {
            setIsSignedIn(true)
        }
    }, [currentUser])

    const onFinish = (values) => {
        myFirebase.auth().createUserWithEmailAndPassword(values.email, values.password).then(() => {
            myFirebase.auth().currentUser.updateProfile({
                displayName: `${values.firstName} ${values.lastName}`
            }).then(() => {
                setIsSignedIn(true)
            })
        }).catch((error) => {
            message.error(error.message)
        })
    }

    const deleteUser = async () => {
        if (myFirebase.auth().currentUser === null) {
            await myFirebase.auth().signOut()
        } else {
            await myFirebase.auth().currentUser.delete()
        }
        setIsSignedIn(false)
    }

    return (
        <>
            <PopupModal
                visible={!isSignedIn}
            >
                <LoginComponent isSignUp={true} title="Sign Up" onFinish={onFinish}/>
            </PopupModal>
            <Onboard deleteUser={deleteUser}/>
        </>
    );
};

export default SignUp;