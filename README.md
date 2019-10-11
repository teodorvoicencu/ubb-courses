# UBB-Courses
Mono-Repository for the E-Learning platform for university courses.  
The aim of this project is to create a more friendly environment for the students to learn during the university.
Teachers will be able to upload the course materials to the website and divide them in lessons, uploading images and 
videos, creating poll's, quizzes, and assigning projects and homework such that the students will be able to 
comprehend the subjects easier.

# Built With

- [React](https://reactjs.org/)
- [Spring](https://reactjs.org/)
- [PostgreSQL](https://www.postgresql.org/)

# Getting Started

Clone the repository or download it.  

## Prerequisites

- [Java 11](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html)
- [NodeJs](https://nodejs.org/en/)

# Project Structure

This is a mono-repository, so it contains both frontend project and backend restful api.

##Frontend

The `frontend` folder contains the react application and all the necessary dependencies for this project to work.  
It is written in `react js` with `flow`, `react-redux`, and `react-sagas`. 

```
.
├── public              # Folder containing default information about the webpage
├── src                 # The source code of the project, all components reside inside their own folder
|   ├── app             # Folder containing the first page in the website
|   |   ├── __tests__   # Test folder for the app component
|   |   ├── styles      # Aditional styles for the component
|   |   └── app.jsx     # Component file (Note: we are using javascript with flow typeing)
|   ├── index.js        # Entry point for the website
|   ├── index.scss      # Initial stylesheet, it contains default variables like colors and spacing
|   └── ...
├── .eslintrc           # Configuration for eslint
├── .flowconfig         # Configuration for flow
├── .prettierrc         # Configuration for prettier
└── ...
```

For more information please see the `README.md` file inside the folder.

##Backend

The `backend` folder contains the spring boot api which serves the frontend.

```
.
├── .mvn                            # Folder containing the maven wrapper
├── src                             # The source code of the project
|   ├── main            
|   |   ├── java 
|   |   |   ├── configs                     # Configurations folder
|   |   |   ├── models                      # Database entities folder
|   |   |   ├── repositories                # JPA Repositories folder
|   |   |   ├── services                    # Services folder
|   |   |   ├── controllers                 # Controllers folder
|   |   |   ├── dtos                        # DTOs folder for the entities
|   |   |   └── BackendApplication.java     # Main file of the project
|   |   └── resources
|   |   |   ├── application.properties      # Application envirnoment variables
|   |   |   └── db.migrations               # Folder containing the database migration files
|   └── test                # Tests folder for the entire application
|   ...   
└── pom.xml                 # Dependencies for the application
```

For more information please see the `README.md` file inside the folder.

# Authors

- **Teodor Voicencu**
- **Mihnea Ungureanu**
- **Sebastian Stegaru**
- **Teodor Strut**
- **Nicoleta Ungur**
- **Matei Stroia**
- **Vlad Tugui**

# License
This project is licensed under the MIT License - see the `LICENSE.md` file for details.