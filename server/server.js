require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    axios = require('axios'),
    mail_controller = require('./controllers/mail_controller');


const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
 
//=====| ENDPOINTS |==================================

//---Send message through nodemailer---/
app.post('/api/send_email', mail_controller.sendEmail) // set up the end point

const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));