import React from 'react'
import 'antd/dist/antd.css'
import UserProvider from '../lib/UserProvider'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </>
    )
}