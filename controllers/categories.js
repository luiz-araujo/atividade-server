'use strict'

let Categories = require('../models/index.js').categories;

module.exports = {
	list:  list,
	create: create,
	get: get,
	update: update,
	delete: del
};


function list(req, res){
	Categories
		.find({}, '-__v')
		.then(function(categories){
			res.json(categories);
		});
	
};

function create(req, res) {
  let category = new Categories(req.body);

  let success = function(status) {
     res
      .status(201)
      .json({
        message: 'created'
      });
  };

  let error = function(err) {
    // console.log(err);
    res.status(400).json({
      message: 'algo errado'
    });
  };

  category
    .save()
    .then(success, error);
};	


function get(req, res) {
  Categories
    .findById(req.params.id)
    .then(function(category) {
      res.json(category);
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
