"use client"
import React, { useState } from 'react'
import { Alert, Box, Button, Grid, Snackbar, TextField, Typography } from '@mui/material'
import postService from '../services/postService'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AddEmployeeManagement = () => {
// const [id,setId] = useState('')
const [disktype,setDiskType] = useState('')
const [employeeId,setEmployeeId] = useState('')
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [mobile,setMobile] = useState('')
const [position,setPosition] = useState('')
const [department,setDepartment] = useState('')
const [site,setSite] = useState('')
const [projectName,setProjectName] = useState('')
const [clients,setClients] = useState('')
const [location,setLocation] = useState('')
const [sbuHead,setSubHead] = useState('')
const [clientsLob,setClientsLob] = useState('')
const [workLocation,setWorkLocation] = useState('')
const [address,setAddress] = useState('')
const [image,setImage] = useState('')
const [message,setMessage] = useState('')
const [selected,setSelected]=useState("")
const router = useRouter()

const handleSubmit = async (event)=>{
    event.preventDefault();
    const formData = new FormData ();
    // formData.append('id',id);
    formData.append('employeeId',employeeId);
    formData.append('name',name);
    formData.append('email',email);
    formData.append('mobile',mobile);
    formData.append('position',position);
    formData.append('department',department);
    formData.append('site',site);
    formData.append('projectName',projectName);
    formData.append('clients',clients);
    formData.append('location',location);
    formData.append('sbuHead',sbuHead);
    formData.append('clientsLob',clientsLob);
    formData.append('workLocation',workLocation);
    // formData.append('disktype',disktype);
    formData.append('address',address);
    formData.append('image',image);

    const response = await postService.create(formData);

    if (response.data.success  ==true){
        alert("Employee Created Successfully")
    } else{
        setMessage("Post Failed")
    }
    setTimeout(function(){
        setMessage('');
    },2000)
    event.target.reset();
    router.push('/employeemanagement', { scroll: false })
}

const handleChange=(e:any)=>{
    setSelected(e.target.value)
    setSite(e.target.value)
  }

return (
    <div>
      <Grid container>
        <Grid item xs={12}>
        <Typography style={{fontFamily:"cursive", fontSize:'1.3rem'}}>Add Employee Details</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
          <Box style={{marginTop:'1.5rem'}}>
            <Grid container spacing={2} sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #1F7DA9',paddingLeft:'2rem',paddingTop:'0.8rem',paddingBottom:'3.5rem',width:'96%',marginLeft:'1.3rem',alignItems:'center',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
            {/* <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography> Disk</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='text' name='disktype' placeholder='Enter Disk' 
                        onChange={event => setDiskType(event.target.value)} required />
                    </Grid>
                </Grid>
            </Grid> */}
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Employee ID</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small'fullWidth type='text' name='employeeId' placeholder='Enter Your Employee ID' 
                        onChange={event => setEmployeeId(event.target.value)} required />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Name</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='text' name='name' placeholder='Enter Your Full Name' 
                        onChange={event => setName(event.target.value)} required/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Email</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='text' name='email' placeholder='Enter Your Email' 
                        onChange={event => setEmail(event.target.value)} required/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Mobile</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='text' name='mobile' placeholder='Enter Your Mobile Number' 
                        onChange={event => setMobile(event.target.value)} required/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Position</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='text' name='position' placeholder='Enter Your Position' 
                        onChange={event => setPosition(event.target.value)} required/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Department</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        {/* <TextField size='small' fullWidth type='text' name='department' placeholder='Enter Your Department' 
                        onChange={event => setDepartment(event.target.value)} required/> */}
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
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Site</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        {/* <TextField size='small' fullWidth type='text' name='site' placeholder='Enter Your Site' 
                        onChange={event => setSite(event.target.value)} required/> */}
                        <select value={selected} onChange={(e)=>handleChange(e)} style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
                            <option>Select Site</option>
                            <option>Alchemy Internal</option>
                            <option>Alchemy External</option>
                        </select>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Project Name</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        {/* <TextField size='small' fullWidth type='text' name='projectName' placeholder='Enter Your ProjectName' 
                        onChange={event => setProjectName(event.target.value)} required/> */}
                    {selected == "Alchemy External"? <AlchemyExternal projectName={projectName} setProjectName={setProjectName}/>:<AlchemyInternal site={site} setSite={setSite}/> }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Clients</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        {/* <TextField size='small' fullWidth type='text' name='clients' placeholder='Enter  Clients' 
                        onChange={event => setClients(event.target.value)} required/> */}
                        {/* {selected == "Alchemy External"? <AlchemyExternalClient clients={clients} setClient={setClients}/>:<AlchemyInternal site={site} setSite={setSite}/> } */}
                        {selected == "Alchemy External"? <AlchemyExternalClient clients={clients} setClients={setClients}/>:<AlchemyInternal site={site} setSite={setSite}/> }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Location</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        {/* <TextField size='small' fullWidth type='text' name='location' placeholder='Enter Your Location' 
                        onChange={event => setLocation(event.target.value)} required/> */}
                        {selected == "Alchemy External"? <AlchemyExternalLocation location={location} setLocation={setLocation}/>:<AlchemyInternal site={site} setSite={setSite}/> }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>SBU Head</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        {/* <TextField size='small' fullWidth type='text' name='sbuHead' placeholder='Enter SBU Head' 
                        onChange={event => setSubHead(event.target.value)} required/> */}
                         {selected == "Alchemy External"? <AlchemySBUHead location={location} setSubHead={setSubHead}/>:<AlchemyInternal site={site} setSite={setSite}/> }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Clients LOB</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        {/* <TextField size='small' fullWidth type='text' name='clientsLob' placeholder='Enter Clients LOB' 
                        onChange={event => setClientsLob(event.target.value)} required/> */}
                        {selected == "Alchemy External"? <AlchemyClientLob clientsLob={clientsLob} setClientsLob={setClientsLob}/>:<AlchemyInternal site={site} setSite={setSite}/> }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Work Location</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        {/* <TextField size='small' fullWidth type='text' name='workLocation' placeholder='Enter Work Location' 
                        onChange={event => setWorkLocation(event.target.value)} required/> */}
                        <select name='workLocation' onChange={event => setWorkLocation(event.target.value)} required style={{width:'100%',height:'38px',border:'1px solid #94a3b8',borderRadius:'5px'}}>
                            <option>Work From Office</option>
                            <option>Work From Home</option>
                        </select>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Address</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='text' name='address' placeholder='Enter Your Address' 
                        onChange={event => setAddress(event.target.value)} required/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Image</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='file' name='image' 
                        onChange={event => setImage(event.target.files[0])} required/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} >
                <Grid container>
                    <Grid item xs={11.5} style={{display:'flex',justifyContent:'flex-end'}}>
                        <Link href="/employeemanagement/" passHref style={{ textDecoration: "none" }}>
                        <Button variant='contained' size='small' style={{marginRight:'5.6rem',width:'75%',height:'40px'}}>Cancel</Button>
                        </Link>
                        <Button variant='contained' size='small' style={{width:'25%'}} type='submit'>Save</Button>
                    </Grid>
                </Grid>
            </Grid>
            </Grid> 
          </Box>
      </form>
    </div>
  )
}

