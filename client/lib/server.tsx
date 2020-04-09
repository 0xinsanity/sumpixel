import { User, Employer, EmployerDecisionHire, DesignerDecisionTalk, CommForDesigner, Communication, CommForEmployer } from "../model/model";
import axios from 'axios';

const SERVER_BASE = 'https://sumpixel-server.herokuapp.com/'

enum HTTP_Requests {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT'
}

const request = async (url: string, params, method: HTTP_Requests = HTTP_Requests.GET) => {
    var response;
    switch (method) {
        case HTTP_Requests.GET:
            response = await axios.get(SERVER_BASE + url, {params: params});
            break;
        case HTTP_Requests.POST:
            response = await axios.post(SERVER_BASE + url, params);
            break;
        case HTTP_Requests.PUT:
            response = await axios.put(SERVER_BASE + url, params);
            break;
    }

    if (response.status !== 200) {
        return generateErrorResponse('The server responded with an unexpected status.');
    }

    const result = response.data;

    return result;

}

const generateErrorResponse = (message) => {
    return {
        status : 'error',
        message
    };
}

export const getUser = async (id: string): Promise<User | {user_exists: boolean}> => {
    return await request('get-user', {id: id})
}

export const getEmployer = async (id: string): Promise<Employer | {user_exists: boolean}> => {
    return await request('get-employer', {id: id})
}

export const removeUser = async (id: string) => {
    return await request('remove-user', {id: id})
}

export const removeEmployer = async (id: string) => {
    return await request('remove-employer', {id: id})
}

export const createUser = async (user: User) => {
    return await request('create-user', user, HTTP_Requests.POST)
}

export const modifyUser = async (user: User) => {
    return await request('modify-user', user, HTTP_Requests.POST)
}

export const createEmployer = async (employer: Employer) => {
    return await request('create-employer', employer, HTTP_Requests.POST)
}

export const modifyEmployer = async (employer: Employer) => {
    return await request('modify-employer', employer, HTTP_Requests.POST)
}

export const createCommunication = async (designerId: string, employerId: string): Promise<Communication> => {
    return await request('create-new-communication', {designerId: designerId, employerId: employerId }, HTTP_Requests.POST)
}

export const updateDesignerDecision = async (commId: string, decision: DesignerDecisionTalk) => {
    return await request('update-designer-decision', {id: commId, designerApprovedTalk: decision }, HTTP_Requests.POST)
}

export const updateEmployerDecision = async (commId: string, decision: EmployerDecisionHire) => {
    return await request('update-employer-decision', {id: commId, decision: decision }, HTTP_Requests.POST)
}

export const getDesignCommunicationsList = async (id: string): Promise<CommForDesigner[]> => {
    return await request('get-all-designer-communications', {id})
}

export const getEmployerCommunicationsList = async (id: string): Promise<CommForEmployer[]> => {
    return await request('get-all-employer-communications', {id})
}

export const getGradedDesigners = async (id: string): Promise<User[]> => {
    return await request('get-graded-designers', {id})
}

export const getDesignerFromCommunication = async (id: string): Promise<User> => {
    return await request('get-designer-from-communication', {id})
}