import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { makeStyles } from "@mui/styles";

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
      fontSize: "0.75rem",color: "red",
    },
    container:{
      paddingLeft:'1rem',paddingTop:'0.5rem',paddingRight:'1rem'
    },
    card:{
      background: "white",width: "99.5%",borderRadius:"8px",borderTop:'3px solid #1F7DA9',
      paddingLeft:'1rem',paddingRight:'0.5rem',paddingTop:'0.5rem'
    },
    typography: {
      fontFamily:"cursive",fontSize:'1.3rem',paddingBottom:'0.5rem'
   },
   scrollbar:{
      height: "65px",overflow: "auto",display:'flex',
   }
  });
const style = {
    position: 'absolute' as 'absolute',top: '51%',left: '58.5%',p: 1.5,
    transform: 'translate(-50%, -50%)',width: 1137,bgcolor: 'background.paper'
  };

const ViewAssetComponent = (props:any) => {
    const classes = useStyles();
    //Model Popup
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //view items state
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
    const [imageList, setData] = useState<Post[]>([]);

    const baseURL = 'http://127.0.0.1:8000/get-asset-posts/';
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get<{ data: Post[] }>(baseURL);
          setData(response.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };  
      fetchData();
    }, []);

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
          <Grid container className={classes.card} style={{height:'32vh',paddingBottom:'0.5rem',paddingTop:'0.5rem'}}>
              <Grid item xs={6} style={{paddingLeft:'4rem',marginTop:'1rem'}}>
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
              <Grid item xs={6} style={{paddingLeft:'8rem'}}>
                <Grid container sx={{alignItems:'center'}} mt={2}>
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
              <Grid item xs={6} style={{paddingLeft:'4rem'}}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                    <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Assign Mode</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography fontWeight={"bold"}>:</Typography>
                  </Grid>
                  <Grid item xs={7.6}>
                    <Typography>{assignmode}</Typography>
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
          </Grid>
          <Grid container className={classes.card} style={{height:'57vh',marginTop:"0.9rem",paddingTop:'1.5rem'}}>       
            <Grid item xs={6} style={{paddingLeft:'4rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                  <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Asset Tag ID</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography fontSize={"0.9rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                  <Typography>{assetTagID}</Typography>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} style={{paddingLeft:'8rem'}}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                  <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Remarks</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography fontSize={"0.9rem"} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                  <Typography>{remarks}</Typography>
                </Grid>
              </Grid> 
            </Grid>
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
                <Grid item xs={3.2} mb={5.5}>
                  <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Description </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography fontSize={"0.9rem"} mb={5.5} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Grid className={classes.scrollbar}>
                  <Typography>{description}</Typography>
                </Grid>
                </Grid>
              </Grid> 
            </Grid>
            {/* <Grid item xs={6} style={{paddingLeft:'4rem'}} >
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2} mb={5.5}>
                  <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Status </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography fontSize={"0.9rem"} mb={5.5} fontWeight={"bold"}>:</Typography>
                </Grid>
                <Grid item xs={7.6}>
                <Grid className={classes.scrollbar}>
                  <Typography>{status}</Typography>
                </Grid>
                </Grid>
              </Grid> 
            </Grid> */}
            <Grid item xs={6} style={{paddingLeft:'5rem'}}>
        {/* <Box>
          <Grid container >
            <Grid item xs={4} style={{display:'flex'}}>
            {imageList?.map((post)=>{
              return(
                <>
                <img src={'http://localhost:8000/assetImages/'+post.image} style={{width:'150px', height:'100px'}}/>
               </>
              )
            })}
            </Grid>
            </Grid>
        </Box> */}
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

export default ViewAssetComponent;
