const express = require("express"); // --- Importing express after install express.js ---
const app = express(); // --- Start express instance or express server ---

const bodyParser = require('body-parser')
app.use(bodyParser.json()) //--- Specifically PUT & POST method parse JSON data & add it to the request.body object. ---

const PORT = 3300; // --- Activate the server in a particular Port number, Remember port should not be reserved for other services running in your system. ---
const HOSTNAME = "localhost";
app.listen(PORT, () => {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});

// --- Creating slash'/' route or path for access in this path ---
app.get('/', (req, res) => {
    res.send('Hello World')
}) 

app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body; //--- Destructuring Data from body of the request. ---
    console.log(name);
    console.log(brand);

    response.send('Car Submitted Successfully') //--- Send response after the data is submitted successfully ---
})


// ========== Now Using mongoose connect to MongoDB ===========
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/backend_practice', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => {console.log('Connection Successful');})
    .catch( (error) => {console.log('Error Received =>' + error);})
