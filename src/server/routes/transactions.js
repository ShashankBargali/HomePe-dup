const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const Transaction = require('../models/Statement');
const router = express.Router();

router.get('/fetchtr', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;

        const trnx = await Transaction.find({ payId: userId })
        res.json({ success: true, response: trnx })

    } catch (error) {
        res.status(500).json({ success: false, response: "Some internal error occured" })
        console.log(error)
    }
})

module.exports = router;