const express = require('express'); 
const router = express.Router();
 const usersController = require('../controllers/usersController'); 

router.get('/',usersController.index);
router.get('/login', usersController.index); 
router.post('/login', usersController.login); 
router.get('/home/dashboard', usersController.dashboard); 
router.get('/signup', usersController.signup);
router.post('/signup', usersController.signup); 

 module.exports= router;