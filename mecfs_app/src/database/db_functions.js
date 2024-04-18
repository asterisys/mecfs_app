const mysql = require('mysql2');

//load the state schema json:
//here I will just call it schema
const schema = require('./schema.json');

function UploadData(schema){
// Create a connection to the MySQL server
    const connection = mysql.createConnection({
        host: 'your_mysql_host',
        user: 'your_mysql_user',
        password: 'your_mysql_password',
        database: 'your_database_name',
            });

    // Connect to the MySQL server
    connection.connect((err) => {
        if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL server');
        });

    // Sample data to be inserted
    const dataToInsert = {
        username : schema.profile.username,
        timestamp : schema.profile.timestamp,
        ability : JSON.stringify(schema.profile.ability),
        habits : JSON.stringify(schema.profile.habits),
        // Add more key-value pairs based on your table schema
        };


    const feedbackToInsert = {
        username : schema.profile.username,
        timestamp : schema.profile.timestamp,
        feedback : schema.feedback.response,
        // Add more key-value pairs based on your table schema
        };

    // SQL query to insert data into the table
    const insertQuery = 'INSERT INTO UserResponses SET ?';
    const feedbackQuery = 'INSERT INTO Feedback SET ?';

    // Execute the query
    connection.query(insertQuery, dataToInsert, (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return;
        }
        console.log('Data inserted successfully');
    });

    connection.query(feedbackQuery, feedbackToInsert, (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return;
        }
        console.log('Data inserted successfully');
        });
    
    // Close the connection after inserting data
    connection.end();

};