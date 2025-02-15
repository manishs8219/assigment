run project

cd backend  
npm install 
npm start

sumit property details
curl -X POST http://localhost:9080/builderProperty -H "Content-Type: application/json" -d '{"name": "Luxury Villa", "location": "Beverly Hills", "price": 1200000, "availableUnits": 5, "builderId": "605c72ef153207001f6470e"}'

Success Response:
{
    "success": true,
    "status": 200,
    "message": "create property successfully",
    "body": {
        "name": "Manish's Luxury Apartment",
        "location": "mohali chandigarh",
        "price": 2000,
        "availableUnits": 2,
        "status": "pending_publish",
        "approvalStatus": "pending",
        "builderId": "67b027877cc1c07902c945c5",
        "submissionDate": "2025-02-15T06:18:27.723Z",
        "_id": "67b031b39315e380a31af5f0",
        "__v": 0
    }
}

approved property details
curl -X POST http://localhost:9080/adminApproveProperty -H "Content-Type: application/json" -d '{"propertyId": "605c72ef153207001f6470f"
"approvalStatus":""}'

Success Response:
{
    "success": true,
    
    "status": 200,
    "message": "Property approved successfully",
    "body": {
        "_id": "67b031b39315e380a31af5f0",
        "name": "Manish's Luxury Apartment",
        "location": "mohali chandigarh",
        "price": 2000,
        "availableUnits": 2,
        "status": "pending_publish",
        "approvalStatus": "reject",
        "builderId": "67b027877cc1c07902c945c5",
        "submissionDate": "2025-02-15T06:18:27.723Z",
        "__v": 0
    }
}

publish property
curl -X POST http://localhost:9080/adminPublishProperty \
  -H "Content-Type: application/json" \
  -d '{"propertyId": "67b02925b456ffae66cb1556"}'

Success Response:
{
    "success": true,
    "status": 200,
    "message": "Property published successfully",
    "body": {
        "_id": "67b02925b456ffae66cb1556",
        "name": "Manish's Luxury Apartment",
        "location": "mohali chandigarh",
        "price": 2000,
        "availableUnits": 2,
        "status": "published",
        "approvalStatus": "approved",
        "builderId": "67b027877cc1c07902c945c5",
        "submissionDate": "2025-02-15T05:41:57.190Z",
        "__v": 0
    }
}

admin get pending property
curl -X get http://localhost:9080/adminProperties \
  -H "Content-Type: application/json" \
  
Sucess Response:
{
    "success": true,
    "status": 200,
    "message": "get admin property successfully",
    "body": [
        {
            "_id": "67b03823b12461ae9ef08ef9",
            "name": "Manish's Luxury Apartment",
            "location": "mohali chandigarh",
            "price": 2000,
            "availableUnits": 2,
            "status": "pending_publish",
            "approvalStatus": "pending",
            "builderId": {
                "_id": "67b027877cc1c07902c945c5",
                "name": "Manish",
                "email": "builder@gmail.com",
                "phone": "8219739756",
                "password": "$2b$10$ZIyJb2f2N3Uo5GFPqyNwteOPC1Soat2BK9I3IIx9QppWkE5eCzdVO",
                "__v": 0
            },
            "submissionDate": "2025-02-15T06:45:55.247Z",
            "__v": 0
        }
    ]
}


builder punlished message
curl -X GET "http://localhost:9080/builder/messages?builderId=605c72ef153207001f6470e"

Success Response:

{
    "success": true,
    "status": 200,
    "message": "message get sucessfully",
    "body": [
        {
            "_id": "67b02d092f4653f9ed908338",
            "builderId": {
                "_id": "67b027877cc1c07902c945c5",
                "name": "Manish",
                "email": "builder@gmail.com",
                "phone": "8219739756",
                "password": "$2b$10$ZIyJb2f2N3Uo5GFPqyNwteOPC1Soat2BK9I3IIx9QppWkE5eCzdVO",
                "__v": 0
            },
            "message": "Your property has been approved",
            "status": "sent",
            "sentDate": "2025-02-15T05:58:33.463Z",
            "__v": 0
        },
       
        {
            "_id": "67b02e5237848f5364f4d005",
            "builderId": {
                "_id": "67b027877cc1c07902c945c5",
                "name": "Manish",
                "email": "builder@gmail.com",
                "phone": "8219739756",
                "password": "$2b$10$ZIyJb2f2N3Uo5GFPqyNwteOPC1Soat2BK9I3IIx9QppWkE5eCzdVO",
                "__v": 0
            },
            "message": "Your property has been approved",
            "status": "sent",
            "sentDate": "2025-02-15T06:04:02.217Z",
            "__v": 0
        },
        {
            "_id": "67b02edca1b9ec3b74a26f84",
            "builderId": {
                "_id": "67b027877cc1c07902c945c5",
                "name": "Manish",
                "email": "builder@gmail.com",
                "phone": "8219739756",
                "password": "$2b$10$ZIyJb2f2N3Uo5GFPqyNwteOPC1Soat2BK9I3IIx9QppWkE5eCzdVO",
                "__v": 0
            },
            "message": "Your property has been approved",
            "status": "sent",
            "sentDate": "2025-02-15T06:06:20.313Z",
            "__v": 0
        },
        {
            "_id": "67b02ee1a1b9ec3b74a26f88",
            "builderId": {
                "_id": "67b027877cc1c07902c945c5",
                "name": "Manish",
                "email": "builder@gmail.com",
                "phone": "8219739756",
                "password": "$2b$10$ZIyJb2f2N3Uo5GFPqyNwteOPC1Soat2BK9I3IIx9QppWkE5eCzdVO",
                "__v": 0
            },
            "message": "Your property has been approved",
            "status": "sent",
            "sentDate": "2025-02-15T06:06:25.645Z",
            "__v": 0
        },
        
        
    ]
}

Error Handling

The API uses standard HTTP status codes for error handling:

200 OK: The request was successful.
400 Bad Request: Invalid input, missing parameters, or incorrect data.
404 Not Found: Resource not found (e.g., property not found).
500 Internal Server Error: General server error.

cutomed api validate filed required non required
