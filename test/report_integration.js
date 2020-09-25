/* tests for the reports route */

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');


chai.should();

chai.use(chaiHttp);

console.log(server);

describe('Reports', () => {
    describe('GET presentation at /', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("string");
                    done();
                });
        });
    });

    describe('GET /reports/week/1', () => {
        it('200 HAPPY PATH AND CORRECT VALUES', (done) => {
            chai.request(server)
                .get("/reports/week/1")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.report.should.be.an("string");
                    res.body.data.week.length.should.be.above(0);

                    done();
                });
        });
    });

    describe('GET /reports/week/2', () => {
        it('TEST 200 HAPPY PATH AND CORRECT VALUES', (done) => {
            chai.request(server)
                .get("/reports/week/2")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.report.length.should.be.above(100);

                    done();
                });
        });
    });

    describe('POST /register', () => {
        it('TEST REGISTER A USER', (done) => {
            const body = {
                email: "tjena@hotmail.com",
                pw: "tjolahopp"
            };

            chai.request(server)
                .post("/register")
                .send(body)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an("object");
                    done();
                });
        });
    });

    describe('POST /login', () => {
        it('TEST FAIL LOGIN', (done) => {
            const body = {
                email: "tjena@hotmail.com",
                pw: "tjola"
            };

            chai.request(server)
                .post("/login")
                .send(body)
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
    });

});
