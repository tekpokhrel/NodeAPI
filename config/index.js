var configValues = require('./config');

module.exports = {

	getDBConnectionString: function() {

		return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds017678.mlab.com:17678/nodetodosample';
	}
}
