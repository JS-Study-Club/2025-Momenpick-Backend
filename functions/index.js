// 테스트 중입니다. (배포 테스트)

const functions = require("firebase-functions");

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.greet = functions.https.onRequest((request, response) => {
  const {name} = request.body;
  response.send(`Hello ${name}`);
});
