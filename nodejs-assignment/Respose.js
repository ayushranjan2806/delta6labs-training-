const express = require('express');
const app = express();
const port = 3000; // 


app.get('/', (req, res) => {
  res.send('Hello, Galaxy!'); // Changed the greeting message
});


app.get('/api/data', (req, res) => {
  const jsonData = {
    message: 'This is custom JSON data',
    timestamp: new Date().toISOString()
  };
  res.json(jsonData);
});


app.get('/html', (req, res) => {
  const htmlContent = '<h1>Welcome to my HTML page!</h1>'; // Changed the HTML content
  res.send(htmlContent);
});

// Respond with a custom status code and message for requests to '/status'
app.get('/status', (req, res) => {
  res.status(401).send('Unauthorized'); // Changed the status code and message
});

// Redirect to another URL for requests to '/redirect'
app.get('/redirect', (req, res) => {
  res.redirect('https://www.example.com'); // 
});

// Handle a 404 Not Found error with a custom message
app.use((req, res) => {
  res.status(404).send('404 Page Not Found. Please check the URL.'); // Changed the 404 message
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error. Please try again later.'); // Changed the 500 message
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
