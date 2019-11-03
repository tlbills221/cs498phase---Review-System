var express = require('express');
var mustache = require('../common/mustache')
var router = express.Router();
var user_lib = require('../lib/user')
var cnc = require('../common/CALARCOde')

/* GET login page */
router.get('/', function (req, res, next) {
	var usernam = cnc.Purell(req.body.username, 's')
	cnc.AddUser(usernam)
	res.render('base_template', {
		title: 'Login',
		body: mustache.render('login')
	})
})

/* POST login page */
router.post('/', (req, res, next) => {
	// hard coded username and password
	var usernam = cnc.Purell(req.body.username, 's')
	var pasword = cnc.Purell(req.body.password, 's')
	if ((usernam === 'user' || user_lib.is_whitelisted(usernam)) && pasword === 'password') {
		res.redirect(302, '/course/')
	} else {
		res.redirect(302, '/login/')
	}
})

module.exports = router;
