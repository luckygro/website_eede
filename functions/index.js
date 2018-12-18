// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

const cors = require('cors')({ origin: true })

const mailgun = require('mailgun-js')({
  apiKey: functions.config().mailgun.apikey,
  domain: functions.config().mailgun.domain,
})

// process contact form
exports.addMessage = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    console.log(req.headers)
    console.log(req.method)
    console.log(req.headers['content-type'])

    // process POST
    if (req.method == 'POST') {
      // process json content
      if (req.headers['content-type'] == 'application/json') {
        console.log(req.body)
        // get content
        name = req.body.name
        console.log(name)
        email = req.body.email
        console.log(email)
        message = req.body.message
        console.log(message)

        var mail_text = `Hallo EE-Team,\n\nIhr habt eine neue Nachricht von ${name} (email: ${email}) bekommen.\n\nEr schreibt:\n${message}
            `

        var data = {
          from: 'noreply@mg.luckygdev.de',
          subject: 'Neue Anfrage - EE-Deutschland',
          text: mail_text,
          to: email,
        }

        mailgun.messages().send(data, function(error, body) {
          console.log(body)
          console.log(error)
        })

        // push content to database
        return (
          admin
            .database()
            .ref('/messages')
            .push({
              name: name,
              email: email,
              message: message,
            })

            // send response
            .then(
              res.status(201).send('Die E-Mail wurde erfolgreich versendet.')
            )
        )
      } else {
        res.status(404).send('ERROR: Content Type not supported')
      }

      // send error response
    } else {
      res.status(404).send('ERROR')
    }
  })
})
