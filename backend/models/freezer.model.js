const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const freezerSchema = new Schema ({
username: { type: String, required: true},
description: { type: String, required: true},
volume: { type: Number, required: true},
date: { type: Date, required: true},
}, {
    timestamps: true,
});
const Freezer = mongoose.model('Freezer', freezerSchema);

module.exports = Freezer;