
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;
require('dotenv').config();
app.use(express.json());

app.post('/api/assistant/query', async (req, res) => {
  const query = req.body.query;
  try {
    const response = await axios.post(
      `https://api.loganalytics.io/v1/workspaces/${process.env.WORKSPACE_ID}/query`,
      { query },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
