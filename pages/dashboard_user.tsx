import React, {useEffect, useState} from 'react'
import {Typography, Button} from 'antd'
import { myFirebase } from '../lib/firebase'
import Router from 'next/router'
import {getUser} from '../lib/server'

const DashboardUser: React.FC = (props) => {
    useEffect(() => {
        async function findUser() {
            console.log(myFirebase.auth().currentUser.uid)
            const user = await getUser(myFirebase.auth().currentUser.uid)

            if (user['user_exists'] === undefined) {
                Router.replace('/')
            }
        }

        const firebaseUser = myFirebase.auth().currentUser;
        if (firebaseUser !== null) {
            findUser()
        } else {
            Router.replace('/')
        }
    }, []);

    return (
        <>
            <Typography.Title>Hello, welcome to the designer dashboard</Typography.Title>
            <Button onClick={async () => {
                await myFirebase.auth().signOut()
                Router.replace('/')
            }}>
                Logout
            </Button>
        </>
    );
};

export default DashboardUser;