const AlchemyInternal = ({site,setSite}:any)=>{
    return(
      <>
      <select name='projectName' value={site} onChange={(e) => {setSite(e.target.value);}} disabled style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
      </select>
      </>
    )
  }
  const AlchemyExternal =({projectName,setProjectName}:any)=>{
    return(
      <>
      <select name='projectName' value={projectName} onChange={(e) => {setProjectName(e.target.value);}} style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
        <option>Select Project Name</option>
        <option>Nagios</option>
        <option>Asset Management Tool</option>
      </select>
      </>
    )
  }
  const AlchemyExternalClient =({clients,setClients}:any)=>{
    return(
      <>
      <select name='clients' value={clients} onChange={(e) => {setClients(e.target.value);}} style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
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
      <select name='location' value={location} onChange={(e) => {setLocation(e.target.value);}} style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
        <option>Select Location</option>
        <option>Hyderabad</option>
        <option>Pune</option>
      </select>
      </>
    )
  }
  const AlchemySBUHead =({sbuHead,setSubHead}:any)=>{
    return(
      <>
      <select name='sbuHead' value={sbuHead} onChange={(e) => {setSubHead(e.target.value);}} style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
        <option>Select SBU Head</option>
        <option>ARINDAM BANARJEE</option>
        <option>KUSHAGRA DHAR</option>
        <option>SANJANA WADHWA</option>
      </select>
      </>
    )
  }
  const AlchemyClientLob =({clientsLob,setClientsLob}:any)=>{
    return(
      <>
      <select name='clientsLob' value={clientsLob} onChange={(e) => {setClientsLob(e.target.value);}} style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
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
