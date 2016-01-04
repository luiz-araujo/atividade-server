'use strict'

var app = require('../../app.js');
var request = require('supertest');
var chai = require('chai');
chai.use(require('chai-things'))
var expect = chai.expect;

describe('Images controller', function(){

	describe('.list - GET /images', function(){
		it('should return a json array of list', function(done){
			request(app)
				.get('/api/images')
				.end(function (err, res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('array');
					expect(res.body).all.have.property('url');
					expect(res.body).all.have.property('categories');
					done();
				})
		});
	});

	describe('.create - POST /images', function(){
		it('should return a json array of confirmation', function(done){
			request(app)
				.post('/api/images')
				.end(function (err, res){
					expect(res.statusCode).to.be.equal(201);
					expect(res.body).to.be.an('object');
					expect(res.body.message === 'created');
					done();
				})
		});
	});

	describe('.get - GET /images/:id', function(){
		it('should return a json array', function(done){
			request(app)
				.get('/api/images/?image=1')
				.end(function (err, res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('array');
					expect(res.body).all.have.property('name');
					done();
				})
		});
	});

	describe('.delete - DELETE /images/:id', function(){
		it('should return a json array', function(done){
			request(app)
				.delete('/api/images/1')
				.end(function(err, res){
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('object');
					expect(res.body.message === 'deleted');
					done();
			})
		})
	});

});



