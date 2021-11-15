const { Router } = require('express');
const router = Router();
const User = require('../models/User');

//GET
router.get('/getUsers', (req, res)=>{
    User.find()
    .then((doc)=>{
        res.json(doc);
    });
});


// POST 
router.post('/addUser', (req, res)=>{
    try {
        User.insertMany([{name: req.body.name, age: req.body.age, city: req.body.city}], (err)=>{
            if(err){
                console.log('Error while POST');
            } else{
                res.send('POST OK');
            }
        });
    } catch (err){
        console.log(err);
    }
})

//UPDATE
router.put('/updateUser/:key', (req,res)=> {
    const { key } = req.params;
    User.findOneAndUpdate({name: key},
        {
            name: key,
            age: req.body.age,
            city: req.body.city
        }, (err)=> {
            if (err){
                console.log(err);
            } else {
                res.send('UPDATE OK');
            }});
});


// DELETE

router.delete('/deleteUser/:key', (req,res)=>{
    const { key } = req.params;
    User.findOneAndDelete({name:key}, (err,doc)=>{
        if(err){
            console.log(err);
        } else {
            res.send('DELETE OK');
        }
    })
});

module.exports = router;