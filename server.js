const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

// define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// api routes
app.use(routes)

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNameUrlParser: true});

app.listen(PORT, () => {
    console.log(`API server is now listening on ${PORT}!`);
});