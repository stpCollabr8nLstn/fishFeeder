# Fish Feeder

---

#### Authors
- Kayla Saythongkham
- Michael Robertson
- David Rouse
- Adriana Rios

---

## Project Description
Our project is an automated fish feeder targeted for users who are forgetful or have a busy schedule that prevents timely feeding of their pet fish. This is ideal for users who spend lots of time away from home for travel or have busy work or school schedules. 

We will implement an app that allows users to set a time that may be repeated daily or weekly. Upon app interaction, the device will feed the fish. Users will also be reminded when the fish have been fed. 

--- 

#### Functionalities:

- Feeding fish
- Provide push notifications
- Display a history of feedings
- Schedule alerts
- Livestream of fish

---

#### End Users:

Our target users are people who want to manage and maintain their pet fish who may not have so much time to. 

---

#### Technologies:

- Server is housed in Raspberry Pi B
- 1080p HD camera (currently set on low resolution for testing)
- High torque servo rigged up to drill feeder (custom designed for this application)
- Node.js

---

#### Unit Tests

- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/api/bdd/)

---

## Getting started

1. Download and install [node](https://nodejs.org/en/)
2. From your console or terminal clone the repo `git clone https://github.com/CS4398/fishFeeder.git`
3. run `npm install`
4. run `npm start`
5. Open a browser to [http://localhost:8080/](http://localhost:8080/)

---

## Run Tests

1. From your console or terminal `npm install -g mocha`
2. run `cd test`
3. run `mocha --reporter nyan test.js`

---
## State Diagram

![State Diagram](https://github.com/CS4398/fishFeeder/blob/master/State%20Chart.png)
[Edit](https://www.draw.io/#HCS4398%2FfishFeeder%2Fmaster%2FState%20Chart.xml)

---

[Git Workflow Guide](https://github.com/CS4398/fishFeeder/wiki/Git-Workflow-Guide)

