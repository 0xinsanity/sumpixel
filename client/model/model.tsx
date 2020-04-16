export const UNIVERSAL_COLOR = '#5E0BEF'
export const UNIVERSAL_BACKGROUND = '#F7F9FB'

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    portfolio?: string;
    location?: string;
    salary?: string;
    visa?: VisaStatus;
    preferredRole?: string;
    linkedin?: string;
    dribbble?: string;
    resume?: string;
    designType?: string;
    completedQuiz?: boolean;
    grade?: DesignerGrade;
    graded?: boolean;
    communications?: string[];
}

export interface QA {
    question: string
    answer?: string
}

export interface DesignerGrade {
    response?: string;
    score?: number
}

export interface Employer {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    companyName?: string
    phoneNumber?: string;
    location?: string;
    communications?: string[];
    isAnonymous?: boolean
}

export interface Communication {
    id: string;
    designerId: string;
    employerId: string;
    designerApprovedTalk: DesignerDecisionTalk;
    decision: EmployerDecisionHire
}

export interface CommForDesigner {
    communicationId: string
    companyName: string
    designerApprovedTalk: DesignerDecisionTalk
    decision: EmployerDecisionHire
}

export interface CommForEmployer {
    communicationId: string
    fullName: string
    designerApprovedTalk: DesignerDecisionTalk
    decision: EmployerDecisionHire
}

export enum PricingModel {
    SMALL = "$75,000-100,000",
    MEDIUM = "$100,000-125,000",
    LARGE = "$125,000+"
}

export enum EmployerDecisionHire {
    REJECT = "REJECT",
    HIRE = "HIRE",
    UNDECIDED = "UNDECIDED"
}

export enum DesignerDecisionTalk {
    WILL_TALK = "WILL_TALK",
    WILL_NOT_TALK = "WILL_NOT_TALK",
    UNDECIDED = "UNDECIDED"
}

export enum VisaStatus {
    US_CITIZEN = "US Citizen/Green Card",
    VISA_HOLDER = "US Visa Holder",
    ELIGIBLE = "Eligible For US Visa",
    NOT_ELIGIBLE = "Not Eligible for US Visa"
}

export enum NavBarStatus {
    Undecided,
    Employer,
    Designer
}
