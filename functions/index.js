// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

// process contact form
exports.addMessage = functions.https.onRequest((req, res) => {
  console.log(req.headers)
  console.log(req.method)
  if (req.method == 'POST') {
    console.log(req.body)
    // get content
    name = req.body.name
    console.log(name)
    email = req.body.email
    console.log(email)
    message = req.body.message
    console.log(message)

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
        .then(res.status(200).send('OK'))
    )
    // send error response
  } else {
    res.status(404).send('ERROR')
  }
})
