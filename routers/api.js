'use strict'

let Router = require('express').Router;
let router = new Router();
let controllers = require('../controllers');
let bodyParser = require('body-parser');
let multer = require('multer')({ dest: './public/images/' });

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(multer.single('picture'));
// router.use(multer.array('picture'));

router
	.route('/categories')
	.get(controllers.categories.list)
	.post(controllers.categories.create);

router
	.route('/categories/:id')
	.get(controllers.categories.get)
	.put(controllers.categories.update)
	.delete(controllers.categories.delete);

router
	.route('/images')
	.get(controllers.images.list)
	.post(controllers.images.create);

module.exports = router;


