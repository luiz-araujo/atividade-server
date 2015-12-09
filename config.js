'use strict'

let config = {
	development: {
		db: {
			host: 'localhost',
			port: 27017,
			name: 'test_application'
		}
	},
	production: {
		db: {
			host: 'localhost',
			port: 27017,
			name: 'application'
		}
	}
};

var env = process.env.NODE_ENV || 'development';
module.exports = config[env];




