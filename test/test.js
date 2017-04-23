const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js');

const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe('/GET index', () => {
  it('it should render index', (done) => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });
});

describe('/GET schedule', () => {
  it('it should render schedule', (done) => {
    chai.request(server)
    .get('/schedule')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });
});

describe('/GET about', () => {
  it('it should render about', (done) => {
    chai.request(server)
    .get('/about')
    .end((err, res) => {
       res.should.have.status(200);
       done();
    });
  });
});

describe('/GET feeder', () => {
  it('it should render feeder', (done) => {
    chai.request(server)
    .get('/feeder')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });
});
