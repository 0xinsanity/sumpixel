import React from 'react'
import 'antd/dist/antd.css'
import UserProvider from '../lib/UserProvider'

export default function App({ Component, pageProps }) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    )
}