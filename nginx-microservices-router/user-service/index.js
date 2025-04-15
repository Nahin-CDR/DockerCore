const express = require('express');
const app = express();

app.get('/user', (req, res) => {
  res.send("User Service: Profile Info");
});

app.listen(3000, () => console.log("User Service running on port 3000"));
