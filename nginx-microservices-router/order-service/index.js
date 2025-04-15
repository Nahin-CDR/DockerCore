const express = require('express');
const axios = require('axios');
const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.send("Order Service: Order Processor");
});

router.get('/user-info', async (req, res) => {
  try {
    const response = await axios.get("http://user-service:3000/user");
    res.send(`Order → User response: ${response.data}`);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Failed to reach user-service");
  }
});

app.use('/order', router);

app.listen(3000, () => console.log("Order Service running on port 3000"));
