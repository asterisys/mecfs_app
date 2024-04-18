const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// MySQL database configuration
const dbConfig = {
  host: 'your_mysql_host',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_database_name',
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Express route to download SQL table results
app.get('/download', (req, res) => {
  const query = 'SELECT * FROM UserResponses WHERE username==<USERNAME>'; //REPLACE WITH USERNAME

  // Execute the database query
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Convert the result to CSV format
    const csvData = results.map(row => Object.values(row).join(',')).join('\n');
    const filePath = path.join(__dirname, 'downloads', 'result.csv'); // Adjust the file path and name

    // Save the CSV file
    fs.writeFileSync(filePath, csvData);

    // Send the CSV file as a response
    res.download(filePath, 'result.csv', (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Internal Server Error');
      }

      // Remove the file after sending
      fs.unlinkSync(filePath);
    });
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
