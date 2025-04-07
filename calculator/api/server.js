const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from API!' });
});

app.use(express.json());

app.post('/api/calculate', (req, res) => {
  const { a, b, operation } = req.body;

  let result;
  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      if (b === 0) return res.status(400).json({ result: 'Cannot divide by zero' });
      result = a / b;
      break;
    default:
      return res.status(400).json({ result: 'Invalid operation' });
  }

  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
