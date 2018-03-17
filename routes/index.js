var express = require('express');
var app = express; 
var router = express.Router();


/* GET home page. */
router.get('/', (request, response, next) => {
	console.log('Getting the index')
  response.render('index', { title: 'Express' });

});


/* GET set todo item */
// router.post('/setTodo', (request, response, next) => {
// 	console.log('MADE IT::::::::::::')
// 	res.send('<p>some html</p>');
// });

router.post('/setTodo', function (request, response) {
  response.send('Got a POST request')
})



module.exports = router;
