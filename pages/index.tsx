import React, {useEffect, useState} from 'react'
import {PopupModal} from '../components/PopupModal';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {myFirebase} from '../lib/firebase'
import {Onboard} from '../components/onboard'
import firebase from 'firebase'

const uiConfig = {
    signInFlow: 'popup',
    callbacks: {
        signInSuccessWithAuthResult: () => false
    },
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
};

const Index: React.FC = (props) => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    useEffect(() => {
        myFirebase.auth().onAuthStateChanged(user => {
                if (user != null) {
                    setIsSignedIn(true)
                }
            });
    });

    return (
        <div>
            <PopupModal
                visible={!isSignedIn}
            >
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={myFirebase.auth()}/>
            </PopupModal>
            <Onboard/>
        </div>
    );
}

export default Index;