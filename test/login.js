var app = require('../app.js');
//var assert = require('assert');
//var chai = require('chai');
var should = require('should');
var request = require('supertest');

describe('POST add_articles', function() {
    it('add_articles', function(done) {
        request(app)
            .post('/add_articles')
            .send({ nick_name: 'test_name', article_title: 'test_title', article_content: 'test_content' })
            .set('referrer', '123456')
            .expect('Content-Type', /json/)
            .expect(200).end(function(err, res) {
                res.status.should.equal(200);
                res.body.status.should.equal(true);
                done();
            });

    });
});

describe('GET /get_articles', function() {
    it('get_articles', function(done) {
        request(app)
            .get('/get_articles?page=1&limit=1')
            .set('referrer', '123456')
            .expect('Content-Type', /json/)
            .expect(200).end(function(err, res) {
                res.status.should.equal(200);
                res.body.status.should.equal(true);
                done();
            });

    });
});


describe('GET /get_articles_content', function() {
    it('get_articles_content', function(done) {
        request(app)
            .get('/get_articles_content?article_id=2')
            .set('referrer', '123456')
            .expect('Content-Type', /json/)
            .expect(200).end(function(err, res) {
                res.status.should.equal(200);
                res.body.status.should.equal(true);
                done();
            });

    });
});

describe('POST /add_comment', function() {
    it('add_comment', function(done) {
        request(app)
            .post('/add_comment')
            .send({ nick_name: 'test_name', article_id: '2', comment_content: 'test_content', parent_comment_id: '' })
            .set('referrer', '123456')
            .expect('Content-Type', /json/)
            .expect(200).end(function(err, res) {
                res.status.should.equal(200);
                res.body.status.should.equal(true);
                done();
            });

    });
});

describe('POST /get_comment', function() {
    it('get_comment', function(done) {
        request(app)
            .get('/get_comment?article_id=2')
            .set('referrer', '123456')
            .expect('Content-Type', /json/)
            .expect(200).end(function(err, res) {
                res.status.should.equal(200);
                res.body.status.should.equal(true);
                done();
            });

    });
});