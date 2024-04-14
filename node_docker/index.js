const express = require("express");

const app = express();

app.get("/", (req,res) => {
	res.send("Hello, Ostad!");
});

app.listen(process.env.PORT, () => {
	console.log(`Listening to port: ${process.env.PORT}`);
});
