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


router.route('/:id').get((req, res) => {
    Freezer.findById(req.params.id)
    .then(freezer => res.json(freezer))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Freezer.findByIdAndDelete(req.params.id)
    .then(() => res.json('Freezer deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Freezer.findById(req.params.id)
    .then(freezer => {
        freezer.username = req.body.username;
        freezer.description = req.body.description;
        freezer.volume = Number(req.body.volume);
        freezer.date = Date.parse(req.body.date);

        freezer.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;