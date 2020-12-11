const articles = require('../app/article/controllers/Articles_controller')
const Articles_validation = require('../validation/article_validations');

module.exports = (app) => {
    app.post('/add_articles', Articles_validation.add_articles, articles.add_articles);
    app.get('/get_articles', Articles_validation.get_articles, articles.get_articles);
    app.get('/get_articles_content', Articles_validation.get_articles_content, articles.get_articles_content);

    app.post('/add_comment', Articles_validation.add_comment, articles.add_comment);
    app.get('/get_comment', Articles_validation.get_comment, articles.get_comment);
};