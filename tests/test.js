let chai = require('chai');
var expect  = require("chai").expect;
let server = require('./server');
let should = chai.should();

describe('/GET schedule', () => {
     it('it should render schedule', (done) => {
           chai.request(server)
           .get('/schedule')
           .end((err, res) => {
               res.should.have.status(200);
               expect(title).to.exist;
               expect(showSplash).to.be.false;
             done();
           });
     });
 });
