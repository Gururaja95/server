import express from 'express';
import dotenv from 'dotenv';
import stripe from 'stripe';

// Load variables
dotenv.config();

// start server 
const app = express();

app.use(express.static('public'));
app.use(express.json());

// Home Route
app.get('/', (req, res) =>{
    res.sendFile('index.html', {root: 'public'});
})

// stripe
let stripeGateway = stripe(process.env.stripe_api);

app.post('/stripe-checkout', async (req, res) => {
    const lineItems = req.body.items.map((item) => {
        const unitAmount = parseInt(item.price.replace(/[^0-9.-]+/g, '') *100);

    })
})
 app.listen(3000,() => {
    console.log("listening on port 3000;");
 });


 /*
 thi is the starting point
 */
const http = require('http');
const app = require('./app');

const port = process.env.Port || 3000;
const server = http.createServer(app);

server.listen(port,  () => {
    console.log(`started on port ${port}`);
});