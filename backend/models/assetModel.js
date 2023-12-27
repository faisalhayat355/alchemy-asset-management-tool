const mongoose = require('mongoose');

const assetSchema= new mongoose.Schema({

    assettagid:{
        type:String,
      
    },
    description:{
        type:String,
 
    },
    name:{
        type:String,
 
    },
    brand:{
        type:String,
    
    },
    serialno:{
        type:String,
    
    },
    model:{
        type:String,
    
    },
    cost:{
        type:String,
   
    },
    status:{
        type:String,
     
    },
    assignmode:{
        type:String,
    },
    purchasedate:{
        type:String,
     
    },
    purchasefrom:{
        type:String,
       
    },
    ram:{
        type:String,
      
    },
    processor:{
        type:String,
       
    },
    assigndate:{
        type:String,
       
    },
    courierdate:{
        type:String,
    
    },
    disktype:{
        type:String,
     
    },
    remarks:{
        type:String,
     
    },
    courierid:{
        type:String,
     
    },
    returndate:{
        type:String,
      
    },
    image:{
        type:String,
    }
},
{   timestamps: true 
});


module.exports = mongoose.model("Asset",assetSchema)
