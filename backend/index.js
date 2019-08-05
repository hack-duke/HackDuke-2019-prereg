const express = require('express');

const request = require('superagent');
const bodyParser = require('body-parser');
const cors = require('cors');

const EmailValidator = require('email-validator');
const HumanParser = require('humanparser');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// api var initialize
const mailchimpInstance = process.env.MC_INSTANCE_ID;
const listUniqueId = process.env.MC_LIST_ID;
const mailchimpUsername = process.env.MC_USERNAME;
const mailchimpApiKey = process.env.MC_API_KEY;

app.get('/ping', (req, res) => res.sendStatus(200));

app.post('/signup', (req, res) => {
  const { firstName, lastName } = HumanParser.parseName(req.body.name || '');

  if (firstName === '') {
    res.json({
      status: 'The name you submitted was invalid. Please try again.'
    });
    return;
  }

  if (!req.body.email || !EmailValidator.validate(req.body.email)) {
    res.json({ status: 'The submitted email was invalid. Please try again.' });
    return;
  }

  if (!req.body.university || req.body.university.length < 8) {
    res.json({ status: 'The submitted university was invalid.' });
    return;
  }

  console.log(
    'Registering ' + req.body.email + ' attending ' + req.body.university
  );
  request
    .post(
      'https://' +
        mailchimpInstance +
        '.api.mailchimp.com/3.0/lists/' +
        listUniqueId +
        '/members/'
    )
    .set('Content-Type', 'application/json;charset=utf-8')
    .auth(mailchimpUsername, mailchimpApiKey)
    .send({
      email_address: req.body.email,
      status: 'pending',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName !== '' ? lastName : undefined,
        UNIVERSITY: req.body.university
      }
    })
    .end((err, response) => {
      if (!response) {
        if (err) console.log(err);
        res.json({
          status: 'An unknown error occurred. Please refresh and try again.'
        });
      } else if (response.status < 300) {
        res.json({
          status:
            'Thank you for pre-registering! Please check your inbox for a confirmation email.'
        });
      } else if (
        response.status === 400 &&
        response.body.title === 'Member Exists'
      ) {
        res.json({ status: 'You have already pre-registered!' });
      } else if (
        response.status === 400 &&
        response.body.title === 'Invalid Resource'
      ) {
        res.json({
          status:
            "That email address doesn't look real. Please refresh and try again."
        });
      } else {
        if (err) console.log(err);
        res.json({
          status: 'An unknown error occurred. Please refresh and try again.'
        });
      }
    });
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
