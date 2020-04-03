import React, {useEffect, useState} from 'react'
import {Typography, Button} from 'antd'
import {myFirebase} from '../lib/firebase'
import Router from 'next/router'

const DashboardEmployer: React.FC = (props) => {
    return (
        <>
            <Typography.Title>Hello, welcome to the employer dashboard</Typography.Title>
            <Button onClick={async () => {
                await myFirebase.auth().signOut()
                Router.replace('/')
            }}>
                Logout
            </Button>
        </>
    );
};

export default DashboardEmployer;