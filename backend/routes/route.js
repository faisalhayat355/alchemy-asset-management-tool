const express = require('express')
const post_route = express();
const bodyParser = require('body-parser');

post_route.use(bodyParser.json())

post_route.use(bodyParser.urlencoded({extended:true}));

const multer = require('multer');
const path =require('path');
const { error } = require('console');

post_route.use(express.static('public'));

//Asset Image Post
const assetstorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/assetImages'),function(erorr,success){
            if(error){
                    console.log(erorr)
            }
        });
    },
    filename:function(req,file,cb){

        const name = Date.now()+'-'+file.originalname;
        cb(null,name,function(error,success){
            if(error){
                console.log(erorr)
        }
        });    
    }
});

const assetimageupload = multer({storage:assetstorage});

//Employee Image Post 

const employeestorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/postImages'),function(erorr,success){
            if(error){
                    console.log(erorr)
            }
        });
    },
    filename:function(req,file,cb){

        const name = Date.now()+'-'+file.originalname;
        cb(null,name,function(error,success){
            if(error){
                console.log(erorr)
        }
        });    
    }
});

const employeeimageupload = multer({storage:employeestorage});

//Employee Post

const Employee = require('../controllers/employeeController');

post_route.post('/employee/create',employeeimageupload.single('image'),Employee.createEmployeePost);

post_route.get('/get-employee-posts',Employee.getEmployeePosts);

//Asset Post

const Asset = require('../controllers/assetController');

post_route.post('/asset/create',assetimageupload.single('image'),Asset.createAssetPost);

post_route.post('/asset/update-asset',assetimageupload.single('image'),Asset.updateAssetPost);

post_route.get('/get-asset-posts',Asset.getAssetPosts);

module.exports = post_route;