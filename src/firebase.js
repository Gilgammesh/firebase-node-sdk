// Require dependencies
const dotenv = require('dotenv');
const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
// const {  } = require('firebase-admin/auth');

// Initialize enviroment variables
dotenv.config();

// Initialize app firebase
initializeApp({
	credential: applicationDefault()
});

// Initialize db firestore
const db = getFirestore();

// Export database
module.exports = { db };
