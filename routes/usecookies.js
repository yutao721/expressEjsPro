var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

	if(req.session.islogin){
		console.log('usecookies:' + req.session.islogin);
		res.locals.islogin = req.session.islogin
	}

	if(req.cookies.islogin){
		console.log('usecookies:' + req.cookies.islogin);
		res.locals.islogin = req.cookies.islogin
	}


  	res.render('usecookies', { title: 'usecookies示例' });
});

router.post('/', function(req, res) {
  
  	req.session.islogin = 'success';
  	res.locals.islogin = req.session.islogin;
 	res.cookie('islogin', 'sucess', { maxAge: 60000 });
  	res.render('usecookies', { title: '使用cookies示例' });
});


module.exports = router;