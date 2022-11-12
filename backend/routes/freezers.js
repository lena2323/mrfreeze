const router = require('express').Router();
let Freezer = require('../models/freezer.model');

router.route('/').get((req, res) =>{
    Freezer.find()
        .then(freezers => res.json(freezers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{
const username = req.body.username;
const description = req.body.description;
const volume = req.body.volume;
const date = req.body.date;



const newFreezer = new Freezer({
    username,
    description,
    volume,
    date,
});

newFreezer.save()
    .then(()  => res.json('Freezer added!'))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;