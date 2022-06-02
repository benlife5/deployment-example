const {getDocs, collection, getFirestore} = require('firebase/firestore')
const {initializeApp} = require("firebase/app")
require("dotenv").config()
var express = require('express');
var router = express.Router();

const firebaseApp = initializeApp(
  {
    "type": "service_account",
    "projectId": process.env.projectId,
    "private_key_id": process.env.private_key_id,
    "private_key": process.env.private_key,
    "client_email": process.env.client_email,
    "client_id": process.env.firebase_client_id,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": process.env.client_x509_cert_url
  }
)

const db = getFirestore(firebaseApp)

router.get("/all", async (req, res, next) => {
  console.log("HERE")
  try {
    const docs = await getDocs(collection(db, "messages"))
    const allDocs = []
    docs.forEach((doc) => allDocs.push(doc.data()))
    console.log(allDocs)
    res.json(allDocs)
  } catch (e) {
    res.error(e)
  }
})

module.exports = router