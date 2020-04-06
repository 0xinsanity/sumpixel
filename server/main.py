from fastapi import FastAPI, Header, HTTPException
from pydantic import BaseModel
import os
import json
import uvicorn
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from fastapi.encoders import jsonable_encoder
from typing import List, Dict
from fastapi.middleware.cors import CORSMiddleware
import uuid
import sendgrid
from sendgrid.helpers.mail import Mail
import slack

app = FastAPI()
cred = credentials.Certificate("credentials.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
sg = sendgrid.SendGridAPIClient(api_key=os.environ.get('SENDGRID_API_KEY'))
slack_client = slack.WebClient(token=os.environ.get('SLACK_API_CLIENT'))

origins = [
    'https://localhost:3000',
    'http://localhost:3000',
    'http://sumpixel-client.now.sh',
    'https://sumpixel-client.now.sh',
    'http://app.sumpixel.com',
    'https://app.sumpixel.com',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    id: str
    email: str
    firstName: str
    lastName: str
    phoneNumber: str
    portfolio: str
    location: str
    salary: str
    visa: str
    preferredRole: str
    resume: str
    linkedin: str = None
    designType: str = None
    dribbble: str = None
    completedQuiz: bool = False
    grade: Dict = {}
    graded: bool = False
    communications: List[str] = []

class UserModified(BaseModel):
    id: str
    email: str = None
    firstName: str = None
    lastName: str = None
    phoneNumber: str = None
    portfolio: str = None
    location: str = None
    salary: str = None
    visa: str = None
    preferredRole: str = None
    resume: str = None
    linkedin: str = None
    designType: str = None
    dribbble: str = None
    completedQuiz: bool = None
    grade: Dict = None
    graded: bool = None
    communications: List[str] = None

class Employer(BaseModel):
    id: str
    email: str
    firstName: str
    lastName: str
    phoneNumber: str
    location: str
    companyName: str
    communications: List[str] = []

class EmployerModified(BaseModel):
    id: str
    email: str = None
    firstName: str = None
    lastName: str = None
    phoneNumber: str = None
    location: str = None
    companyName: str = None
    communications: List[str] = None

class Communication(BaseModel):
    designerId: str
    employerId: str
    designerApprovedTalk: str = "UNDECIDED"
    decision: str = "UNDECIDED"

class DesignerGrade(BaseModel):
    id: str
    response: str
    score: float

class UpdateDesignerDecision(BaseModel):
    id: str
    designerApprovedTalk: str

class UpdateEmployerDecision(BaseModel):
    id: str
    decision: str


@app.post("/create-user")
def create_user(user: User):
    doc_ref = db.collection('users').document(user.id)
    json_data = jsonable_encoder(user)
    doc_ref.set(json_data)
    return {"Success": "Created User"}

@app.post("/modify-user")
def modify_user(user: UserModified):
    doc_ref = db.collection('users').document(user.id)
    json_data = jsonable_encoder(user)
    json_data = {k: v for k, v in jsonable_encoder(user).items() if v is not None}
    doc_ref.update(json_data)
    return {"Success": "Modified User"}

@app.get("/get-user")
def get_user(id: str):
    doc = get_user_helper(id)
    return doc

@app.get("/remove-user")
def remove_user(id: str):
    try:
        db.collection('users').document(id).delete()
    except:
        # User does not exist
        raise HTTPException(status_code=404, detail="Issue Retrieving User")
    return {"Success": "Deleted User"}


@app.post("/create-employer")
def create_employer(user: Employer):
    doc_ref = db.collection('employers').document(user.id)
    json_data = jsonable_encoder(user)
    doc_ref.set(json_data)
    return {"Success": "Created Employer"}

@app.post("/modify-employer")
def modify_employer(employer: EmployerModified):
    doc_ref = db.collection('employers').document(employer.id)
    json_data = {k: v for k, v in jsonable_encoder(employer).items() if v is not None}
    doc_ref.update(json_data)
    return {"Success": "Modified Employer"}


@app.get("/get-employer")
def get_employer(id: str):
    doc = get_employer_helper(id)
    return doc

@app.get("/remove-employer")
def remove_employer(id: str):
    try:
        db.collection('users').document(id).delete()
    except:
        # User does not exist
        raise HTTPException(status_code=404, detail="Issue Retrieving Employer")
    return {"Success": "Deleted User"}

@app.post("/graded-designer")
def graded_designer(grading: DesignerGrade, Authorization: str = Header('')):
    auth_key = "5a563c58-769e-11ea-bc55-0242ac130003"
    print("Authorization: " + Authorization)
    if Authorization != auth_key:
        raise HTTPException(status_code=404, detail="Incorrect Authorization")

    doc = get_user_helper(grading.id)

    if doc["graded"] == False:
        # TODO: Change Message if you have a grade of 0
        slack_message = "Grading for "+ doc["firstName"] + " " + doc["lastName"] + " is completed.\nID: " + grading.id + ".\n SendGrid email sent"
        doc["graded"] = True
        message = Mail(
            from_email="noah.hanover@sumpixel.com",
            to_emails=doc["email"]
        )

        message.dynamic_template_data = {
            'first_name': doc["firstName"],
            'Sender_Name': 'Noah Hanover'
        }
        message.template_id = 'd-d0f49ac0d70844519acc68701511d8de'
        try:
            response = sg.send(message)
        except Exception as e:
            raise HTTPException(status_code=404, detail=e)
    else:
        slack_message = "Grading for "+ doc["firstName"] + " " + doc["lastName"] + " was updated.\nID: " + grading.id + ".\n SendGrid email sent"
    

    doc["grade"] = {"response": grading.response, "score": grading.score}
    db.collection('users').document(grading.id).update(doc)

    slack_client.chat_postMessage(
        channel="#graded-quizzes",
        text=slack_message
    )

    return doc

@app.post("/create-new-communication")
def create_new_communication(comm: Communication):
    id = str(uuid.uuid1())
    doc_ref_comm = db.collection('communications').document(id)
    json_data = jsonable_encoder(comm)
    json_data["id"] = id
    doc_ref_comm.set(json_data)

    doc_ref_users = db.collection('users').document(comm.designerId)
    designer = get_user_helper(comm.designerId)
    designer["communications"].append(id)
    doc_ref_users.update(designer)

    doc_ref_employers = db.collection('employers').document(comm.employerId)
    employer = get_employer_helper(comm.employerId)
    employer["communications"].append(id)
    doc_ref_employers.update(employer)

    comm = json_data
    fullName =  designer["firstName"] + " " + designer["lastName"] 

    message = employer["companyName"] + " wants to talk to you! Go to your dashboard and tell them you want to talk with them!"
    slack_message = employer["companyName"] + " wants to talk to " + fullName + "."
    slack_message = slack_message + "\nDesigner ID: " + designer["id"] + "\nEmployer ID: "  + employer["id"]

    mail = Mail(
        from_email="noah.hanover@sumpixel.com",
        to_emails=designer["email"]
    )

    mail.dynamic_template_data = {
        'first_name': employer["firstName"],
        'Sender_Name': 'Noah Hanover',
        'message': message
    }
    mail.template_id = 'd-7694b52a63a747ecb48dde152b3c6810'

    try:
        response = sg.send(mail)
    except Exception as e:
        raise HTTPException(status_code=404, detail=str(e))

    slack_client.chat_postMessage(
        channel="#employer-opened-communication",
        text=slack_message
    )

    return json_data

@app.get("/get-all-designer-communications")
def get_designer_communications(id: str):
    doc = get_user_helper(id)
    commIds = doc["communications"]

    communicationList = []
    for commId in commIds:
        commObj = {}
        doc_comm = get_communication_helper(commId)
        doc_employer = get_employer_helper(doc_comm["employerId"])
        
        commObj["communicationId"] = commId
        commObj["designerApprovedTalk"] = doc_comm["designerApprovedTalk"]
        commObj["decision"] = doc_comm["decision"]
        commObj["companyName"] = doc_employer["companyName"]

        communicationList.append(commObj)

    return communicationList

@app.get("/get-all-employer-communications")
def get_employer_communications(id: str):
    doc = get_employer_helper(id)
    commIds = doc["communications"]

    communicationList = []
    for commId in commIds:
        commObj = {}
        doc_comm = get_communication_helper(commId)
        doc_user = get_user_helper(doc_comm["designerId"])

        commObj["communicationId"] = commId
        commObj["designerApprovedTalk"] = doc_comm["designerApprovedTalk"]
        commObj["decision"] = doc_comm["decision"]
        commObj["fullName"] = doc_user["firstName"] + " " + doc_user["lastName"]

        communicationList.append(commObj)

    return communicationList


@app.post("/update-designer-decision")
def update_designer_decision(update: UpdateDesignerDecision):
    doc_ref = db.collection('communications').document(update.id)
    json_data = jsonable_encoder(update)
    doc_ref.update(json_data)
    
    comm = get_communication_helper(update.id)
    designer = get_user_helper(comm["designerId"])
    employer = get_employer_helper(comm["employerId"])

    fullName =  designer["firstName"] + " " + designer["lastName"] 
    if update.designerApprovedTalk == "UNDECIDED":
        message = fullName + " is continuing to review your company and will get back to you soon."
        slack_message = fullName + " is undecided with regards to talking to " + employer["companyName"] + "."
    elif update.designerApprovedTalk == "WILL_NOT_TALK":
        message = fullName + " has decided that your position is not the right fit for them. I am sorry."
        slack_message = fullName + " will not talk to " + employer["companyName"] + "."
    elif update.designerApprovedTalk == "WILL_TALK":
        message = fullName + " wants to discuss your opening further. We will contact you soon to set up an interview with them."
        slack_message = fullName + " will talk to " + employer["companyName"] + "."
    
    slack_message = slack_message + "\nDesigner ID: " + designer["id"] + "\nEmployer ID: "  + employer["id"]

    mail = Mail(
        from_email="noah.hanover@sumpixel.com",
        to_emails=employer["email"]
    )

    mail.dynamic_template_data = {
        'first_name': employer["firstName"],
        'Sender_Name': 'Noah Hanover',
        'message': message
    }
    mail.template_id = 'd-0fadd01c1da8499d83515f2d1fe3e51b'

    try:
        response = sg.send(mail)
    except Exception as e:
        raise HTTPException(status_code=404, detail=str(e))

    slack_client.chat_postMessage(
        channel="#designer-decision-update",
        text=slack_message
    )

    return json_data

@app.post("/update-employer-decision")
def update_employer_decision(update: UpdateEmployerDecision):
    doc_ref = db.collection('communications').document(update.id)
    json_data = jsonable_encoder(update)
    doc_ref.update(json_data)
    
    comm = get_communication_helper(update.id)
    designer = get_user_helper(comm["designerId"])
    employer = get_employer_helper(comm["employerId"])

    if update.decision == "UNDECIDED":
        message = employer["companyName"] + " is continuing to review your information and will get back to you very soon."
        slack_message = employer["companyName"] + "is undecided with " + designer["firstName"] + " " + designer["lastName"] + "."
    elif update.decision == "REJECT":
        message = employer["companyName"] + " has decided to go in another direction for their newest position. I am sorry."
        slack_message = employer["companyName"] + " rejected " + designer["firstName"] + " " + designer["lastName"] + "."
    elif update.decision == "HIRE":
        message = "Congratulations! " + employer["companyName"] + " has decided that they want to hire you. You will recieve more information shortly about the hiring process."
        slack_message = employer["companyName"] + " wants to hire " + designer["firstName"] + " " + designer["lastName"] + "."
    
    slack_message = slack_message + "\nEmployer ID: " + employer["id"] + "\nDesigner ID: "  + designer["id"]

    mail = Mail(
        from_email="noah.hanover@sumpixel.com",
        to_emails=designer["email"]
    )

    mail.dynamic_template_data = {
        'first_name': designer["firstName"],
        'Sender_Name': 'Noah Hanover',
        'message': message
    }
    mail.template_id = 'd-7694b52a63a747ecb48dde152b3c6810'

    try:
        response = sg.send(mail)
    except Exception as e:
        raise HTTPException(status_code=404, detail=str(e))

    slack_client.chat_postMessage(
        channel="#employer-decision-update",
        text=slack_message
    )

    return json_data

@app.get("/get-graded-designers")
def get_graded_designers(id: str):
    employer = get_employer_helper(id)

    # REMOVE ZEROES
    # Now we know id is correct, retrieve designers
    doc_users_all = db.collection('users').where('graded', '==', True).stream()
    if employer["communications"] != []:
        doc_users_exclude = db.collection('users').where('graded', '==', True).where('communications', 'array_contains_any', employer["communications"]).stream()
        doc_final_users = list(set(doc_users_all) - set(doc_users_exclude))
    else:
        doc_final_users = doc_users_all

    # lastly, retrieve grades and output
    users = []
    for user in doc_final_users:
        user_dict = user.to_dict()

        if user_dict["grade"]["score"] != 0:
            users.append(user_dict)
    
    return sorted(users, key=lambda user: user["grade"]["score"], reverse=True)

def get_user_helper(id: str):
    doc_ref = db.collection('users').document(id)
    
    try:
        doc = doc_ref.get()
    except:
        # User does not exist
        raise HTTPException(status_code=404, detail="Issue Retrieving User")
    doc = doc.to_dict()

    if doc == None:
        raise HTTPException(status_code=404, detail="Issue Retrieving User")

    return doc

def get_employer_helper(id: str):
    doc_ref = db.collection('employers').document(id)
    
    try:
        doc = doc_ref.get()
    except:
        # User does not exist
        raise HTTPException(status_code=404, detail="Issue Retrieving Employer")

    doc = doc.to_dict()
    if doc == None:
        raise HTTPException(status_code=404, detail="Issue Retrieving Employer")

    return doc

def get_communication_helper(id: str):
    doc_comm_ref = db.collection('communications').document(id)
    try:
        doc = doc_comm_ref.get()
    except:
        # User does not exist
        raise HTTPException(status_code=404, detail="Issue Retrieving Communication")
    doc_comm = doc.to_dict()

    if doc_comm == None:
        raise HTTPException(status_code=404, detail="Issue Retrieving Communication")
    
    return doc_comm

if __name__ == "__main__":
    if os.environ['PORT']:
        port_num = int(os.environ['PORT'])
    else:
        port_num = 5000
    uvicorn.run(app, host="0.0.0.0", port=port_num)