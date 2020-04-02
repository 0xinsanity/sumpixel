import { User, Employer } from "../model/model";
import axios from 'axios';

const SERVER_BASE = 'https://sumpixel-server.herokuapp.com/'

enum HTTP_Requests {
    GET = 'GET',
    POST = 'POST'
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
    }

    if (response.status !== 200) {
        return generateErrorResponse('The server responded with an unexpected status.');
    }

    const result = response.data;

    return result;

}

const objectToQueryString = (obj) => {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}

const generateErrorResponse = (message) => {
    return {
        status : 'error',
        message
    };
}

export const didCompleteQuiz = async (id: string) => {
    return await request('user-finished-quiz', {id: id})
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

export const createEmployer = async (employer: Employer) => {
    return await request('create-employer', employer, HTTP_Requests.POST)
}