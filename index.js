const express = require('express');
const app = express();
const port = 3000;
const dbConfig = require('./conn');
const oracledb = require('oracledb');
const bodyParser = require('body-parser');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

app.use(bodyParser.json());

// Define the GET endpoint to retrieve data from Oracle
app.get('/data', async (req, res) => {
  try {
    const connection = await oracledb.getConnection(dbConfig);

    // Execute your SELECT query to fetch data from Oracle
    const result = await connection.execute('SELECT * FROM MONITOR_DATA_SILANG ');

    console.log(result.rows);
    await connection.close();

    res.json(result.rows);
  } catch (err) {
    console.error('Error retrieving data:', err);
    res.status(500).json({ error: 'An error occurred while retrieving data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});