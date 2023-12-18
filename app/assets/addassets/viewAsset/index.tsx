import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Grid, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

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

const ViewAssetComponent = (props:any) => {
    const classes = useStyles();
    //Model Popup
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //View Items State
    const [id]=useState(props.id);
    const [assetTagID]=useState(props.assettagid);
    const [name]=useState(props.name);
    const [status]=useState(props.status);
    const [assignmode] = useState(props.assignmode)
    const [description]=useState(props.description);
    const [brand]=useState(props.brand);
    const [serialno]=useState(props.serialno);
    const [model]=useState(props.model);
    const [cost]=useState(props.cost);
    const [purchasedate]=useState(props.purchasedate);
    const [purchasefrom]=useState(props.purchasefrom);
    const [ram]=useState(props.ram);
    const [processor]=useState(props.processor);
    const [assigndate]=useState(props.assigndate);
    const [courierdate]=useState(props.courierdate);
    const [disktype]=useState(props.disktype);
    const [remarks]=useState(props.remarks);
    const [courierid]=useState(props.courierid);
    const [returndate]=useState(props.returndate);
    const [image,setImage]=useState(props.image)

  return (
    <div>
      <IconButton onClick={handleOpen}> <VisibilityIcon style={{ fontSize: "1rem" }}/></IconButton>
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
          <Grid container className={classes.card} style={{height:'34vh',paddingBottom:'0.5rem',paddingTop:'0.5rem'}}>
              <Grid item xs={6} style={{paddingLeft:'4rem',marginTop:'1rem'}} >
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Asset Tag ID </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography fontWeight={"bold"}>:</Typography>
                    </Grid>
                  <Grid item xs={7.6}>
                  <Typography>{assetTagID}</Typography>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6} style={{paddingLeft:'8rem',marginTop:'1rem'}}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Assign To</Typography>
                  </Grid>
                  <Grid item xs={1}>
                  <Typography fontWeight={"bold"}>:</Typography>
                  </Grid>
                  <Grid item xs={7.6}>
                  <Typography>{name}</Typography>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6} style={{paddingLeft:'4rem'}}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Assign Date </Typography>
                  </Grid>
                  <Grid item xs={1}>
                  <Typography fontWeight={"bold"}>:</Typography>
                  </Grid>
                  <Grid item xs={7.6}>
                  <Typography>{assigndate}</Typography>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6} style={{paddingLeft:'8rem'}}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Status</Typography>
                  </Grid>
                  <Grid item xs={1}>
                  <Typography fontWeight={"bold"}>:</Typography>
                  </Grid>
                  <Grid item xs={7.6}>
                  <Typography>{status}</Typography>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6} style={{paddingLeft:'4rem'}}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Return Date</Typography>
                  </Grid>
                  <Grid item xs={1}>
                  <Typography fontWeight={"bold"}>:</Typography>
                  </Grid>
                  <Grid item xs={7.6}>
                  <Typography>{returndate}</Typography>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6} style={{paddingLeft:'8rem'}}>
                <Grid container sx={{alignItems:'center'}}>
                    <Grid item xs={3.2}>
                    <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Courier ID </Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography fontWeight={"bold"}>:</Typography>
                    </Grid>
                    <Grid item xs={7.6}>      
                    <Typography>{courierid}</Typography>
                    </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6} style={{paddingLeft:'4rem'}}>
                <Grid container sx={{alignItems:'center'}}>
                    <Grid item xs={3.2}>
                    <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Courier Date</Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography fontWeight={"bold"}>:</Typography>
                    </Grid>
                    <Grid item xs={7.6}>      
                    <Typography>{courierdate}</Typography>
                    </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} style={{paddingLeft:'8rem'}}>
                  <Grid container sx={{alignItems:'center'}}>
                    <Grid item xs={3.2}>
                    <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Remarks</Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography fontWeight={"bold"}>:</Typography>
                    </Grid>
                    <Grid item xs={7.6}>
                    <Typography>{remarks}</Typography>
                    </Grid>
                  </Grid> 
              </Grid>   
          </Grid>
          <Grid container className={classes.card} style={{height:'44vh',marginTop:"0.4rem",paddingTop:'0.5rem'}}>       
            <Grid item xs={6} style={{paddingLeft:'4rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Disk Type</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{disktype}</Typography>
                </Grid>
              </Grid> 
            </Grid>
           
            <Grid item xs={6} style={{paddingLeft:'8rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Purchase Date </Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{purchasedate}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'4rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Purchase From </Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{purchasefrom}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'8rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Ram</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{ram}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'4rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Brand</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{brand}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'8rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Processor</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{processor}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'4rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Serial No.</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{serialno}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'8rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Model</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{model}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'4rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Cost</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Typography>{cost}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'8rem'}} >
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Description </Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Grid className={classes.scrollbar}>
                <Typography>{description}</Typography>
                </Grid>
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