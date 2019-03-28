let express = require('express');
let router = express.Router();
 let indexController=require('../controllers/index');
/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAbout);

/* GET products page. */
router.get('/products', indexController.displayPro);

/* GET services page. */
router.get('/services', indexController.displayServcies);

/* GET contact page. */
router.get('/contact',indexController.displayContact );

/*GET display login page */
router.get('/login',indexController.displayLoginPage);
/*POST -process the login page*/
router.post('/login',indexController.processLoginPage);
/*GET-display user registration */
router.get('/register',indexController.displayRegisterPage);
/*POST- process the registration */
router.post('/register',indexController.processRegisterPage);
/*GET- perform logout */
router.get('/logout',indexController.performLogout);

module.exports = router;