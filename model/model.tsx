
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
    completedQuiz?: boolean;
    communications?: string[];
}

export enum VisaStatus {
    US_CITIZEN = "US Citizen/Green Card",
    VISA_HOLDER = "US Visa Holder",
    ELIGIBLE = "Eligible For US Visa",
    NOT_ELIGIBLE = "Not Eligible for US Visa"
}