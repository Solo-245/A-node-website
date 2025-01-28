const express = require('express');
const app = express();
const path = require('path');
const PORT = 8383;

app.get('/about.html', (req, res) => {
   console.log('I am about to send a file');
   
   res.send('Hello World');
});

app.get('/about', (req, res) => {
   console.log('I am about to send about.html');
   res.sendFile(path.join(__dirname, 'about.html'));
});
app.get('/contact', (req, res) => {
   console.log('I am about to send contact.html');
   res.sendFile(path.join(__dirname, 'contact-me.html'));
});

// Middleware to handle 404 errors for any other paths
app.use((req, res) => {
    console.log('404 page not found');
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
