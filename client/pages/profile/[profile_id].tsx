import React, {useEffect, useState, useContext} from 'react'
import Router, { useRouter } from 'next/router'
import SimpleNavigationBar from '../../components/Profile/SimpleNavigationBar'
import Head from 'next/head'
import {User, Employer, QA} from '../../model/model'
import Loading from '../../components/General/Loading'
import {getUser, createCommunication, getQAById, getDesignerFromCommunication} from '../../lib/server'
import {Background} from '../dashboard_employer'
import {Typography, message, Col, Row} from 'antd'
import {UserContext} from '../../lib/UserProvider'
import TextAboveAnswer from '../../components/Profile/TextAboveAnswer'
import Socials from '../../components/Profile/Socials'
import styled from 'styled-components'
import {storage_ref} from '../../lib/firebase'
import {Communication} from '../../model/model'
import {BigBlackButton} from '../../components/General/BigBlackButton'
import _ from 'lodash'
import OpenPage from '../../components/General/OpenPage'

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 75%;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 40px;
`

const UpperFullContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-right: 40px;
`

const HeaderTitle = styled(Typography.Title)`
    font-family: 'Mark Pro Bold';
    padding-bottom: 20px;
`

const Section = styled.div`
    padding-bottom: 52px;
`

const Profile: React.FC = () => {
    const {currentUser, changeUser, setLoading}  = useContext(UserContext)
    const router = useRouter()
    const { profile_id } = router.query
    const [id, changeId] = useState(undefined)
    const [currentProfile, changeCurrentProfile]  = useState<User>(undefined)
    const [profileString, changeProfileString] = useState<string>('Profile')
    const [qAndA, changeQandA] = useState<QA[]>(null)
    const [profileLink, changeProfileLink] = useState<string>(undefined)
    let showStats = currentUser !== null && ((currentUser as Employer).companyName !== undefined)

    useEffect(() => {
        if (profile_id !== undefined) {
            console.log('id'+profile_id)
            changeId(profile_id as string)
        }
    }, [profile_id])


    useEffect(() => {
        if (id === undefined) return
        
        setLoading(true)
        console.log('here1')
        getUser(id).then((profile: User) => {
            console.log('here')
            getQAById(id).then((qAndA: QA[]) => {
                changeQandA(qAndA)
            })
            storage_ref.child('profilePic/' + profile.profilePic).getDownloadURL().then((url => {
                changeProfileLink(url)
            })).catch((error) => {
                console.error(error)
            })
            showStats = showStats && profile['graded']
            if (showStats) {
                changeCurrentProfile(profile)
            } else {
                changeCurrentProfile(profile)
            }
            changeProfileString(profile.firstName + " " + profile.lastName)
            setLoading(false)
            window.analytics.page(profileString)
        }).catch((error) => {
            console.error('ERROR IS HERE' + error)
            setLoading(false)
            //OpenPage(setLoading, '/')
        })
    }, [id])

    const downloadResume = () => {
        storage_ref.child('resumes/' + currentProfile.resume).getDownloadURL().then(url => {
            console.log(url)
            window.open(url, '_blank')
        }).catch((error) => {
            console.error(error)
        })
    }

    const connectWithPerson = async () => {
        if (showStats) {
            // TODO: Block employer from pressing connect with designer more than once
            const communications = await Promise.all(_.map(currentUser.communications, async (commId) => 
                await getDesignerFromCommunication(commId)
            ))

            if (_.findIndex(communications, (comm: User) => comm.id === profile_id) !== -1) {
                message.info('You have already opened communications with ' + profileString)
                return
            }
            window.analytics.track((currentUser as Employer).companyName + ' connects to designer');
            const comm = await createCommunication(profile_id as string, currentUser.id)
            const newUser = {...currentUser, communications: [...currentUser.communications, comm.id]}
            changeUser(newUser)
            OpenPage(setLoading, '/dashboard_employer')
        } else if (currentUser === null || (currentUser as Employer).isAnonymous) {
            // Not logged in
            OpenPage(setLoading, '/signup')
        } else {
            // Designer logged in
            message.info('Only Employers can connect with available Designers')
        }
    }

    if (currentProfile === undefined || currentProfile === null) {
        return (<></>)
    }

    return (<>
                <Head>
                    <title>{profileString}</title>
                </Head>
                <SimpleNavigationBar 
                    subtitle={profileString}
                    avatarSrc={profileLink}
                >
                    <UpperFullContainer>
                        <TextContainer>
                            <TextAboveAnswer above={'Desired Salary'} below={currentProfile.salary}/>
                            <TextAboveAnswer above={'Preferred Role'} below={currentProfile.preferredRole}/>
                            <TextAboveAnswer above={'Quiz'} below={currentProfile.designType}/>
                            <TextAboveAnswer above={'Portfolio'} link={currentProfile.portfolio} below={'Website'}/>
                            <TextAboveAnswer above={'Resume'} onClick={downloadResume} below={'Download'}/>
                            <TextAboveAnswer above={'Visa Status'} below={currentProfile.visa}/>
                            <Socials linkedin={currentProfile.linkedin} dribbble={currentProfile.dribbble}/>
                        </TextContainer>
                        <BigBlackButton style={{height: 50}} onClick={connectWithPerson}>
                           {currentUser === null || (currentUser as Employer).isAnonymous ? 'Sign Up To ' : null}Connect
                        </BigBlackButton>
                    </UpperFullContainer>
                    <Background style={{height: '100%', padding: 64}}>
                        <Row>
                            <Col span={24}>
                                {currentProfile.completedQuiz ? 
                                    <>
                                        {showStats ? 
                                            <Section>
                                                <HeaderTitle level={3}>Feedback</HeaderTitle>
                                                <TextAboveAnswer style={{paddingBottom: 32}} above={'Score'} below={currentProfile.grade.score + '/10'}/>
                                                <TextAboveAnswer belowTextStyle={{maxWidth: 'max-content'}} above={'Response'} below={currentProfile.grade.response}/>
                                            </Section>
                                        : null}
                                        <Section style={{paddingBottom: 0}}>
                                            <HeaderTitle level={3}>Questions</HeaderTitle>
                                            {_.map(qAndA, ({question, answer}) => {
                                                return (<TextAboveAnswer style={{paddingBottom: 32}} belowTextStyle={{maxWidth: 'max-content'}} above={question} below={answer}/>)
                                            })}
                                            
                                        </Section>
                                    </>
                                :
                                <Section style={{paddingBottom: 0}}>
                                    <HeaderTitle style={{paddingBottom: 0}} level={3}>Quiz</HeaderTitle>
                                    <Typography.Text>This user has not completed their quiz yet.</Typography.Text>
                                </Section>
                                }
                                
                            </Col>
                        </Row>
                    </Background>
                </SimpleNavigationBar>
            </>)
}

export default Profile