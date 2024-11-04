const {Schema} = require('mongoose');

const subSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    addOns: {type: Object, required: true},
    billing: {type: String, required: true},
    total: {type: Number, required: true}
});

module.exports = {subSchema};