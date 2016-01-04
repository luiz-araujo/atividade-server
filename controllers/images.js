'use strict'

let Images = require('../models/index.js').images;

module.exports = {
	list: list,
	create: create
};


function list(req, res){
	// console.log(res);
	Images
		.find({}, '-__v')
		.then(function(images){
			res.json(images);
		});

};


function create(req, res) {
	// console.log(req.body);
	// console.log(req.file);

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


// function create(req, res) {

// 	console.log(req.body);
// 	console.log(req.file);

//   let images = new Images(req.body);

//   let success = function(status) {
//      res
//       .status(201)
//       .json({
//         message: 'created'
//       });
//   };

//   let error = function(err) {
//     res.status(400).json({
//       message: 'algo errado'
//     });
//   };

//   images
//     .save()
//     .then(success, error);
// };


function get(req, res) {
	console.log(req.params);
	Images
		.findById(req.params.id)
		.then(function(image) {
			res.json(image);
		});
}

function update(req, res){
//	console.log(req.body);
	res.json({
		message: 'updated'
	});
}

function del(req, res){
	res.json({
		message: 'deleted'
	});
}
