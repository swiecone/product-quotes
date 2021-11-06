const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const msg = {
  to: 'alex@alexswiec.com', // Change to your recipient
  from: 'alex@alexswiec.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })