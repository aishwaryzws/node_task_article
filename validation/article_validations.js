const validator = require('./validate');

const add_articles = (req, res, next) => {
    const validationRule = {
        "nick_name": "required",
        "article_title": "required",
        "article_content": "required",
    }
    call_validator(req, res, next, validationRule);
}

const get_articles = (req, res, next) => {
    const validationRule = {
        "page": "required",
        "limit": "required",
    }
    call_validator_get(req, res, next, validationRule);
}

const get_articles_content = (req, res, next) => {
    const validationRule = {
        "article_id": "required",
    }
    call_validator_get(req, res, next, validationRule);
}


const add_comment = (req, res, next) => {
    const validationRule = {
        "article_id": "required",
        "nick_name": "required",
        "comment_content": "required",
    }
    call_validator(req, res, next, validationRule);
}

const get_comment = (req, res, next) => {
    const validationRule = {
        "article_id": "required",
    }
    call_validator_get(req, res, next, validationRule);
}

function call_validator(req, res, next, validationRule) {
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
}

function call_validator_get(req, res, next, validationRule) {
    validator(req.query, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
}

module.exports = {
    add_articles,
    get_articles,
    get_articles_content,
    add_comment,
    get_comment
}