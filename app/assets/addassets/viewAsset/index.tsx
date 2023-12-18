import EditIcon from "@mui/icons-material/Edit";
import { Autocomplete, Box, Button, Grid, IconButton, Modal, TextField, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import assetPostService from "../services/assetPostService";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';

type Post = {
    _id: string;
    id: string;
    employeeId: string;
    name: string;
    email: string;
    mobile: string;
    position: string;
    address: string;
    site: string;
    image:string;
  
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

const ViewAssetComponent = (props:any) => {
    const classes = useStyles();

    //Model Popup
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //post call state
    const [selected,setSelected] = useState()
    const [id,setId]=useState(props.id);
    const [assetTagID,setAssetTagID]=useState(props.assettagid);
    const [name,setName]=useState(props.name);
    const [status,setStatus]=useState(props.status);
    const [assignmode,setAssignMode] = useState(props.assignmode)
    const [description,setDescription]=useState(props.description);
    const [brand,setBrand]=useState(props.brand);
    const [serialno,setSerialNo]=useState(props.serialno);
    const [model,setModel]=useState(props.model);
    const [cost,setCost]=useState(props.cost);
    const [purchasedate,setPurchaseDate]=useState(props.purchasedate);
    const [purchasefrom,setPurchaseFrom]=useState(props.purchasefrom);
    const [ram,setRam]=useState(props.ram);
    const [processor,setProcessor]=useState(props.processor);
    const [assigndate,setAssignDate]=useState(props.assigndate);
    const [courierdate,setCourierDate]=useState(props.courierdate);
    const [disktype,setDiskType]=useState(props.disktype);
    const [remarks,setRemarks]=useState(props.remarks);
    const [courierid,setCourierId]=useState(props.courierid);
    const [returndate,setReturnDate]=useState(props.returndate);
    const [image,setImage]=useState(props.image)

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <VisibilityIcon style={{ fontSize: "1rem" }} />
      </IconButton>
      <Modal open={open} aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description" >
     
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
          <Grid container className={classes.card} style={{height:'34vh',paddingBottom:'0.5rem',paddingTop:'0.5rem'}}>
              <Grid item xs={6} style={{paddingLeft:'5rem',marginTop:'1rem'}} >
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Asset Tag ID </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>:</Typography>
                    </Grid>
                  <Grid item xs={7.6}>
                  <Typography>{assetTagID}</Typography>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6} style={{paddingLeft:'8rem',marginTop:'1rem'}}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Assign To</Typography>
                  </Grid>
                  <Grid item xs={1}>
                  <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={7.6}>
                  <Typography>{name}</Typography>
                  </Grid>
                </Grid> 
              </Grid>
          
              <Grid item xs={6} style={{paddingLeft:'5rem'}}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Assign Date </Typography>
                  </Grid>
                  <Grid item xs={1}>
                  <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={7.6}>
                  <Typography>{assigndate}</Typography>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6} style={{paddingLeft:'8rem'}}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Status</Typography>
                  </Grid>
                  <Grid item xs={1}>
                  <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={7.6}>
                  <Typography>{status}</Typography>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6} style={{paddingLeft:'5rem'}}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Return Date</Typography>
                  </Grid>
                  <Grid item xs={1}>
                  <Typography>:</Typography>
                  </Grid>
                  <Grid item xs={7.6}>
                  <Typography>{returndate}</Typography>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6} style={{paddingLeft:'8rem'}}>
                <Grid container sx={{alignItems:'center'}}>
                    <Grid item xs={3.2}>
                    <Typography>Courier ID </Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={7.6}>      
                    <Typography>{courierid}</Typography>
                    </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6} style={{paddingLeft:'5rem'}}>
                <Grid container sx={{alignItems:'center'}}>
                    <Grid item xs={3.2}>
                    <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Courier Date</Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={7.6}>      
                    <Typography>{courierdate}</Typography>
                    </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} style={{paddingLeft:'8rem'}}>
                  <Grid container sx={{alignItems:'center'}}>
                    <Grid item xs={3.2}>
                    <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Remarks</Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={7.6}>
                    <Typography>{remarks}</Typography>
                    </Grid>
                  </Grid> 
              </Grid>   
        </Grid>
        <Grid container className={classes.card} style={{height:'44vh',marginTop:"0.4rem",paddingTop:'0.5rem'}}>       
            <Grid item xs={6} style={{paddingLeft:'5rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Disk Type</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{disktype}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'8rem'}} >
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Description </Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{description}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'5rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Purchase Date </Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{purchasedate}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'8rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Purchase From </Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{purchasefrom}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'5rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Ram</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{ram}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'8rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Brand</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{brand}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'5rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Processor</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{processor}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'8rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Serial No.</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{serialno}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'5rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Model</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{model}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'8rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Cost</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{cost}</Typography>
                </Grid>
              </Grid> 
            </Grid>

            {/* <Grid item xs={6} style={{paddingLeft:'5rem'}}>
            <img src={'http://127.0.0.1:8000/postImages/'+image.image} style={{width:'120px', height:'100px'}}/>
            </Grid> */}
        </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewAssetComponent;
