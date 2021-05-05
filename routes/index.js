var express = require('express');
var router = express.Router();


var userController = require('../controllers/user');

var stateController = require('../controllers/statecontroller');
var districtController = require('../controllers/districtcontroller');
var childController = require('../controllers/childcontroller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/restrictedPage', userController.restrictedPage);
router.post('/register', userController.addUser);
router.get('/login',userController.login);

router.post('/state',stateController.createState);
router.get('/state',stateController.getState);

router.post('/district',districtController.createDistrict);
router.get('/district',districtController.getDistrict);

router.post('/child',childController.createChild);
router.get('/child',childController.getChild);

module.exports = router;
