"use client"
import React, {useState} from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { Box, Grid, Typography,TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    typography: {
       fontFamily:"cursive",
       fontSize:'1.3rem'
    },
  });
  
const AddEmployeeManagement = () => {
  const router = useRouter()
  const classes = useStyles();
  const [employeeid, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [site, setSite] = useState("");
  const [projectName, setProjectName] = useState("");
  const [client, setClient] = useState("");
  const [location, setLocation] = useState("");
  const [sbuHead, setSbuHead] = useState("");
  const [clientLob, setClientLob] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [address, setAddress] = useState("");
  const [selected,setSelected]=useState("")

  function handleSaveData() {
    let data = {
      employeeid,
      name,
      email,
      mobile,
      position,
      site,
      projectName,
      client,
      location,
      sbuHead,
      clientLob,
      workLocation,
      address,
      department,
    };
    // console.warn(data);
    fetch("http://localhost:8000/employeeManagement", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      // console.warn("resp",resp);;
      resp.json().then((result) => {
        console.warn("result", result);
      });
      router.push('/employeemanagement', { scroll: false })
    });
  }
  const handleChange=(e:any)=>{
    setSelected(e.target.value)
    setSite(e.target.value)
  }
  return (
    <div>
     <Box>
      <Grid container sx={{paddingLeft:'1rem',paddingTop:"0.5rem",paddingBottom:'0.5rem'}}>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} className={classes.typography}>Add Employee Details</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #1F7DA9',paddingLeft:'2rem',paddingTop:'0.8rem',paddingBottom:'6rem',width:'96%',marginLeft:'1.3rem',alignItems:'center',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        <Grid item xs={12} lg={6} md={12} sm={12} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Employee ID <span style={{color:'red'}}>*</span></Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small' name="employeeid" value={employeeid} onChange={(e) => {setEmployeeId(e.target.value);}}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} md={12} sm={12} mt={0.6}>
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Name</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
             name="name" value={name} onChange={(e) => {setName(e.target.value);}}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} md={12} sm={12} mt={1}>
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Email</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
             name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} md={12} sm={12} mt={1}>
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Contact No.</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
            name="mobile" value={mobile} onChange={(e) => {setMobile(e.target.value);}}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} md={12} sm={12} mt={1}>
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Position</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small'
            name="position" value={position} onChange={(e) => {setPosition(e.target.value);}}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} md={12} sm={12} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Department</Typography>
            </Grid>
            <Grid item xs={8}>
             <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}   name="department"
                value={department} onChange={(e) => {setDepartment(e.target.value);}}>
                <option>Select Department</option>
                <option>Admin</option>
                <option>HR</option>
                <option>Accounts</option>
                <option>Developer</option>
                <option>Recruiter</option>
                <option>Manager</option>
              </select>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} md={12} sm={12} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Site</Typography>
            </Grid>
            <Grid item xs={8} >
            <select value={selected} onChange={(e)=>handleChange(e)} style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
              <option>Select Site</option>
              <option>Alchemy Internal</option>
              <option>Alchemy External</option>
            </select>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} md={12} sm={12} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Project Name</Typography>
            </Grid>
            <Grid item xs={8}>
            {selected == "Alchemy External"? <AlchemyExternal projectName={projectName} setProjectName={setProjectName}/>:<AlchemyInternal/> }
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} md={12} sm={12} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Clients</Typography>
            </Grid>
            <Grid item xs={8}>
            {selected == "Alchemy External"? <AlchemyExternalClient client={client} setClient={setClient}/>:<AlchemyInternal/> }
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} md={12} sm={12} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Location</Typography>
            </Grid>
            <Grid item xs={8}>
            {selected == "Alchemy External"? <AlchemyExternalLocation location={location} setLocation={setLocation}/>:<AlchemyInternal/> }
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={6} md={12} sm={12} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>SBU Head</Typography>
            </Grid>
            <Grid item xs={8}>
            {selected == "Alchemy External"? <AlchemySBUHead location={location} setSbuHead={setSbuHead}/>:<AlchemyInternal/> }
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} md={12} sm={12} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Clients Lob</Typography>
            </Grid>
            <Grid item xs={8}>
            {selected == "Alchemy External"? <AlchemyClientLob clientLob={clientLob} setClientLob={setClientLob}/>:<AlchemyInternal/> }
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} md={12} sm={12} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Work Location</Typography>
            </Grid>
            <Grid item xs={8}>
              <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}} 
                name="workLocation" value={workLocation} onChange={(e) => {setWorkLocation(e.target.value);}}>
                  <option>Select Work Location</option>
                  <option>Work from Home</option>
                  <option>Work from Office</option>
              </select>
               {/* {selected == "Alchemy External"? <AlchemyExternalWorkLocation workLocation={workLocation} setWorkLocation={setWorkLocation}/>:<AlchemyInternal/> } */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} md={12} sm={12} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={3.2}>
            <Typography>Address</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField id="outlined-basic"  fullWidth size='small' name="address" 
                value={address} onChange={(e) => {setAddress(e.target.value);}}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={7}>
          <Grid item xs={12} >
            <Grid container >
              <Grid item lg={7.6} xs={7.5} sm={7.2} md={7.5}>
              </Grid>
              <Grid item xs={4}>
                <Grid container>
                  <Grid item xs={6.4}>
                  <Link href="/employeemanagement" passHref style={{ textDecoration: "none" }}>
                  <button style={{fontWeight:'bold',fontSize:'0.9rem',cursor:'pointer',background:'#1F7DA9',color:'white',width:'94%',border:'none',height:'6vh',borderRadius:'5px'}}>Cancel</button>
                  </Link>
                  </Grid>
                  <Grid item xs={5.6}>
                  <button style={{cursor:'pointer',fontWeight:'bold',fontSize:'0.9rem',background:'#1F7DA9',color:'white',width:'99%',border:'none',height:'6vh',borderRadius:'5px'}} onClick={handleSaveData}>Save</button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
     </Box>
  </div>
  )
}
    const AlchemyInternal =()=>{
      return(
        <>
        <select disabled style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
        </select>
        </>
      )
    }
    const AlchemyExternal =({projectName,setProjectName}:any)=>{
      return(
        <>
        <select value={projectName} onChange={(e) => {setProjectName(e.target.value);}} style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
          <option>Select Project Name</option>
          <option>Nagios</option>
          <option>Asset Management Tool</option>
        </select>
        </>
      )
    }
    const AlchemyExternalClient =({client,setClient}:any)=>{
      return(
        <>
        <select value={client} onChange={(e) => {setClient(e.target.value);}} style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
          <option>Select Client</option>
          <option>HCL</option>
          <option>TCS</option>
        </select>
        </>
      )
    }
    const AlchemyExternalLocation =({location,setLocation}:any)=>{
      return(
        <>
        <select value={location} onChange={(e) => {setLocation(e.target.value);}} style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
          <option>Select Location</option>
          <option>Hyderabad</option>
          <option>Pune</option>
        </select>
        </>
      )
    }
    const AlchemySBUHead =({sbuHead,setSbuHead}:any)=>{
      return(
        <>
        <select value={sbuHead} onChange={(e) => {setSbuHead(e.target.value);}} style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
          <option>Select SBU Head</option>
          <option>ARINDAM BANARJEE</option>
          <option>KUSHAGRA DHAR</option>
          <option>SANJANA WADHWA</option>
        </select>
        </>
      )
    }
    const AlchemyClientLob =({clientLob,setClientLob}:any)=>{
      return(
        <>
        <select value={clientLob} onChange={(e) => {setClientLob(e.target.value);}} style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
          <option>Select Client Lob</option>
          <option>ENTERPRISE ACCOUNTS - (BPO)</option>
          <option>ENTERPRISE ACCOUNTS - (IT-SI)</option>
          <option>STRATEGIC ACCOUNTS - (CAPTIVE)</option>
          <option>TECH SOLUTIONS - (CPS)</option>
          <option>TECH SOLUTIONS - (MANAGED SERVICES)</option>
        </select>
        </>
      )
    }
export default AddEmployeeManagement
