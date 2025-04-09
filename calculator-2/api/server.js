const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = 3000;

// PostgreSQL DB connection config from env
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Middleware to parse JSON
app.use(express.json());

// Retry connection to DB
async function connectWithRetry() {
  let retries = 5;
  while (retries) {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS calculations (
          id SERIAL PRIMARY KEY,
          a NUMERIC,
          b NUMERIC,
          operation TEXT,
          result NUMERIC,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      console.log(" Table 'calculations' is ready.");
      break;
    } catch (err) {
      console.log("⏳ DB not ready, retrying in 5 seconds...");
      retries--;
      await new Promise(res => setTimeout(res, 5000));
    }
  }

  if (retries === 0) {
    console.error("Could not connect to database after retries.");
  }
}

connectWithRetry();

// POST /api/calculate
app.post('/api/calculate', async (req, res) => {
  const { a, b, operation } = req.body;
  let result;

  switch (operation) {
    case 'add': result = a + b; break;
    case 'subtract': result = a - b; break;
    case 'multiply': result = a * b; break;
    case 'divide':
      result = (b !== 0) ? a / b : null;
      break;
    default: result = null;
  }

  if (result === null) {
    return res.status(400).json({ error: "Invalid operation or division by zero." });
  }

  try {
    await pool.query(
      'INSERT INTO calculations (a, b, operation, result) VALUES ($1, $2, $3, $4)',
      [a, b, operation, result]
    );
    res.json({ result });
  } catch (err) {
    console.error("Insert Error:", err);
    res.status(500).json({ error: "Failed to save calculation" });
  }
});

// GET /api/history
app.get('/api/history', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM calculations ORDER BY created_at DESC LIMIT 10');
    res.json(rows);
  } catch (err) {
    console.error("Fetch History Error:", err);
    res.status(500).json({ error: "Failed to fetch history" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API server running on port ${PORT}`);
});
