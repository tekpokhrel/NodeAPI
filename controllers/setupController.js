var Todos = require('../models/todoModel');

module.exports = function(app) {

	app.get('/api/setupTodos', function(req, res) {

		//seed database

		var starterTodos = [

		    {
		    	username: 'Test',
		    	todo: 'Buy milk',
		    	isDone: false,
		    	hasAttachment: false
		    },
		    {
		    	username: 'Test',
		    	todo: 'Feed cat',
		    	isDone: false,
		    	hasAttachment: false
		    },
		    {
		    	username: 'Test',
		    	todo: 'Learn Node',
		    	isDone: false,
		    	hasAttachment: false
		    },
		    {
		    	username: 'Test',
		    	todo: 'Job Search',
		    	isDone: false,
		    	hasAttachment: false
		    }


		];

		Todos.create(starterTodos, function(err, results) {

			if(err) throw err;

			res.send(results);

		});

	});

}