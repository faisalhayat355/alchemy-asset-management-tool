"use client"
import { Box, Grid, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

const useStyles = makeStyles({
    typography: {
       fontFamily:"cursive",
       fontSize:'1.3rem'
    },
  });
  
const AssetCreatePage = () => {
    const classes = useStyles();
  const [inputData, setInputData] = useState({assettagid:"",purchasefrom:"",purchasedate:"",mobile:"",address:"",description:"",brand:"",cost:"",model:"",serialno:"",site:"",category:"",location:"",department:"",processor:"",ram:"",status:"",});
  // const [ram,setRam]=useState()
  const router = useRouter()
  const [data, setData] = useState([]);

  async function fetchData() {
      const users = await fetch("http://localhost:8000/users");
      const result = await users.json();
      setData(result);
    }
    useEffect(() => {
      fetchData();
    }, []);
    let length = data.length;
  function handleSubmit(event:any) {
    event.preventDefault();
    axios
      .post("http://localhost:8000/users", inputData)
      .then((res) => {
        alert("Data Submited Successfully");
        router.push('/assets/listofassets', { scroll: false })
      })
      .catch((err) => console.log(err));
  }
  
  return (
  <div>
    <form onSubmit={handleSubmit}>
     <Box >
      <Grid container sx={{paddingLeft:'1rem',paddingTop:"0.5rem",paddingBottom:'0.5rem'}}>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} className={classes.typography}>Asset Details</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #f87171',paddingLeft:'2rem',paddingTop:'0.8rem',paddingBottom:'0.7rem',width:'97%',marginLeft:'1.3rem',alignItems:'center',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        <Grid item xs={6} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Asset Tag ID <span style={{color:'red'}}>*</span></Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic" fullWidth size='small'
            value={length+1} disabled/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Description <span style={{color:'red'}}>*</span></Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, description: e.target.value })}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={0.6}>
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Purchased from</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, purchasefrom: e.target.value })}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Purchased Date</Typography>
            </Grid>
            <Grid item xs={8}>
             <input type="date" id="birthday" name="birthday" style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}
             onChange={(e) => setInputData({ ...inputData, purchasedate: e.target.value })}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3}>
            <Typography>Cost</Typography>
            </Grid>
            <Grid item xs={8}>
            <FormControl fullWidth sx={{ m: 1 }}>
          <OutlinedInput startAdornment={<InputAdornment position="start">₹</InputAdornment>} fullWidth size='small'
           onChange={(e) => setInputData({ ...inputData, cost: e.target.value })}/>
        </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Model</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, model: e.target.value })}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Brand</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, brand: e.target.value })}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Serial No.</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, serialno: e.target.value })}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Processor</Typography>
            </Grid>
            <Grid item xs={8}>
              <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}  onChange={(e) => setInputData({ ...inputData, processor: e.target.value })}>
                <option>Select Processor</option>
                <option>Pentium</option>
                <option>Dual Core</option>
                <option>Core i3</option>
                <option>Core i5</option>
                <option>Core i7</option>
                <option>Core i9</option>
              </select>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Ram</Typography>
            </Grid>
            <Grid item xs={8}>
              <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}  onChange={(e) => setInputData({ ...inputData, ram: e.target.value })}>
                <option>Select Ram</option>
                <option>4 GB</option>
                <option>8 GB</option>
                <option>16 GB</option>
              </select>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
     </Box>
     <Box>
      <Grid container sx={{paddingLeft:'1rem',paddingTop:'0.5rem',paddingBottom:'0.5rem',marginTop:'0.3rem'}}>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} className={classes.typography}>Site, Location, Category and Department</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #f87171',paddingLeft:'2rem',paddingTop:'0.8rem',paddingBottom:'0.7rem',width:'97%',marginLeft:'1.3rem',alignItems:'center',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        <Grid item xs={6} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Site</Typography>
            </Grid>
            <Grid item xs={8}>
             <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}  onChange={(e) => setInputData({ ...inputData, site: e.target.value })}>
                <option>Select Site</option>
                <option>Alchemy</option>
                <option>External-Client</option>
              </select>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Location</Typography>
            </Grid>
            <Grid item xs={8}>
             <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}  onChange={(e) => setInputData({ ...inputData, location: e.target.value })}>
                <option>Select Location</option>
                <option>Banglore</option>
                <option>Noida</option>
              </select>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Category</Typography>
            </Grid>
            <Grid item xs={8}>
            <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}  onChange={(e) => setInputData({ ...inputData, category: e.target.value })}>
                <option>Select Category</option>
                <option>External</option>
                <option>External-Client</option>
                <option>Internal</option>
                <option>Returned</option>
                <option>Store-Room</option>
              </select>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Department</Typography>
            </Grid>
            <Grid item xs={8}>
              <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}  onChange={(e) => setInputData({ ...inputData, department: e.target.value })}>
                <option>Select Department</option>
                <option>Accounts</option>
                <option>Admin</option>
                <option>HR</option>
                <option>Developer</option>
                <option>Manager</option>
                <option>Recruiter</option>
              </select>

            </Grid>
          </Grid>
        </Grid>
      <Grid container sx={{display:'flex',justifyContent:'flex-end',marginTop:'0.7rem'}}>
        <Grid item xs={2.5} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={5.2}>
            <Link href="/assets/listofassets" passHref style={{ textDecoration: "none" }}>
            <button style={{cursor:'pointer',background:'#f87171',color:'white',width:'90%',border:'none',height:'5vh',borderRadius:'5px'}}> Cancel</button>
            </Link>
            </Grid>
            <Grid item xs={3.7}>
            <button style={{cursor:'pointer',background:'#f87171',color:'white',width:'130%',border:'none',height:'5vh',borderRadius:'5px'}}> Save</button>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
     </Box>
     </form>
  </div>
  )
}

export default AssetCreatePage
