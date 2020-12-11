const custom_helper = require('../../../helpers/custom_helper');
const responsemessages_helper = require('../../../helpers/responsemessages_helper');
const responce_status = require('../../../config/responce_status');
const database_connection = require('../../../config/database_connection');
const { get } = require('mongoose');

const success = true;
const fail = false;


class Articles_model {

    static add_articles = async(postData, callback) => {
        try {
            database_connection.query('INSERT INTO articles SET ?', postData, function(err, result) {
                if (err) {
                    callback({
                        responce_status: responce_status.INTERNAL_SERVER_ERROR,
                        status: fail,
                        message: responsemessages_helper.responce_message(400),
                        data: {},
                    }, null);
                } else {
                    callback(null, {
                        responce_status: responce_status.OK,
                        status: success,
                        message: responsemessages_helper.responce_message(155),
                        data: {},
                    });
                }
            });
        } catch (error) {
            callback({
                responce_status: responce_status.INTERNAL_SERVER_ERROR,
                status: fail,
                message: responsemessages_helper.responce_message(400),
                data: {},
            }, null);
        }
    }

    static get_articles = async(getData, callback) => {
        try {

            let limit = getData.limit;
            let page = getData.page;
            let offset = (limit * page) - limit;

            database_connection.query('SELECT article_id,nick_name,article_title,crd FROM articles LIMIT ' + limit + ' OFFSET ' + offset, function(err, result) {
                if (err) {
                    callback({
                        responce_status: responce_status.INTERNAL_SERVER_ERROR,
                        status: fail,
                        message: responsemessages_helper.responce_message(400),
                        data: {},
                    }, null);
                } else {
                    if (result.length > 0) {
                        callback(null, {
                            responce_status: responce_status.OK,
                            status: success,
                            message: responsemessages_helper.responce_message(169),
                            data: result,
                        });
                    } else {
                        callback(null, {
                            responce_status: responce_status.OK,
                            status: success,
                            message: responsemessages_helper.responce_message(404),
                            data: result,
                        });
                    }
                }
            })
        } catch (error) {
            callback({
                responce_status: responce_status.INTERNAL_SERVER_ERROR,
                status: fail,
                message: responsemessages_helper.responce_message(400),
                data: {},
            }, null);
        }
    }

    static get_articles_content = async(getData, callback) => {
        try {
            database_connection.query('SELECT article_content FROM articles WHERE article_id = ' + getData.article_id, function(err, result) {
                if (err) {
                    callback({
                        responce_status: responce_status.INTERNAL_SERVER_ERROR,
                        status: fail,
                        message: responsemessages_helper.responce_message(400),
                        data: {},
                    }, null);
                } else {
                    if (result.length > 0) {
                        callback(null, {
                            responce_status: responce_status.OK,
                            status: success,
                            message: responsemessages_helper.responce_message(169),
                            data: result,
                        });
                    } else {
                        callback(null, {
                            responce_status: responce_status.OK,
                            status: success,
                            message: responsemessages_helper.responce_message(404),
                            data: result,
                        });
                    }
                }
            })
        } catch (error) {
            callback({
                responce_status: responce_status.INTERNAL_SERVER_ERROR,
                status: fail,
                message: responsemessages_helper.responce_message(400),
                data: {},
            }, null);
        }
    }

    static add_comment = async(postData, callback) => {
        try {
            postData.parent_comment_id = postData.parent_comment_id ? postData.parent_comment_id : 0;
            database_connection.query('INSERT INTO comments SET ?', postData, function(err, result) {
                console.log(err);
                if (err) {
                    callback({
                        responce_status: responce_status.INTERNAL_SERVER_ERROR,
                        status: fail,
                        message: responsemessages_helper.responce_message(400),
                        data: {},
                    }, null);
                } else {
                    callback(null, {
                        responce_status: responce_status.OK,
                        status: success,
                        message: responsemessages_helper.responce_message(155),
                        data: {},
                    });
                }
            });
        } catch (error) {
            callback({
                responce_status: responce_status.INTERNAL_SERVER_ERROR,
                status: fail,
                message: responsemessages_helper.responce_message(400),
                data: {},
            }, null);
        }
    }

    static get_comment = async(getData, callback) => {
        try {
            let parent_comment_id = getData.parent_comment_id ? getData.parent_comment_id : 0;
            database_connection.query('SELECT * FROM comments WHERE parent_comment_id = ' + parent_comment_id + ' AND article_id = ' + getData.article_id, function(err, result) {
                if (err) {
                    callback({
                        responce_status: responce_status.INTERNAL_SERVER_ERROR,
                        status: fail,
                        message: responsemessages_helper.responce_message(400),
                        data: {},
                    }, null);
                } else {
                    if (result.length > 0) {
                        callback(null, {
                            responce_status: responce_status.OK,
                            status: success,
                            message: responsemessages_helper.responce_message(169),
                            data: result,
                        });
                    } else {
                        callback(null, {
                            responce_status: responce_status.OK,
                            status: success,
                            message: responsemessages_helper.responce_message(404),
                            data: result,
                        });
                    }
                }
            })
        } catch (error) {
            callback({
                responce_status: responce_status.INTERNAL_SERVER_ERROR,
                status: fail,
                message: responsemessages_helper.responce_message(400),
                data: {},
            }, null);
        }
    }

}

module.exports = Articles_model;