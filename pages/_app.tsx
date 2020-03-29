import React from 'react'
import Index from "./index";
import Head from 'next/head'
import { UserInfoContext } from "./context/user-info";

import 'antd/dist/antd.css'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Index />
        </>)
}