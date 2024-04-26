const express = require('express')
const router = express.Router()
const user = require('../controller/user')


router.get('/',user.getAllUser)
router.post('/',user.addUser)



module.exports = router