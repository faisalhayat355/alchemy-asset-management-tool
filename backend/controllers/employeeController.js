
const Employee = require ('../models/employeeModel')

const createEmployeePost = async (req,res)=>{
    try{
      const employee =  new Employee({
        employeeId:req.body.employeeId,
                   name:req.body.name,
                   email:req.body.email,
                   mobile:req.body.mobile,
                   position:req.body.position,
                   department:req.body.department,
                   site:req.body.site,
                   projectName:req.body.projectName,
                   clients:req.body.clients,
                   location:req.body.location,
                   sbuHead:req.body.sbuHead,
                   disktype:req.body.disktype,
                   clientsLob:req.body.clientsLob,
                   workLocation:req.body.workLocation,
                   address:req.body.address,
                   image:req.body.image,
        });
        const employeeData = await employee.save();

        res.status(200).send({success:true, msg:'Asset Post Data Successfully',data:employeeData});
    } catch (error){
        res.status(400).send({success:false, msg:error.message})
    }
}

const getEmployeePosts = async(req,res)=>{
    try{
        const employee = await Employee.find({});
        res.status(200).send({success:true, msg:'Asset Post Data Successfully',data:employee});

    } catch (error){
        res.status(400).send({success:false, msg:error.message})
    }
}

module.exports = {createEmployeePost,getEmployeePosts}