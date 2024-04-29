# Sunbird-RC-POC Project Setup Guide

Welcome to the poc of Sunbird-RC project for creating a schema,vc! This guide will help you set up the project on your local machine, configure it properly, and run necessary components with Docker.

## Step 1: Clone the Project
1. Clone the project repository to your local machine:
   ```bash
   git clone https://github.com/Sunbird-RC/sunbird-rc-core/releases/tag/v2.0.0-rc3

2. Navigate to the cloned directory:
   ```bash
   cd sunbird-rc-core
   ```

## Step 2: Open the Project in an IDE
- Open the cloned project in your favorite IDE. IntelliJ IDEA is recommended for the best development experience.

## Step 3: Configure the Environment File
- Edit the `.env` file to set the desired options. Here's a sample configuration:
  ```env
  RELEASE_VERSION=v2.0.0-rc3
  CERTIFICATE_ENABLED=true
  SIGNATURE_ENABLED=true
  DID_ENABLED=true
  SCHEMA_DIR=schemas/public
  ENCRYPTION_ENABLED=true
  QR_TYPE=W3C_VC
  ```

## Step 4: Modify the Docker Compose File
- Edit `docker-compose.yml` to comment out services that you don't need for your use case, such as Elasticsearch, Keycloak, and Digilocker Certificate API.

## Step 5: Run Vault with Docker
1. Start the Vault service with Docker:
   ```bash
   docker-compose up -d vault
   ```

2. After starting, the Vault service might show as "unhealthy" because it is initially sealed.

## Step 6: Unseal Vault
- Run the `setup_vault.sh` script to unseal Vault and update the `VAULT_TOKEN` in the environment file. This step ensures the Vault service becomes healthy.

## Step 7: Start the Required Docker Services
1. Start identity, credential, credential-schema, and db services:
   ```bash
   docker-compose up -d identity credential credential-schema db
   ```

2. After these services are up and healthy, start encryption-service and registry:
   ```bash
   docker-compose up -d encryption-service registry
   ```

## Step 8: Verify All Services Are Running
- Ensure all required Docker images are up and healthy.

## Step 9: Create a New Schema for VC
- Create a new schema file named `Seeker.json` in the `schemas/public` folder to define the structure for a "Seeker" Verifiable Credential. Here's an example schema:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "properties": { "Seeker": { "$ref": "#/definitions/Seeker" } },
  "required": ["Seeker"],
  "title": "Seeker",
  "definitions": {
    "Seeker": {
      "$id": "#/properties/Seeker",
      "type": "object",
      "title": "Seeker Schema",
      "required": ["name", "dateOfBirth", "dateOfIssuance", "contactInformation", "education", "workExperience", "preferences"],
      "properties": {
        "name": { "type": "string" },
        "dateOfBirth": { "type": "string", "format": "date" },
        "gender": { "type": "string", "enum": ["Male", "Female", "Other"] },
        "dateOfIssuance": { "type": "string", "format": "date-time" },
        "dateOfExpiry": { "type": "string", "format": "date-time" },
        "contactInformation": {
          "type": "object",
          "properties": {
            "phoneNumber": { "type": "string" },
            "email": { "type": "string" },
            "address": { "type": "string" }
          },
          "required": ["phoneNumber", "email"]
        },
        "education": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "institution": { "type": "string" },
              "degree": { "type": "string" },
              "year": { "type": "integer" }
            },
            "required": ["institution", "degree", "year"]
          }
        },
        "workExperience": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "company": { "type": "string" },
              "position": { "type": "string" },
              "startDate": { "type": "string", "format": "date" },
              "endDate": { "type": "string", "format": "date" }
            },
            "required": ["company", "position", "startDate"]
          }
        },
        "preferences": {
          "type": "object",
          "properties": {
            "location": { "type": "string" },
            "jobType": { "type": "string" },
            "salaryRange": { "type": "string" }
          }
        }
      }
    }
  }
}
```

## Step 10: Restart All Docker Services
- Restart all Docker images to apply changes:
  ```bash
  docker-compose down
  docker-compose up -d
  ```

## Step 11: Access the Project with Swagger
- Once everything is up, you can access the API documentation using the following URL:
  ```
  http://localhost:8081/api/docs/swagger.json
  ```

## Step 12: Use the Seeker API
- To create a new Seeker, use the following `curl` command:
  ```bash
  curl --location 'http://localhost:8081/api/v1/Seeker' \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --data-raw '{
    "name": "Jane Doed",
    "dateOfBirth": "1985-10-22",
    "gender": "Male",
    "dateOfIssuance": "2024-04-23T23:59:59Z",
    "dateOfExpiry": "2024-12-31T23:59:59Z",
    "contactInformation": {
      "phoneNumber": "+19876543210",
      "email": "jane.doe@example.com",
      "address": "456 Elm St, Othertown, USA"
    },
    "education": [
      {
        "institution": "Example State University",
        "degree": "Master of Science",
        "year": 2015
      },
      {
        "institution": "Anytown Community College",
        "degree": "Associate of Science",
        "year": 2013
      }
    ],
    "workExperience": [
      {
        "company": "Global Tech Corp.",
        "position": "Software Engineer",
        "startDate": "2016-02-01",
        "endDate": "2019-06-30"
      },
      {
        "company": "NextGen Innovations Inc.",
        "position": "Senior Software Engineer",
        "startDate": "2019-07-01",
        "endDate": "2023-12-31"
      }
    ],
    "preferences": {
      "location": "On-site",
      "jobType": "Part-time",
      "salaryRange": "$70,000 - $90,000"
    }
  }
  '
  ```

##  Step 13:  Fetch the VC of the Seeker

To fetch the Verifiable Credential (VC) of a specific Seeker, you can use a `curl` command with custom headers, as shown below:

```bash
curl --location 'http://localhost:8081/api/v1/Seeker/1-6e3fafe3-0e9c-406e-ac67-b8300918e9cb' \
--header 'Accept: application/pdf' \
--header 'template: <!DOCTYPE html><html lang="en"><meta charset="UTF-8"><title>Profile Information</title><style>body{font-family:Arial,sans-serif;margin:0;padding:0;background-color:#f0f2f5}.profile-container{width:900px;margin:2em auto;border:1px solid #ccc;border-radius:10px;background-color:#fff;padding:20px}.section{margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid #e0e0e0}.section h2{margin-bottom:10px;color:#333;text-decoration:underline}.section p{margin:5px 0;color:#555}.qr-container{text-align:center;margin-bottom:20px}.qr-container img{border:2px solid #07c;border-radius:10px;width:150px;height:auto}</style><body><div class="profile-container"><div class="qr-container"><img alt="QR Code" src="{{qr}}"></div><div class="section"><h2>Personal Information</h2><p><strong>Name:</strong>{{name}}</p><p><strong>Date of Birth:</strong>{{dateOfBirth}}</p><p><strong>Gender:</strong>{{gender}}</p></div><div class="section"><h2>Education</h2><p>{{education}}</p></div><div class="section"><h2>Work Experience</h2><p>{{workExperience}}</p></div><div class="section"><h2>Preferences</h2><p><strong>Location:</strong>{{preferences}}</p></div></div></body></html>'
```

This command sends a request to the specified endpoint to retrieve the VC in PDF format and includes a template for customizing the output. Modify the endpoint and template as needed for your specific use case.
```

### Notes:
- This README covers the essential steps for setting up the project, including Docker configurations, environment variables, and schema creation.
- It provides a clear step-by-step guide that a beginner can follow to get the project running.
- Some parts require specific knowledge, like editing `.env` files and running Docker commands, but the instructions are aimed at helping beginners understand what to do and why.
