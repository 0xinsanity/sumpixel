
export interface User {
    firebaseId: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    portfolio: string;
    location: string;
    salary: string;
    visa: VisaStatus;
    preferred_role: string;
    linkedin: string;
    dribbble: string;
}

export enum VisaStatus {
    US_CITIZEN = "US Citizen/Green Card",
    VISA_HOLDER = "US Visa Holder",
    ELIGIBLE = "Eligible For US Visa",
    NOT_ELIGIBLE = "Not Eligible for US Visa"
}