# Full-Stack React: Kanban Board
![MIT](https://img.shields.io/badge/License-MIT-blue)

## User Story

```md
AS A member of an agile team
I WANT a Kanban board with a secure login page
SO THAT I can securely access and manage my work tasks
```

## Website Links: 
* [GitHub Link](https://github.com/noIDEA-tech/14-Kanban-Board)
* [Deployed Link](https://one4-kanban-board.onrender.com)

## Description:
The Kanban Board is a secure visual project management tool desgined to help production teams organize and manage workflow efficiently by creating "todo" tickets to track each team's progress. This application uses JSON Web Token (JWT) for security and requires users to create a profile with user name and password. A JWT token is generated upon successful login, which is protected in local storage.

![app_image](/client/assets/main-page-image.png)
![app_image](/client/assets/login-image1.png)
![app_image](/client/assets/ticket-generator-image1.png)

## Table of Contents:
- [Technologies used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Tests](#tests)
- [Contact](#contact)


## Technologies used: 
- Node.js
- Express.js
- React
- JSON Web Token and CORS
- Postgres and Sequelize
- Google Font API CSS

## Installation:
No needed installation. Go to website link for access.

## Usage:
`Create user login`

## Credits
Nancy Watreas, TA

## License
MIT

## Features
This application features Kanban Board as a visual tool for teams to use in product management. Teams and team leaders can track tasks by create "todo" tickets that can be updated and deleted once a task is completed. This application also features JSON Web Token (JWT) Authentication for secure user login authentication.

## Tests
This application is deployed using Render. If running in a terminal, from root diretory run: `npm install` `npm run build` `npm run seed` and then run `npm run start:dev`

## Challenges
- Initiating JSON Web Token (JWT) 
- Using Insomnia open-source desktop application to test the APIs and JWT Web Token
- Issues with main page not rendering properly with CSS styles

## Contact
If there are any questions or concerns, I can be reached at:
##### [github: https://github.com/noIDEA-tech](https://github.com/https://github.com/noIDEA-tech)
##### [email: nwatreas2023@gmail.com](mailto:nwatreas2023@gmail.com)


