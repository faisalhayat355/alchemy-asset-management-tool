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
  
const AddEmployeeManagement = () => {
  const classes = useStyles();
  const [inputData, setInputData] = useState({employeeid:"",name:"",department:"",position:"",employementType:"",location:"",email:""});
  // const [ram,setRam]=useState()
  const router = useRouter()
  const [data, setData] = useState([]);

  async function fetchData() {
      const users = await fetch("http://localhost:8000/employeeManagement");
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
      .post("http://localhost:8000/employeeManagement", inputData)
      .then((res) => {
        alert("Data Submited Successfully");
        router.push('/assets/employeeManagement', { scroll: false })
      })
      
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
     <Box >
      <Grid container sx={{paddingLeft:'1rem',paddingTop:"0.5rem",paddingBottom:'0.5rem'}}>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} className={classes.typography}>Add Employee Details</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #f87171',paddingLeft:'2rem',paddingTop:'0.8rem',paddingBottom:'10.1rem',width:'97%',marginLeft:'1.3rem',alignItems:'center',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        {/* <Grid item xs={6} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Asset Tag ID <span style={{color:'red'}}>*</span></Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, assettagid: e.target.value })}/>
            </Grid>
          </Grid>
        </Grid> */}
        <Grid item xs={6} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Employee ID <span style={{color:'red'}}>*</span></Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, employeeid: e.target.value })}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={0.6}>
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Name</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, name: e.target.value })}/>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item xs={6} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Last Name</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, lastName: e.target.value })}/>
            </Grid>
          </Grid>
        </Grid> */}
        <Grid item xs={6} mt={1}>
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Email</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, email: e.target.value })}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={1}>
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Contact No.</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, email: e.target.value })}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={1}>
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Position</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, position: e.target.value })}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={1}>
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Department</Typography>
            </Grid>
            <Grid item xs={8}>
            {/* <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, department: e.target.value })}/> */}
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
        
        <Grid item xs={6} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Employement Type</Typography>
            </Grid>
            <Grid item xs={8}>
            <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}  onChange={(e) => setInputData({ ...inputData, employementType: e.target.value })}>
                <option>Select Type</option>
                <option>Alchemy Internal</option>
                <option>Alchemy External</option>
              </select>
            {/* <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, employementType: e.target.value })}/> */}
            
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Location</Typography>
            </Grid>
            <Grid item xs={8}>
            {/* <TextField id="outlined-basic"  fullWidth size='small'
            onChange={(e) => setInputData({ ...inputData, location: e.target.value })}/> */}
             <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}  onChange={(e) => setInputData({ ...inputData, location: e.target.value })}>
                <option>Select Location</option>
                <option>Banglore</option>
                <option>Noida</option>
                <option>Philippines</option>
              </select>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={5}>
          <Grid item xs={12} >
            <Grid container >
              <Grid item xs={7.6}>
              </Grid>
              <Grid item xs={4}>
                <Grid container>
                  <Grid item xs={6.4}>
                  <Link href="/assets/addassets/employeemanagement" passHref style={{ textDecoration: "none" }}>
                  <button style={{fontWeight:'bold',fontSize:'0.9rem',cursor:'pointer',background:'#f87171',color:'white',width:'94%',border:'none',height:'6vh',borderRadius:'5px'}}> Cancel</button>
                  </Link>
                  </Grid>
                  <Grid item xs={5.6}>
                  <button style={{cursor:'pointer',fontWeight:'bold',fontSize:'0.9rem',background:'#f87171',color:'white',width:'99%',border:'none',height:'6vh',borderRadius:'5px'}}> Save</button>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
     </Box>
   

     {/* <Box>
      <Grid container sx={{paddingLeft:'1rem',paddingTop:'0.5rem',paddingBottom:'0.5rem',marginTop:'0.3rem'}}>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} className={classes.typography}>Status</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #f87171',paddingLeft:'2rem',paddingTop:'0.8rem',paddingBottom:'0.7rem',width:'97%',marginLeft:'1.3rem',alignItems:'center',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
       <StatusTab/>
      
      </Grid>
     </Box> */}

     </form>
  </div>
  )
}

export default AddEmployeeManagement
