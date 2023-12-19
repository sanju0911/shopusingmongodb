const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const MongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://sanjayjanardhan231:pfq2Q7IxaqKjaFQz@cluster0.qx7ijy3.mongodb.net/"
  )
    .then((client) => {
      console.log("database coonnceted");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = MongoConnect;
