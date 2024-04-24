const schema: any = {
    schema: {
        "type": "object",
        "properties": {
            "userData": {
                "title": "User Creation",
                "type": "object",
                "properties": {
                    "identityType": {
                        "type": "string",
                        "title": "Identity",
                        "enum": ["Aadhar", "Voter Id", "pan card"],
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Select the id proof from the available options."
                        }]
                    },
                    "identityNumber": {
                        "type": "string",
                        "title": "Identity Number",
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Enter your identity number."
                        }]
                    }
                },
                "required": ["identityType", "identityNumber"]
            },
            "details": {
                "title": "Personal details",
                "type": "object",
                "properties": {
                    "bucketName": {
                        "type": "string",
                        "title": "Name",
                        "minLength": 10,
                        // "pattern": "(?!(^xn--|^sthree-|.+--ol-s3$|.+-s3alias$))^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$",
                        "default": "Harish",
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Enter the Name."
                        }]
                    },
                    "prefix": {
                        "type": "string",
                        "title": "SurName",
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Enter the Surname."
                        }]
                    },
                },
                "required": ["SurName"]
            },
            "jobDetails": {
                "title": "Preferences",
                "type": "object",
                "properties": {
                    "jobType": {
                        "type": "string",
                        "title": "Jobs",
                        "enum": ["Full time", "Part time"],
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Select job type"
                        }]
                    },
                    "location": {
                        "type": "string",
                        "title": "location",
                        "enum": ["Bangalore", "Hyderabad", "Chennai"],
                        "fieldDescription": [{
                            "type": "string",
                            "description": "Select location"
                        }]
                    },
                },
                "required": ["pollingInterval", "schedule"]
            }
        },
    }
}

export default schema;