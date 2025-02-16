const express = require("express");
const app = express();
const http = require("http").createServer(app);

app.use("/public", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});





app.get("/contact",(req, res) =>{
    res.render("contact");
})

http.listen(3000, () => {
    console.log("Server started on port 3000.");
});