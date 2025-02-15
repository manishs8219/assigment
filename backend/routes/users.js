var express = require('express');
var router = express.Router();

const propertyController = require('../controller/propertyController')

// propertycontroller///

router.post("/submitBuilderProperty",propertyController.submitBuilderProperty)

router.get("/adminProperties",propertyController.adminProperties)

router.post("/adminApproveProperty",propertyController.adminApproveProperty)

router.post("/adminPublishProperty",propertyController.adminPublishProperty)



module.exports = router;
