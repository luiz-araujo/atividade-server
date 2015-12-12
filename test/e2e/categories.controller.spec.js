'use strict'

var app = require('../../app.js');
var request = require('supertest');
var chai = require('chai');
chai.use(require('chai-things'))
var expect = chai.expect;

describe('Categories controller', function(){

	describe('.list - GET /categories', function(){
		it('should return a json array of list', function(done){
			request(app)
				.get('/api/categories')
				.end(function (err, res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('array');
					expect(res.body).all.have.property('name');
					done();
				})
		});
	});

	describe('.create - POST /categories', function(){
		it('should return a json array of confirmation', function(done){
			request(app)
				.post('/api/categories')
				.field('firstname', 'adsfa')
				.field('email', 'adsfasdf')
				.end(function (err, res){
					expect(res.statusCode).to.be.equal(201);
					expect(res.body).to.be.property('message', 'created');
					done();
				})
		});
	});

	describe('.get - GET /categories/:id', function(){
		it('should return a json array', function(done){
			request(app)
				.get('/api/categories/?category=1')
				.end(function (err, res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('array');
					expect(res.body).all.have.property('name');
					done();
				})
		});
	});

	describe('.update - PUT /categories/:id', function(){
		it('should return a json array', function(done){
			request(app)
				.put('/api/categories/1')
				.end(function(err, res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.message === 'updated');
					done();
			})
		})
	});

	describe('.delete - DELETE /categories/:id', function(){
		it('should return a json array', function(done){
			request(app)
				.delete('/api/categories/1')
				.end(function(err, res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.message === 'deleted');
					done();
			})
		})
	});

});



