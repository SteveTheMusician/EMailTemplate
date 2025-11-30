# EMailTemplate
Email Templates for sending mails from server

## run
- build frontend first (cuz backend uses the build folder)
    - npm run build
- start server.js in the backend folder and open port
    - node server.js
- open page and klick on send
- IMPORTANT: of course backend needs the correct .env file to run -> u have to create one

## npms
nodemailer @react-email/components
dotenv
express@4.18.2

## other
- the main front-end functions are in the src/content/DemoContent.js
- e-mail html template is in backend/mail
- react frontend (from my own boilerplate)
