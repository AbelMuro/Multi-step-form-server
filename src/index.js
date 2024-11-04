const express = require('express');
const connectDB = require('./Database/db.js');
const cors = require('cors');
const createSubscription = require('./Controllers/POST/createSubscription.js');
const app = express();
const port = 4000;

connectDB();

app.use(express.json());
app.use(cors({
    origin: '*',
    allowedHeaders: ['Content-type'],
    methods: ['POST', 'GET'],
    optionsSuccessStatus: 200
}))

app.use(createSubscription);

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.listen(port, (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log(`server is running on port ${port}`)
})
