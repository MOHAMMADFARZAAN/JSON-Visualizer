const express = require('express');
const Model = require('../models/usermodel');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.post('/add', (req, res) => {

    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err);
        });

});




// dISPLAY ALL ITEMS


router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
})


router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) {

                // payload, secretkey, expiry
                const { _id, email, password } = result;
                const payload = { _id, email, password };

                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '1hr' },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json(err);
                        }
                        else {
                            res.status(200).json({ token: token })
                        }
                    }
                )

            }
            else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;