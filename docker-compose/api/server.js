const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from API!' });
});

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
});
