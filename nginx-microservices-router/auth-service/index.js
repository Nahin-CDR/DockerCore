const express = require("express");
const app = express();



app.get("/auth", (req, res) => {
    res.send("Hello from Auth Service");
});


app.listen(3000, () => console.log("Auth service running on 3000"));
