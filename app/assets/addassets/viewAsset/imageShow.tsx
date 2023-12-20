import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Box, Grid, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import ImageIcon from '@mui/icons-material/Image';


type Post = {
  _id: string;
  id: string;
  employeeId: string;
  name: string;
  email: string;
  mobile: string;
  position: string;
  address: string;
  status: string;
  assignmode:string;
  image:string;
  assettagid:string;
  description:string;
  brand:string;
  serialno:string;
  model:string;
  cost:string;
  purchasedate:string;
  purchasefrom:string;
  ram:string;
  processor:string;
  assigndate:string;
  courierdate:string;
  disktype:string;
  remarks:string;
  courierid:string;
  returndate:string;
};


const useStyles = makeStyles({
    errormessage: {
      fontSize: "0.75rem",
      color: "red",
    },
    container:{
      paddingLeft:'1rem',
      paddingTop:'0.5rem',
      paddingRight:'1rem'
     
    },
    card:{
      background: "white",
      width: "99.5%", 
      borderRadius:"8px",
      borderTop:'3px solid #1F7DA9',
      paddingLeft:'1rem',
      paddingRight:'0.5rem',
      paddingTop:'0.5rem'
    },
    typography: {
      fontFamily:"cursive",
      fontSize:'1.3rem',
      paddingBottom:'0.5rem'
   },
   scrollbar:{
      height: "65px",
      overflow: "auto",
   }
  });
const style = {
    position: 'absolute' as 'absolute',
    top: '53.5%',
    left: '58.2%',
    transform: 'translate(-50%, -50%)',
    width: 1100,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1.5,
    borderRadius:'6px'
  };

const ViewAssetImageComponent = ({post}:any) => {
    const classes = useStyles();
    //Model Popup
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    //View Items State
    // const [id]=useState(id);
    // const [image,setImage]=useState(props.image)

  return (
    <div>
      <IconButton onClick={handleOpen}> <ImageIcon style={{ fontSize: "1rem" }}/></IconButton>
      <Modal open={open} aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" >
        <Box sx={style}>
            <Grid container style={{marginBottom:'0.5rem'}}>
              <Grid item xs={11.5}>
                <Typography style={{fontFamily:"cursive", fontSize:'1.3rem'}} fontWeight={"bold"}>View Asset</Typography>
              </Grid>
              <Grid item xs={0.5}>
                <Tooltip title="Close">
                  <IconButton>
                    <CloseIcon onClick={handleClose}/>
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          <Grid container className={classes.card} style={{height:'44vh',marginTop:"0.4rem",paddingTop:'0.5rem'}}>       
            <Grid item xs={6} style={{paddingLeft:'5rem'}}>
        <Box>
          <Grid container >
            <Grid item xs={4} style={{display:'flex'}}>
          
                <>
                <img src={'http://localhost:8000/assetImages/'+post.image} style={{width:'150px', height:'100px'}}/>
               </>
         
            </Grid>
            </Grid>
        </Box>
                    {/* {image && <img src={`${baseURL}/${image}`} alt="Product" />} */}

              {/* {image && <img src={image} alt="Image not found" style={{width:'120px', height:'100px'}}/>} */}
              {/* {image && <img src={'http://127.0.0.1:8000/get-asset-posts/'${image}} alt="Image not found" style={{width:'120px', height:'100px'}}/>} */}
            {/* <img src={'http://127.0.0.1:8000/postImages/'${image}:any} style={{width:'120px', height:'100px'}}/> */}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewAssetImageComponent;
