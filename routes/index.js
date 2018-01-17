var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beginning' });
});

//get method
// /... references user route
router.get('/main/:id', function(req,res,next){
    
    //refernce to main.jade
    res.render('main', {output: req.params.id});
});

//Post method
router.post('/main/submit', function(req,res,next){
    
    var id = req.body.id;
    res.redirect('/main/' + id);
});

module.exports = router;
