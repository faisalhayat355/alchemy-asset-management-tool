
const Asset = require ('../models/assetModel')

const createAssetPost = async (req,res)=>{
    try{
      const asset =  new Asset({
            assettagid:req.body.assettagid,
            description:req.body.description,
            name:req.body.name,
            brand:req.body.brand,
            serialno:req.body.serialno,
            model:req.body.model,
            cost:req.body.cost,
            status:req.body.status,
            category:req.body.category,
            purchasedate:req.body.purchasedate,
            purchasefrom:req.body.purchasefrom,
            ram:req.body.ram,
            processor:req.body.processor,
            assigndate:req.body.assigndate,
            courierdate:req.body.courierdate,
            disktype:req.body.disktype,
            remarks:req.body.remarks,
            courierid:req.body.courierid,
            returndate:req.body.returndate,
            image:req.file.filename,
        });
        const assetData = await asset.save();

        res.status(200).send({success:true, msg:'Asset Post Data Successfully',data:assetData});
    } catch (error){
        res.status(400).send({success:false, msg:error.message})
    }
}

const getAssetPosts = async(req,res)=>{
    try{
        const asset = await Asset.find({});
        res.status(200).send({success:true, msg:'Asset Post Data Successfully',data:asset});

    } catch (error){
        res.status(400).send({success:false, msg:error.message})
    }
}

const updateAssetPost= async (req,res)=>{
    try{
        if(req.file !== undefined){
            var id = req.body.id;
            var assettagid = req.body.assettagid;
            var name = req.body.name;
            var description = req.body.description;
            var brand = req.body.brand;
            var serialno = req.body.serialno;
            var model = req.body.model;
            var cost = req.body.cost;
            var status = req.body.status;
            var purchasedate = req.body.purchasedate;
            var purchasefrom = req.body.purchasefrom;
            var ram = req.body.ram;
            var processor = req.body.processor;
            var assigndate = req.body.assigndate;
            var courierdate = req.body.courierdate;
            var disktype = req.body.disktype;
            var remarks = req.body.remarks;
            var courierid = req.body.courierid;
            var returndate = req.body.returndate;
            var filename = req.file.filename;

          await Asset.findByIdAndUpdate({_id:id},{$set:{assettagid:assettagid,name:name,description:description,brand:brand,serialno:serialno,model:model,cost:cost,status:status,purchasedate:purchasedate,purchasefrom:purchasefrom,ram:ram,processor:processor,assigndate:assigndate,courierdate:courierdate,disktype:disktype,remarks:remarks,courierid:courierid,returndate:returndate,image:filename}})
            res.status(200).send({success:true,msg:"Post Updated Sucessfully"});
        }
        else{
            var id = req.body.id;
            var assettagid = req.body.assettagid;
            var description = req.body.description;
            var name = req.body.name;
            var brand = req.body.brand;
            var serialno = req.body.serialno;
            var model = req.body.model;
            var cost = req.body.cost;
            var status = req.body.status;
            var purchasedate = req.body.purchasedate;
            var purchasefrom = req.body.purchasefrom;
            var ram = req.body.ram;
            var processor = req.body.processor;
            var assigndate = req.body.assigndate;
            var courierdate = req.body.courierdate;
            var disktype = req.body.disktype;
            var remarks = req.body.remarks;
            var courierid = req.body.courierid;
            var returndate = req.body.returndate;

          await Asset.findByIdAndUpdate({_id:id},{$set:{assettagid:assettagid,name:name,description:description,brand:brand,serialno:serialno,model:model,cost:cost,status:status,purchasedate:purchasedate,purchasefrom:purchasefrom,ram:ram,processor:processor,assigndate:assigndate,courierdate:courierdate,disktype:disktype,remarks:remarks,courierid:courierid,returndate:returndate}})
            res.status(200).send({success:true,msg:"Post Updated Sucessfully"});
        }
    }catch(error){
        res.status(400).send({success:false, msg:error.message})
    }
}

module.exports = {createAssetPost,getAssetPosts,updateAssetPost}