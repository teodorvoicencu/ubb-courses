# ubb-courses📖

The aim of this project is to create a friendlier environment for the students to learn during the university.
Our project will enable course material upload and organizing them into bite-sized lessons.
We aim to support uploading images, videos and other lessons formats. We aim to increase student interactivity with features
such as polls, quizzes, and projects such that the students will be able to more easily learn the subjects that matter.

# Core Technologies

- [React](https://reactjs.org/)
- [Spring](https://reactjs.org/)
- [PostgreSQL](https://www.postgresql.org/)

# Getting Started

### Requirements
- [JDK-11](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html)
- [node](https://nodejs.org/en/)
- [postgres](https://www.postgresql.org/)

Clone the repository and run `yarn install` in the `frontend` directory.

# Project Structure

This project is a mono-repository. It contains both the frontend project and the backend APIs.

## Frontend

The `frontend` folder contains the react application and all the necessary dependencies for this project to work.  
It is written in React with:
* Flow - a library maintained by Facebook for type linting
* `react-redux` - a state-management library to maintain a single source of truth 
* `redux-sagas` - a library to make application side-effects easier to deal with   

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

## Backend

The `backend` folder contains the Spring Boot server: configuration, models and business logic.

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
- **Tanko Gabor Tihamer**

# License
This project is licensed under the MIT License - see the `LICENSE.md` file for details.
