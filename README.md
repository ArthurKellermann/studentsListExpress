# REST API for Student Registration in a School's SQL Database

This REST API is designed to facilitate the registration of students and their associated images in a SQL database. It enables users to carry out fundamental CRUD operations on user and student information, and offers support for user authentication via JWT tokens. 

## Installation

To utilize this API, you must clone the repository to your local system and install the necessary dependencies. Ensure Node.js and npm are installed prior to proceeding.

```bash
git clone https://github.com/ArthurKellermann/studentsListExpress.git
cd studentsListExpress/
npm install
```

## Technologies Utilized
- Node.js
- Express.js
- JWT for authentication
- MySQL for database
- Swagger for documentation

## How to Use

Below is a concise summary of the accessible endpoints and their corresponding operations.

## Users
**- /users (POST):** Enroll a new user. The request body should contain "name", "email", and "password" fields.  
**- /users (PUT):** Amend an existing user. The request should include a bearer token in the Authorization header.  
**- /users (DELETE):** Remove an existing user. The request should include a bearer token in the Authorization header.  
**- /auth (POST):** Authenticate a user and generate a JWT token. The request body should have "email" and "password" fields.

## Students
**- /students (GET):** Retrieve all registered students. The request should include a bearer token in the Authorization header.  
**- /students (POST):** Register a new student. The request should include a bearer token in the Authorization header, and the "first_name", "last_name", "email", "age", "weight", and "height" fields in the body.  
**- /students/{id} (GET):** Fetch a student by their ID. The request should include a bearer token in the Authorization header.  
**- /students/{id} (PUT):** Modify a student by their ID. The request should include a bearer token in the Authorization header, and the fields you wish to modify in the body.  
**- /students/{id} (DELETE):** Delete a student by their ID. The request should include a bearer token in the Authorization header.

## File Upload
**- /file (POST):** Upload a file associated with a student. The request should include a bearer token in the Authorization header, and the "fileName" (the file to upload) and "student_id" in the body.

## Documentation
**- /apidocs (GET):** Full API documentation with Swagger.

## Contributing
We welcome your pull requests. For significant changes, kindly open an issue first to discuss your proposed changes.

## License
MIT
