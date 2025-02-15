var express = require('express');
var router = express.Router();

const messageController = require('../controller/messageController')

// propertycontroller///

router.post("/builderMessages",messageController.builderMessages)




module.exports = router;
