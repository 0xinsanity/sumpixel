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
    graded?: boolean;
    gradeId?: string
    communications?: string[];
}

export interface DesignerGrade {
    id: string;
    designerId: string;
    response: string;
    score: number
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
}

export interface Communication {
    id: string;
    designerId: string;
    employerId: string;
    designerApprovedTalk: DesignerDecisionTalk;
    decision: EmployerDecisionHire
}

export interface CommDesigner {
    communicationId: string
    companyName: string
    designerApprovedTalk: DesignerDecisionTalk
    decision: EmployerDecisionHire
}

export enum EmployerDecisionHire {
    REJECT = "Reject",
    HIRE = "Hire",
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
