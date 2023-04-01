const router = require('express').Router();
const Articles = require('../models/article');

// Get All Articles
module.exports = router.get('/', async (req, res) =>{
    const articles = await Articles.find()
      .sort({createdAt: 'desc'});
      res.render('articles/index', { articles: articles });
});

