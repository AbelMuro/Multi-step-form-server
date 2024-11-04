const mongoose = require('mongoose');
const {subSchema} = require('./Schemas.js');

const Subscription = mongoose.model('sub', subSchema, 'subscriptions');

module.exports = {Subscription};