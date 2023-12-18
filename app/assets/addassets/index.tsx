"use client"
import React, { useState } from 'react'
import { Alert, Box, Button, Grid, Snackbar, TextField, Typography } from '@mui/material'
import postService from '../addassets/services/assetPostService'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AssetCreatePage = () => {
const [assettagid,setAssetTagId] = useState('')
const [description,setDescription] = useState('')
const [purchasefrom,setPurchaseFrom] = useState('')
const [purchasedate,setPurchaseDate] = useState('')
const [cost,setCost] = useState('')
const [model,setModel] = useState('')
const [brand,setBrand] = useState('')
const [serialno,setSerialNo] = useState('')
const [processor,setProcessor] = useState('')
const [ram,setRam] = useState('')
const [disktype,setDiskType] = useState('')
const [status,setStatus] = useState('UnAssign')
const [remarks,setRemarks] = useState('')
const [image,setImage] = useState('')

const [message,setMessage] = useState('')
const router = useRouter()

const handleSubmit = async (event:any)=>{
    event.preventDefault();
    const formData = new FormData ();
    formData.append('assettagid',assettagid);
    formData.append('description',description);
    formData.append('brand',brand);
    formData.append('serialno',serialno);
    formData.append('model',model);
    formData.append('cost',cost);
    formData.append('status',status);
    formData.append('processor',processor);
    formData.append('ram',ram);
    formData.append('purchasedate',purchasedate);
    formData.append('purchasefrom',purchasefrom);
    formData.append('disktype',disktype);
    formData.append('remarks',remarks);
    formData.append('image',image);

    const response = await postService.create(formData);

    if (response.data.success  ==true){
        alert("Asset Created Successfully")
    } else{
        setMessage("Post Failed")
    }

    setTimeout(function(){
        setMessage('');
    },2000)
    event.target.reset();
    router.push('/assets/listofassets', { scroll: false })
}


return (
    <div>
      <Grid container>
        <Grid item xs={12}>
        <Typography style={{fontFamily:"cursive", fontSize:'1.3rem'}}>Asset Details</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
          <Box style={{marginTop:'1.2rem'}}>
            <Grid container spacing={2} sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #1F7DA9',paddingLeft:'2rem',paddingTop:'0.8rem',paddingBottom:'1rem',width:'96%',marginLeft:'1.3rem',alignItems:'center',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography> Asset Tag ID</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='text' name='assettagid' placeholder='Enter Asset Tag ID' 
                        onChange={event => setAssetTagId(event.target.value)} required />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Description</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small'fullWidth type='text' name='description' placeholder='Enter Description' 
                        onChange={event => setDescription(event.target.value)} required />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Purchased From</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='text' name='purchasefrom' placeholder='Enter Purchased From' 
                        onChange={event => setPurchaseFrom(event.target.value)} required/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Purchased Date</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='date' name='purchasedate' onChange={event => setPurchaseDate(event.target.value)} required/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Cost</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='text' name='cost' placeholder='Enter Cost' 
                        onChange={event => setCost(event.target.value)} required/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Model</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='text' name='position' placeholder='Enter Model' 
                        onChange={event => setModel(event.target.value)} required/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Brand</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='text' name='position' placeholder='Enter Brand' 
                        onChange={event => setBrand(event.target.value)} required/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Serial No.</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='text' name='position' placeholder='Enter Serial No.' 
                        onChange={event => setSerialNo(event.target.value)} required/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Processor</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}   name="department"
                        value={processor} onChange={(e) => {setProcessor(e.target.value);}}>
                        <option>Select Processor</option>
                        <option>Pentium</option>
                        <option>Core I3</option>
                        <option>Core I5</option>
                        <option>Core I7</option>
                        <option>Core I9</option>
                        </select>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Ram</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}   name="department"
                        value={ram} onChange={(e) => {setRam(e.target.value);}}>
                        <option>Select Ram</option>
                        <option>4 GB</option>
                        <option>8 GB</option>
                        <option>16 GB</option>
                        </select>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Disk Type</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}} name="department"
                        value={disktype} onChange={(e) => {setDiskType(e.target.value);}}>
                        <option>Select Disk Type</option>
                        <option>HDD</option>
                        <option>SSD</option>
                        </select>
                    </Grid>
                </Grid>
            </Grid>
          
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                        <Typography>Remarks</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Typography>:</Typography>
                    </Grid>
                    <Grid item xs={6.5}>
                        <TextField size='small' fullWidth type='text' name='remarks' placeholder='Enter Remarks' 
                        onChange={event => setRemarks(event.target.value)} required/>
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
            <Grid item xs={6}>
                <Grid container alignItems={"center"}>
                   
                    <Grid item xs={6.5}>
                        <select value={status} onChange={(e) => {setStatus(e.target.value);}} style={{width:"100%",height:'6.2vh',border:'1px solid white',borderRadius:'4px',padding:'0.4rem',color:'white'}} disabled>
                            <option>UnAssign</option>
                        </select>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                
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

export default AssetCreatePage
