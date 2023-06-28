const mongoose = require("mongoose");
const { async } = require("regenerator-runtime");

const MONGO_USERNAME = encodeURIComponent("nasa-api");
const MONGO_PASSWORD = encodeURIComponent("Gourav@123");
const MONGO_HOSTNAME = "cluster0.voba4zq.mongodb.net";
const MONGO_DATABASE = "nasa";

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DATABASE}?retryWrites=true&w=majority`;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  });
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
