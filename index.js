const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const projectRoutes = require('./routes/projectRoutes')
const taskRoutes = require('./routes/taskRoutes')
const path = require('path')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;
app.use(express.json())

connectDB()

app.use('/api/auth', authRoutes)
app.use('/api/projects',projectRoutes)
app.use('/api/tasks',taskRoutes)

// Serve the Postman collection file
app.get('/download/postman-collection', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'Trello Clone Backend API.postman_collection.json');
    res.download(filePath, 'Trello Clone Backend API.postman_collection.json', (err) => {
        if (err) {
            res.status(500).send({ message: "Error downloading the file." });
        }
    });
});

// Serve a welcome message with a download link
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Welcome to Trello Clone Backend</title>
            </head>
            <body>
                <h1>Welcome to the Trello Clone Backend API</h1>
                <p>This is the backend service for the Trello Clone project.</p>
                <p><a href="/download/postman-collection">Download the Postman Collection</a> to test the APIs.</p>
            </body>
        </html>
    `);
});

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
    
})