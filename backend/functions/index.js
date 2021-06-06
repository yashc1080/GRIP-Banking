/* eslint-disable max-len */
const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const {getAllUsers, exchange, cheque} = require("./handlers/users");
app.use(cors());
app.use(bodyParser.json());

app.get("/users", getAllUsers);
app.get("/cheque", cheque);
app.post("/transfer", exchange);
exports.api = functions.region("asia-northeast3").https.onRequest(app);

