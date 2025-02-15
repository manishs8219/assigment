const propertyDB = require('../model/property')

const messageDB = require('../model/message')

const helper = require('../helper/helper')

const builder = require('../model/builder')

module.exports = {

   
    

    submitBuilderProperty: async (req, res) => {
    
      
        try {

            const required = {
              name:req.body.name,
              location:req.body.location,
              price:req.body.price,
              availableUnits:req.body.availableUnits,
              builderId:req.body.builderId
            }

            const non_required = {}

            const getData = await helper.vaildObject(required,non_required,res)

            if(!getData){
                return
            }
        
            const createData = await propertyDB.create({
                name:getData.name,
                location:getData.location,
                price:getData.price,
                availableUnits:getData.availableUnits,
                builderId:getData.builderId,
                status:"pending_publish",
                approvalStatus:"pending",
                submissionDate: new Date(),
            })
         
            return helper.success(res,'create property successfully',createData)
        } catch (error) {
          return helper.error(res,error)
        }
      },


   adminProperties : async (req, res) => {
        try {
          // Get properties with pending approval status
          const properties = await propertyDB.find({ approvalStatus: 'pending' }).populate('builderId');

         return helper.success(res,'get admin property successfully',properties)
        } catch (error) {
        return helper.error(res,error)
        }
      },


      adminApproveProperty : async (req, res) => {
      
      
        try {
            const required = {
                propertyId:req.body.propertyId ,
                approvalStatus:req.body.approvalStatus
            }

            const non_required = {}

            const getData = await helper.vaildObject(required,non_required,res)

         
            if(!getData){
                return
            }

          const property = await propertyDB.findOne({
            _id:getData.propertyId
          });

          if (!property) {
            return helper.error({ message: 'Property not found' });
          }
      
      
          const propertyApproved = await propertyDB.findOneAndUpdate(
            { _id: getData.propertyId },
            { $set: {
                approvalStatus:getData.approvalStatus
            }},{

                new:true
            }
        );
       
  
          const messageData = await messageDB.create({
            builderId: property.builderId,
            message: `Your property has been ${getData.approvalStatus}`,
          })
        
        
        
      
          return helper.success(res,'Property approved successfully', propertyApproved)
        } catch (error) {
            console.log(error)
         return helper.error(res,error)
        }
      },

      
      adminPublishProperty:  async (req, res) => {
      
      
        try {

            const required = {
                propertyId:req.body.propertyId
            }

            const non_required = {}

            const getData = await helper.vaildObject(required,non_required,res)
            
            if(!getData){
                return
            }

          const property = await propertyDB.findOne({_id:getData.propertyId});

          if (!property) return helper.error({ message: 'Property not found' });
      
          if (property.approvalStatus !== 'approved') {
            return helper.error('Property must be approved before publishing');
          }
      

        const propertyData = await propertyDB.findOneAndUpdate({
           _id:getData.propertyId
        },{
            status:'published'
        },{
            new:true
        })
      
          return helper.success(res,'Property published successfully', propertyData);
        } catch (error) {
          return helper.error(res,error)
        }
      },


}