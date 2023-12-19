import EditIcon from "@mui/icons-material/Edit";
import { Autocomplete, Box, Button, Grid, IconButton, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import assetPostService from "../services/assetPostService";

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
    top: '50%',
    left: '58.2%',
    transform: 'translate(-50%, -50%)',
    width: 1126,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1.5,
    borderRadius:'6px'
  };

const UpdateAssetComponent = (props:any) => {
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
    const [assignmode,setAssignMode] =useState(props.assignmode)
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
    const [image, setImage] =useState(props.image)

    const handleChange=(e:any)=>{
      setSelected(e.target.value)
      setAssignMode(e.target.value)
      }
const updateAssetData = async(event:any)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('id',id);
    formData.append('name',name);
    formData.append('status',status);
    formData.append('assignmode',assignmode);
    formData.append('assettagid',assetTagID);
    formData.append('description',description);
    formData.append('brand',brand);
    formData.append('serialno',serialno);
    formData.append('model',model);
    formData.append('cost',cost);
    formData.append('purchasedate',purchasedate);
    formData.append('purchasefrom',purchasefrom);
    formData.append('ram',ram);
    formData.append('processor',processor);
    formData.append('assigndate',assigndate);
    formData.append('courierdate',courierdate);
    formData.append('disktype',disktype);
    formData.append('remarks',remarks);
    formData.append('courierid',courierid);
    formData.append('returndate',returndate);
    // if(selected != '' &&  selected.length != 0){
    //     formData.append('image',selected)
    // }
    const response = await assetPostService.update(formData);
    if(response.data.success == true){
        alert(response.data.msg)
    }
    else{
        alert(response.data.msg)
    }
    handleClose();
    location.reload(); 
}

const updateCustomerAssign = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setName(value);
  };

