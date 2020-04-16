import React, {useEffect} from 'react'
import UserProvider from '../lib/UserProvider'
import Head from 'next/head'
import '../assets/theme.less'
import {createGlobalStyle} from 'styled-components'
import { NextSeo } from 'next-seo';

const GlobalInjection = createGlobalStyle`
    .ant-tabs {
        font-weight: bold;
        &-nav {
            padding-bottom: 20px;
            .ant-tabs-tab {
                &-active {
                    font-weight: bold;
                    color: #000;
                }
                &:hover {
                    color: #000;
                    opacity: 1.0
                }
            }
        }
    }

    .ant-table {
        background: rgba(0,0,0,0);
        color: #000;
    }

    .ant-table thead > tr > th {
        padding-top: 32px;
        padding-bottom: 16px;
        color: rgba(0,0,0,0.5);
        font-family: 'Mark Pro';
        border-bottom: 1px solid #DAE2EF;
    }

    .ant-table tbody > tr > th {
        border-bottom: 1px solid #DAE2EF;
    }

    tbody {
        background: rgba(0,0,0,0);
    }

    .ant-form-item-label {
        font-family: 'Mark Pro';
        font-weight: bold;
        opacity: 0.8;
    }

    .ant-input {
        font-family: 'Mark Pro';
        border: none;
        background-color: rgba(0,0,0,0) !important;
        color: #000;
        padding: 2px 11px;
        border-bottom: 1px solid #DAE2EF;

        &:focus {
            box-shadow: none;
        }
    }

    .ant-card-head {
        display: -webkit-flex;
        justify-content: center;
        padding-top: 16px;
        padding-bottom: 18px;
        border-bottom-width: 0px;
    }

    .ant-form-item-has-error .ant-input:focus {
        box-shadow: none;
    }

    .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
        background: rgba(94, 11, 239, 0.1);
        color: #5E0BEF;
    }

    .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
        background: rgba(94, 11, 239, 0.1);
        color: #5E0BEF;
    }

    .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
        box-shadow: none;
    }

    .ant-steps-item-icon {
        font-family: 'Mark Pro';
    }

    .ant-upload {
        width: 100%;
    }

    @media (max-width: 768px) {
        .ant-page-header-heading-extra {
            display: contents;
        }

        .ant-page-header-heading {
            display: flex;
            justify-content: space-between;
        }
    }
`

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/favicon.png" />
                <script dangerouslySetInnerHTML={{__html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
                    analytics.load("A78umhbZc8eGvu77kkqRBfUr3KMEfxrQ");
                    analytics.page();
                    }}();`}}/>
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDsH3v71frryhXLSRdGysoqbn2MnZJ6J5U&libraries=places"></script>
            </Head>
            <NextSeo 
                title="Sumpixel: Dashboard"
                description="Whether you're an employer or designer, access your dashboard here."
                openGraph={{
                    url: 'https://www.app.sumpixel.com',
                    title: 'Sumpixel: Dashboard',
                    description: `Whether you're an employer or designer, access your dashboard here.`,
                    images: [
                      {
                        url: 'http://drive.google.com/uc?export=view&id=1dfL1wCZHajyVhBO6q3D5cZUvyU1n_TfT',
                        alt: 'Sumpixel Logo',
                      }
                    ],
                    site_name: 'Sumpixel Dashboard',
                  }}
                />
            <GlobalInjection/>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </>
    )
}

declare global {
    interface Window { analytics: any; }
}