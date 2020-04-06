import React, {useEffect} from 'react'
import 'antd/dist/antd.css'
import UserProvider from '../lib/UserProvider'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/favicon.png" />
                <script dangerouslySetInnerHTML={{__html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
                    analytics.load("A78umhbZc8eGvu77kkqRBfUr3KMEfxrQ");
                    analytics.page();
                    }}();`}}/>
                <script dangerouslySetInnerHTML={{__html: `
                    window['_fs_debug'] = false;
                    window['_fs_host'] = 'fullstory.com';
                    window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
                    window['_fs_org'] = 'T7XHR';
                    window['_fs_namespace'] = 'FS';
                    (function(m,n,e,t,l,o,g,y){
                        if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
                        g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
                        o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
                        y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
                        g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
                        g.anonymize=function(){g.identify(!!0)};
                        g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
                        g.log = function(a,b){g("log",[a,b])};
                        g.consent=function(a){g("consent",!arguments.length||a)};
                        g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
                        g.clearUserCookie=function(){};
                        g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
                        if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
                        g._v="1.2.0";
                    })(window,document,window['_fs_namespace'],'script','user');`}}/>
            </Head>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </>
    )
}

declare global {
    interface Window { analytics: any; }
}