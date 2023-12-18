
const mongoose = require('mongoose');

const employeeSchema= new mongoose.Schema({

    employeeId:{
        type:String,
      
    },
    name:{
        type:String,
 
    },
    email:{
        type:String,
    
    },
    mobile:{
        type:String,
    
    },
    position:{
        type:String,
    
    },
    department:{
        type:String,
   
    },
    site:{
        type:String,
     
    },
    projectName:{
        type:String,
     
    },
    clients:{
        type:String,
       
    },
    location:{
        type:String,
      
    },
    sbuHead:{
        type:String,
       
    },
    clientsLob:{
        type:String,
       
    },
    workLocation:{
        type:String,
    
    },
    disktype:{
        type:String,
     
    },
    address:{
        type:String,
     
    },
    image:{
        type:String,
    }
});


module.exports = mongoose.model("Employee",employeeSchema)
