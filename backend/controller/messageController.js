const messageDB = require('../model/message')

const helper = require('../helper/helper');
const { default: mongoose } = require('mongoose');

module.exports = {

    
    builderMessages : async (req, res) => {
        const { builderId } = req.body; 
      
        try {
          const messages = await messageDB.find({ builderId:new mongoose.Types.ObjectId(builderId) }).populate('builderId');
       
          return helper.success(res,'message get sucessfully',messages)
        } catch (error) {
         return helper.error(res,error)
        }
      }

}