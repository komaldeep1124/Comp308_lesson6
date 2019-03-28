let express = require('express');
let router = express.Router();
let passport=require('passport');
let contactController=require("../controllers/contact");
function requireAuth(req,res,next){
//if user is logged in
if(!req.isAuthenticated() || (req.user.username!="admin")){
return res.redirect('/login');
}

next();
}


/* GET Contact List page - READ Operation */
router.get('/',requireAuth, contactController.displayContactList);

/* get route for add page to display add page*/
router.get('/add',requireAuth,contactController.displayAddPage);

/* post route to process ADD page*/
router.post('/add',requireAuth,contactController.ProcessAddPage);

/* get request-display EDIT page*/
router.get('/edit/:id',requireAuth,contactController.displayEditPage);

router.post('/edit/:id',requireAuth,contactController.ProcessEditPage);

/* get request to perform delte action*/
router.get('/delete/:id',requireAuth,contactController.performDelete);

module.exports = router;