# EMailTemplate
Email Templates for sending mails from server

## run
- build frontend first (cuz backend uses the build folder)
    - npm run build
- create a .env file in the backend and write your server configs in it
- start server.js in the backend folder and open port (4k)
    - node server.js
- open page, fill an e-mail adress to send message to in to the input and klick on send

## npms
- nodemailer @react-email/components
- dotenv
- express@4.18.2

## other
- the main front-end functions are in the src/content/DemoContent.js
- e-mail html template is in backend/mail
- react frontend (from my own boilerplate)
