import React, {useContext, useState} from 'react'
import {Button, Form, Input, Row, Radio, Card, message, Typography} from 'antd'
import {myFirebase} from '../lib/firebase'
import {User, Employer, NavBarStatus} from '../model/model'
import {getUser, getEmployer} from '../lib/server'
import Router from 'next/router'
import {UserContext} from '../lib/UserProvider'
import { Container } from '../components/General/Container';
import Loading from '../components/General/Loading'
import LoginComponent from '../components/Login/LoginComponent';
import Head from 'next/head'

const Terms: React.FC = () => {
    return (
        <>
            <Head>
                <title>Terms of Service</title>
            </Head>
            <Container>
                <Typography.Title>Terms of Service</Typography.Title>
                <Typography.Text>1. Terms
By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.
2. Use License
Permission is granted to temporarily download one copy of the materials (information or software) on Sumpixel’s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
modify or copy the materials;
use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
attempt to decompile or reverse engineer any software contained on the website;
remove any copyright or other proprietary notations from the materials; or
transfer the materials to another person or "mirror" the materials on any other server.
This license shall automatically terminate if you violate any of these restrictions and may be terminated by Sumpixel at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.

3. Dis­claimer
The mate­ri­als on Sumpixel’s web­site are pro­vid­ed on an ​‘as is’ basis. Sumpixel makes no war­ranties, expressed or implied, and here­by dis­claims and negates all oth­er war­ranties includ­ing, with­out lim­i­ta­tion, implied war­ranties or con­di­tions of mer­chantabil­i­ty, fit­ness for a par­tic­u­lar pur­pose, or non-infringe­ment of intel­lec­tu­al prop­er­ty or oth­er vio­la­tion of rights.
Fur­ther, Sumpixel does not war­rant or make any rep­re­sen­ta­tions con­cern­ing the accu­ra­cy, like­ly results, or reli­a­bil­i­ty of the use of the mate­ri­als on its web­site or oth­er­wise relat­ing to such mate­ri­als or on any sites linked to this site.
4. Lim­i­ta­tions
In no event shall Sumpixel or its sup­pli­ers be liable for any dam­ages (includ­ing, with­out lim­i­ta­tion, dam­ages for loss of data or prof­it, or due to busi­ness inter­rup­tion) aris­ing out of the use or inabil­i­ty to use the mate­ri­als on Sumpixel web­site, even if an autho­rized rep­re­sen­ta­tive has been noti­fied oral­ly or in writ­ing of the pos­si­bil­i­ty of such dam­age. Because some juris­dic­tions do not allow lim­i­ta­tions on implied war­ranties, or lim­i­ta­tions of lia­bil­i­ty for con­se­quen­tial or inci­den­tal dam­ages, these lim­i­ta­tions may not apply to you.
5. Accu­ra­cy of materials
The mate­ri­als appear­ing on Sumpixel web­site could include tech­ni­cal, typo­graph­i­cal, or pho­to­graph­ic errors. Sumpixel does not war­rant that any of the mate­ri­als on its web­site are accu­rate, com­plete or cur­rent. Sumpixel  may make changes to the mate­ri­als con­tained on its web­site at any time with­out notice. How­ev­er Sumpixel does not make any com­mit­ment to update the materials.
6. Links
Sumpixel has not reviewed all of the sites linked to its web­site and is not respon­si­ble for the con­tents of any such linked site. The inclu­sion of any link does not imply endorse­ment by Sumpixel of the site. Use of any such linked web­site is at the user’s own risk.
7. Site Terms of Use Modifications
Sumpixel may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
8. Governing Law
Any claim relating to Sumpixel’s website shall be governed by the laws of the State of Delaware without regard to its conflict of law provisions.
9. Placements
For services rendered in the placement of any candidate under this agreement (“Agreement”), Customer agrees to pay Sumpixel ("Company"), a fee equal to 20% of the placed candidate's first year’s annual compensation, within 10 days of the placed candidate's commencement of employment.

Such fee will be billed in U.S. dollars if the placement is made with Customer in the U.S., or billed in Canadian dollars if the placement is made with Customer in Canada.

Provided payment is received within 10 days of the placed candidate’s commencement of employment, Company will offer Customer the following guarantee:

• If the candidate is terminated for substandard work performance or voluntarily resigns within the first 30 calendar days of the candidate’s start date, all monies paid by Customer for the related transaction will be refunded.

• If the candidate is terminated for substandard work performance or voluntarily resigns between 31 and 60 calendar days of the candidate’s start date, two-thirds of all monies paid by Customer for the related transaction collected will be refunded.

• If the candidate is terminated for substandard work performance or voluntarily resigns between 61 and 90 calendar days of the candidate’s start date, one-third of all monies paid by Customer for the related transaction will be refunded.

This guarantee does not apply in cases of merger, acquisition or layoff. To qualify for this guarantee, Customer must notify Company within 15 days after the candidate’s last day of work.

All referrals will remain in effect for one year. If Customer interviews a candidate from Company and that candidate is hired by Customer anytime over the following year, Company will be entitled to its entire fee regardless of Customer’s evidence of prior or subsequent introductions to the candidate.

Customer agrees to pay in full all sums due to Company under this agreement, regardless if Customer redirects or outsources placement services to a third party organization. Any additional costs incurred by Customer will be the sole responsibility of Customer.
</Typography.Text>
            </Container>
        </>
    );
};

export default Terms;