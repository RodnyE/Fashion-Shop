
const cfg = require("../config.js");

const express = require("express");
const app = express();


app.use("/", express.static(cfg.PUBLIC));
app.use("/node_modules", express.static(cfg.DIR + "/node_modules"));
app.get("/", (req, res) => res.redirect("/home"));
app.get("/home", (req, res) => res.sendFile(cfg.VIEWS + "/home.html"));

// start server
app.listen(cfg.PORT, () => {
    console.log("Server listen on port: " + cfg.PORT);
});