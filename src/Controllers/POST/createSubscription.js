const express = require('express');
const {Subscription} = require('../../Models/Models.js');
const router = express.Router();

router.post('/create_subscription', async (req, res) => {
    const sub = req.body;
    const name = sub.name;
    const email = sub.email;
    const phone = sub.phone;
    const addOns = sub.addOns;
    const billing = sub.billing;
    const total = sub.total;

    const subscription = {name, email, phone, addOns, billing, total};

    try{
        const newSub = new Subscription(subscription);
        await newSub.save();
        res.status(200).send('subscription has been confirmed');
    }
    catch(error){
        if(error.message.includes('user validation failed'))
            console.log('Validation error, document is missing required properties')
        else
            res.status(500).send(error.message);
    }
});

module.exports = router;