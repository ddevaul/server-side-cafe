var Article = require('../models/article');

exports.index = (req, res) => {
  Article.find({}, 'title')
  .exec(function (err, list_articles) {
    if (err) { return next(err); }
    //Successful, so render
    res.render('articles', {Articles: list_articles});
  });
};

exports.singlearticle = (req, res) => {
  Article.findById(req.params.id)
  .exec(function (err, article) {
    if (err) { return next(err); }
    //Successful, so render
    console.log(article);
    res.render('article', {article: article});
  });
};