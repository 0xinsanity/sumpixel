import React, {useEffect, useState} from 'react'
import {Typography, Button} from 'antd'
import { myFirebase } from '../lib/firebase'
import Router from 'next/router'
import {getUser} from '../lib/server'

const DashboardUser: React.FC = (props) => {
    // TODO: If user['completed_quiz'] is false, show screen that says, "Complete quiz first and then come back"

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