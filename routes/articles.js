const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

/* GET home page. */
router.get('/', articlesController.index);
router.get('/:id', articlesController.singlearticle);


module.exports = router;
