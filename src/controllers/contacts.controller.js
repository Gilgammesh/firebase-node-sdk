// Require dependencies
const { db } = require('../firebase');

// Get all contacts
const getContacts = async (req, res) => {
	const querySnapshot = await db.collection('contacts').get();
	const promises = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
	const contacts = await Promise.all(promises);
	res.render('contacts', { contacts });
};

// Create a contact
const createContact = async (req, res) => {
	const doc = await db.collection('contacts').add(req.body);
	res.send(`Added document with ID: ${doc.id}`);
};

// Get a contact
const getContact = async (req, res) => {
	const { id } = req.params;
	const doc = await db.collection('contacts').doc(id).get();
	res.send({ id: doc.id, ...doc.data() });
};

// Update a contact
const updateContact = async (req, res) => {
	const { id } = req.params;
	await db.collection('contacts').doc(id).update(req.body);
	res.send(`Updated document`);
};

// Delete a contact
const deleteContact = async (req, res) => {
	const { id } = req.params;
	await db.collection('contacts').doc(id).delete();
	res.send(`Deleted document`);
};

// Export all methods
module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };
