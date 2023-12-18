import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Grid, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

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
    top: '54.3%',
    left: '58.2%',
    transform: 'translate(-50%, -50%)',
    width: 1100,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1.5,
    borderRadius:'6px'
  };

const ViewEmployeeComponent = (props:any) => {
    const classes = useStyles();

    //Model Popup
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //view value
    const [selected,setSelected] = useState()
    const [id,setId]=useState(props.id);
    const [employeeId] = useState(props.employeeId)
    const [assetTagID,setAssetTagID]=useState(props.assettagid);
    const [name]=useState(props.name);
    const [email]=useState(props.email);
    const [mobile]=useState(props.mobile);
    const [position]=useState(props.position);
    const [department]=useState(props.department);
    const [site]=useState(props.site);
    const [projectName]=useState(props.projectName);
    const [clients]=useState(props.clients);
    const [location]=useState(props.location);
    const [sbuHead]=useState(props.sbuHead);
    const [clientsLob]=useState(props.clientsLob);
    const [workLocation]=useState(props.workLocation);
    const [address]=useState(props.address);

   

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <VisibilityIcon style={{ fontSize: "1rem" }} />
      </IconButton>
      <Modal open={open} aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description" >
     
        <Box sx={style}>
            <Grid container style={{marginBottom:'2rem'}}>
                <Grid item xs={11.5}>
                <Typography style={{fontFamily:"cursive", fontSize:'1.3rem'}} fontWeight={"bold"}>View Employee Details</Typography>
                </Grid>
                <Grid item xs={0.5}>
                  <Tooltip title="Close">
                  <IconButton>
                    <CloseIcon onClick={handleClose}/>
                  </IconButton>
                  </Tooltip>
                </Grid>
            </Grid>
            <Grid container className={classes.card} style={{height:'38vh',paddingBottom:'0.5rem',paddingTop:'0.5rem',marginTop:'1rem'}}>
                <Grid item xs={6} style={{paddingLeft:'5rem',marginTop:'1.5rem'}} >
                    <Grid container sx={{alignItems:'center'}}>
                    <Grid item xs={3.2}>
                    <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Employee ID </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography>:</Typography>
                        </Grid>
                    <Grid item xs={7.6}>
                    <Typography>{employeeId}</Typography>
                    </Grid>
                    </Grid> 
                </Grid>
                <Grid item xs={6} style={{paddingLeft:'8rem',marginTop:'1.5rem'}}>
                    <Grid container sx={{alignItems:'center'}}>
                    <Grid item xs={3.2}>
                    <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Name</Typography>
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
                    <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Email </Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={7.6}>
                    <Typography>{email}</Typography>
                    </Grid>
                    </Grid> 
                </Grid>
                <Grid item xs={6} style={{paddingLeft:'8rem'}}>
                    <Grid container sx={{alignItems:'center'}}>
                    <Grid item xs={3.2}>
                    <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Mobile</Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={7.6}>
                    <Typography>{mobile}</Typography>
                    </Grid>
                    </Grid> 
                </Grid>
                <Grid item xs={6} style={{paddingLeft:'5rem'}}>
                    <Grid container sx={{alignItems:'center'}}>
                    <Grid item xs={3.2}>
                    <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Position</Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={7.6}>
                    <Typography>{position}</Typography>
                    </Grid>
                    </Grid> 
                </Grid>
                <Grid item xs={6} style={{paddingLeft:'8rem'}}>
                    <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={3.2}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Department </Typography>
                        </Grid>
                        <Grid item xs={1}>
                        <Typography>:</Typography>
                        </Grid>
                        <Grid item xs={7.6}>      
                        <Typography>{department}</Typography>
                        </Grid>
                    </Grid> 
                </Grid>
                <Grid item xs={6} style={{paddingLeft:'5rem'}}>
                    <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={3.2}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Site</Typography>
                        </Grid>
                        <Grid item xs={1}>
                        <Typography>:</Typography>
                        </Grid>
                        <Grid item xs={7.6}>      
                        <Typography>{site}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} style={{paddingLeft:'8rem'}}>
                    <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={3.2}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Project Name</Typography>
                        </Grid>
                        <Grid item xs={1}>
                        <Typography>:</Typography>
                        </Grid>
                        <Grid item xs={7.6}>
                        <Typography>{projectName}</Typography>
                        </Grid>
                    </Grid> 
                </Grid>   
            </Grid>
            <Grid container className={classes.card} style={{height:'33vh',marginTop:"1.6rem",paddingTop:'0.5rem',paddingBottom:'2rem'}}>       
                <Grid item xs={6} style={{paddingLeft:'5rem'}}>
                    <Grid container sx={{alignItems:'center'}} mt={2}>
                        <Grid item xs={3.2}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Clients</Typography>
                        </Grid>
                        <Grid item xs={1}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                        </Grid>
                        <Grid item xs={7.6}>
                        <Typography>{clients}</Typography>
                        </Grid>
                    </Grid> 
                </Grid>
                <Grid item xs={6} style={{paddingLeft:'8rem'}} mt={2} >
                    <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={3.2}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Location </Typography>
                        </Grid>
                        <Grid item xs={1}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                        </Grid>
                        <Grid item xs={7.6}>
                        <Typography>{location}</Typography>
                        </Grid>
                    </Grid> 
                </Grid>
                <Grid item xs={6} style={{paddingLeft:'5rem'}}>
                    <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={3.2}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>SBU Head </Typography>
                        </Grid>
                        <Grid item xs={1}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                        </Grid>
                        <Grid item xs={7.6}>
                        <Typography>{sbuHead}</Typography>
                        </Grid>
                    </Grid> 
                </Grid>
                <Grid item xs={6} style={{paddingLeft:'8rem'}}>
                    <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={3.2}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Clients LOB </Typography>
                        </Grid>
                        <Grid item xs={1}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                        </Grid>
                        <Grid item xs={7.8}>
                        <Typography>{clientsLob}</Typography>
                        </Grid>
                    </Grid> 
                </Grid>
                <Grid item xs={6} style={{paddingLeft:'5rem'}}>
                    <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={3.2}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Work Location</Typography>
                        </Grid>
                        <Grid item xs={1}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                        </Grid>
                        <Grid item xs={7.6}>
                        <Typography>{workLocation}</Typography>
                        </Grid>
                    </Grid> 
                </Grid>
                <Grid item xs={6} style={{paddingLeft:'8rem'}}>
                    <Grid container sx={{alignItems:'center'}}>
                        <Grid item xs={3.2}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>Address</Typography>
                        </Grid>
                        <Grid item xs={1}>
                        <Typography fontSize={"0.8rem"} fontWeight={"bold"}>:</Typography>
                        </Grid>
                        <Grid item xs={7.6}>
                        <Typography>{address}</Typography>
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

export default ViewEmployeeComponent;