const [data, setData] = useState<Post[]>([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get<{ data: Post[] }>('http://127.0.0.1:8000/get-employee-posts');
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <EditIcon style={{ fontSize: "1rem" }} />
      </IconButton>
      <Modal open={open} aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description" >
      <form onSubmit={updateAssetData} >      
        <Box sx={style}>
        <Typography style={{fontFamily:"cursive", fontSize:'1.3rem',paddingBottom:'0.5rem'}} fontWeight={"bold"}>Update Asset</Typography>
        <Grid container className={classes.card} style={{height:'33vh',paddingBottom:'0.5rem',paddingTop:'0.5rem'}}>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Asset Tag ID </Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField size="small" fullWidth value={assetTagID} onChange={event =>setAssetTagID(event.target.value)} disabled/>
              </Grid>
            </Grid> 
          </Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography>Assign To <span style={{color:'red'}}>*</span></Typography>
                </Grid>
                <Grid item xs={8.6}>
              <Autocomplete disablePortal id="combo-box-demo" value={name} onChange={updateCustomerAssign} size="small" options={Array.from(new Set(data.map((option) => option.name)))} fullWidth renderInput={(params) => <TextField {...params} />}/>
                </Grid>
              </Grid> 
            </Grid>
              <Grid item xs={6}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Status<span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>
                  <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}} value={status} onChange={event =>setStatus(event.target.value)}>
                    <option>Select Status</option>
                    <option>Assign</option>
                    <option>UnAssign</option>
                  </select>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Assign Date <span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>
                  <TextField type="date" id="assign" value={assigndate} onChange={event =>setAssignDate(event.target.value)} size="small" fullWidth/>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Return Date <span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>
                  <TextField type="date" id="assign" value={returndate} onChange={event =>setReturnDate(event.target.value)} size="small" fullWidth/>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Assign Mode <span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>
                  <select value={selected} onChange={(e)=>handleChange(e)} style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
                    <option>Select Mode</option>
                    <option>Office Pickup</option>
                    <option>Courier</option>
                  </select>
                  </Grid>
                </Grid> 
              </Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Courier ID <span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>      
                  {selected == "Courier"? <CourierID courierid={courierid} setCourierId={setCourierId}/>:<OfficePickup/> }
                  </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Courier Date <span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>      
                  {selected == "Courier"? <CourierDate courierdate={courierdate} setCourierDate={setCourierDate} />:<OfficePickup /> }
                  </Grid>
              </Grid>
            </Grid>
        </Grid>
        <Grid container className={classes.card} style={{height:'55vh',marginTop:"0.1rem",paddingTop:'0.5rem'}}>     
            <Grid item xs={6}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Remarks</Typography>
                  </Grid>
                  <Grid item xs={8.6}>
                    <TextField fullWidth size="small" disabled value={remarks} onChange={event =>setRemarks(event.target.value)}/>
                  </Grid>
                </Grid> 
            </Grid>   
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography>Disk Type</Typography>
                </Grid>
                <Grid item xs={8.6}>
                <TextField fullWidth size="small" value={disktype} onChange={event =>setDiskType(event.target.value)} disabled/>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6} >
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography>Description </Typography>
                </Grid>
                <Grid item xs={8.6}>
                <TextField fullWidth size="small" value={description} onChange={event =>setDescription(event.target.value)} disabled/>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography>Purchase Date </Typography>
                </Grid>
                <Grid item xs={8.6}>
                <TextField fullWidth size="small" disabled value={purchasedate} onChange={event =>setPurchaseDate(event.target.value)} />
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography>Purchase From </Typography>
                </Grid>
                <Grid item xs={8.6}>
                <TextField fullWidth value={purchasefrom} onChange={event =>setPurchaseFrom(event.target.value)} size="small" disabled/>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography>Ram</Typography>
                </Grid>
                <Grid item xs={8.6}>
                <TextField fullWidth value={ram} onChange={event =>setRam(event.target.value)} size="small" disabled/>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography>Brand</Typography>
                </Grid>
                <Grid item xs={8.6}>
                <TextField fullWidth value={brand} onChange={event =>setBrand(event.target.value)} size="small" disabled/>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography>Processor</Typography>
                </Grid>
                <Grid item xs={8.6}>
                <TextField fullWidth value={processor} onChange={event =>setProcessor(event.target.value)} size="small" disabled/>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography>Serial No.</Typography>
                </Grid>
                <Grid item xs={8.6}>
                <TextField fullWidth value={serialno} onChange={event =>setSerialNo(event.target.value)} size="small" disabled/>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography>Model</Typography>
                </Grid>
                <Grid item xs={8.6}>
                <TextField fullWidth value={model} onChange={event =>setModel(event.target.value)} size="small" disabled/>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography>Cost</Typography>
                </Grid>
                <Grid item xs={8.6}>
                <TextField fullWidth value={cost} onChange={event =>setCost(event.target.value)}  size="small" disabled/>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography>Image</Typography>
                </Grid>
                <Grid item xs={8.6}>
                <TextField fullWidth value={image} onChange={event =>setImage(event.target.value)}  size="small" disabled/>
                </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}></Grid>
                <Grid item xs={8.8}>
               <Button variant="contained" style={{background:'#1F7DA9',width:'47%',marginRight:'1rem'}} onClick={handleClose}>Cancel</Button>
               <Button type="submit" variant="contained" style={{background:'#1F7DA9',width:'46.5%'}}>Save</Button>
                </Grid>
              </Grid> 
            </Grid>
        </Grid>
        </Box>
      </form>
      </Modal>
    </div>
  );
};


const OfficePickup =()=>{
    return(
      <>
      <TextField size="small" fullWidth disabled />
      </>
    )
  }
const CourierID =({courierid,setCourierId}:any)=>{
    return(
      <>
          <Grid container sx={{alignItems:'center'}}>
            <TextField size="small" placeholder="Please Enter Courier ID" fullWidth value={courierid} onChange={event =>setCourierId(event.target.value)}/>
          </Grid> 
      </>
    )
  }
const CourierDate =({courierdate,setCourierDate}:any)=>{
    return(
      <>
          <Grid container sx={{alignItems:'center'}}>
          <TextField type="date" id="assign" value={courierdate} onChange={event =>setCourierDate(event.target.value)} size="small" fullWidth/>
          </Grid> 
      </>
    )
  }

export default UpdateAssetComponent;
