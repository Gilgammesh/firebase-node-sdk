// Require dependencies
const { Router } = require('express');
const path = require('path');
const contacts = require('../controllers/contacts.controller');

// Initialize router
const router = Router();

// Routes
router.get('/', (req, res) => res.render('index'));
router.get('/contacts', contacts.getContacts);
router.get('/new-contact', (req, res) => res.render('new'));
router.post('/contacts', contacts.createContact);
router.get('/contacts/:id', contacts.getContact);
router.put('/contacts/:id', contacts.updateContact);
router.delete('/contacts/:id', contacts.deleteContact);

// Export router
module.exports = router;
