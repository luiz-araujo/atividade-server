'use strict'

let Images = require('../models/index.js').images;

module.exports = {
	create: create
};


function create(req, res) {
	console.log(req.body);
	console.log(req.file);

	res.json({
		msg: 'asdfas'
	})

 	let images = new Images(req.body);

 	images
 		.save()
 		.then(success)

 	function sucess(status) {
	  res
			.status(201)
			.json({
			  message: 'created'
			});
  };
};