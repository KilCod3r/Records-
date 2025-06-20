# Student Marks Processing Application

This is a simple web application for capturing and processing student marks online. It uses a web form to capture a student's name, registration number, course title, and marks for four different units. The application then computes the total and average marks and displays an overall grade, as well as a grade for each individual unit.

## Features

- Capture student details (name, registration number, course title).
- Input names and marks for four different units.
- Backend processing of marks using Node.js and Express.
- Displays total marks, average marks, and an overall grade.
- Displays a grade for each individual unit.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Cloning the Repository

To clone this repository to your local machine, run the following command in your terminal:

```bash
git clone <your-repository-url>
```

Replace `<your-repository-url>` with the actual URL of your Git repository.

### Installation

1.  Navigate to the `server` directory of the project:
    ```bash
    cd <project-folder>/server
    ```

2.  Install the required dependencies using npm:
    ```bash
    npm install
    ```

### Running the Application

Once the dependencies are installed, you can start the server with the following command:

```bash
npm start
```

The server will start and listen on port 3000. You can view the application by navigating to the following URL in your web browser:

[http://localhost:3000/marks.html](http://localhost:3000/marks.html)

## Built With

*   [Node.js](https://nodejs.org/) - JavaScript runtime environment
*   [Express](https://expressjs.com/) - Web framework for Node.js
*   HTML, CSS, and plain JavaScript for the frontend. 