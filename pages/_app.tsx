import React from 'react'
import Index from "./index";
import Head from 'next/head'

import 'antd/dist/antd.css'

export default function App({ Component, pageProps }) {
    return (
        <>
            <script src="https://api.memberstack.io/static/memberstack.js?webflow" data-memberstack-id="28af82ce2447653b488f6a66abef3da8"> </script>
            <Index />
        </>)
}