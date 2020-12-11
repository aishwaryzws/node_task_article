const Articles_model = require('../../article/models/Articles_model');

class Articles_controller {

    static add_articles = async(req, res) => {
        const postData = req.body;
        Articles_model.add_articles(postData, function(err, result) {
            if (err) {
                res.status(err.responce_status).json(err);
            } else {
                res.status(result.responce_status).json(result);
            }
        })
    }

    static get_articles = async(req, res) => {
        const getData = req.query;
        Articles_model.get_articles(getData, function(err, result) {
            if (err) {
                res.status(err.responce_status).json(err);
            } else {
                res.status(result.responce_status).json(result);
            }
        })
    }

    static get_articles_content = async(req, res) => {
        const getData = req.query;
        Articles_model.get_articles_content(getData, function(err, result) {
            if (err) {
                res.status(err.responce_status).json(err);
            } else {
                res.status(result.responce_status).json(result);
            }
        })
    }

    static add_comment = async(req, res) => {
        const postData = req.body;
        Articles_model.add_comment(postData, function(err, result) {
            if (err) {
                res.status(err.responce_status).json(err);
            } else {
                res.status(result.responce_status).json(result);
            }
        })
    }

    static get_comment = async(req, res) => {
        const getData = req.query;
        Articles_model.get_comment(getData, function(err, result) {
            if (err) {
                res.status(err.responce_status).json(err);
            } else {
                res.status(result.responce_status).json(result);
            }
        })
    }
}

module.exports = Articles_controller;