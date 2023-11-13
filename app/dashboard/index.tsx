"use client"
import { Box, Button, Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const useStyles = makeStyles({
    paper: {
        paddingRight:'0.6rem',paddingTop:'0.6rem',paddingBottom:'0.3rem',
        background: "#f8fafc",
        border:'1px solid #f1f5f9',
        cursor:'pointer',
        height:'13vh',
        "&:hover": {
            boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            cursor:'pointer'
            
        },
    },

    divIcon: {
        borderRadius:'5px',background:'#3b82f6',height:'3vh',width:'30%',
        marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
        paddingLeft:'1rem',paddingRight:'1rem',paddingBottom:'1rem',color:'white',
        "&:hover": {
            borderRadius:'5px',background:'#1e40af',height:'3vh',width:'30%',
            marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
            paddingLeft:'1rem',paddingRight:'1rem',paddingBottom:'1rem',
            
            
        },
    },

    divIcon2: {
        borderRadius:'5px',background:'#991b1b',height:'3vh',width:'30%',
        marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
        paddingLeft:'1rem',paddingRight:'1rem',paddingBottom:'1rem',color:'white',
        "&:hover": {
            borderRadius:'5px',background:'#450a0a',height:'3vh',width:'30%',
            marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
            paddingLeft:'1rem',paddingRight:'1rem',paddingBottom:'1rem',
            
            
        },
    },
  });
  
const DashboardPage = () => {
    const classes = useStyles();
    
  return (
    <div>
        <Box>
            <Grid container sx={{padding:'1rem',alignItems:'center'}}>
                <Grid item xs={9} sx={{display:'flex',alignItems:'center'}} >
                    <Typography fontSize={"1.8rem"} style={{fontWeight:'normal',color:'#1e293b'}}>Dashboard <span style={{fontSize:'1rem'}}>dashboard & statistics</span></Typography>
                </Grid>
                <Grid item xs={3} sx={{display:'flex',justifyContent:'flex-end'}}>
                    <Link href="/setup" passHref style={{ textDecoration: "none" }}>
                    <Button variant="outlined" style={{textTransform:'capitalize',color:'#1e293b',border:'1px solid #1e293b'}} endIcon={<SettingsIcon />}>Manage Dashboard</Button>
                    </Link>
                </Grid>
               
               <Grid container spacing={1}>
               <Grid item xs={3} mt={3}>
                    <Paper className={classes.paper} elevation={0} >
                       <Grid container> 
                       <Grid item xs={4}>
                       <div  className={classes.divIcon}>
                            <SettingsIcon/>
                       </div>
                       </Grid>
                        <Grid item xs={8} sx={{display:'flex',justifyContent:'flex-end'}}>
                        <Typography fontSize={"0.9rem"}>Number of Active Asset</Typography>
                        </Grid>
                        <Grid item xs={11.8} sx={{display:'flex',justifyContent:'flex-end'}}>
                        <Typography fontSize={"1.5rem"}>0</Typography>
                        </Grid>
                       </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3} mt={3}>
                    <Paper className={classes.paper} elevation={0} >
                       <Grid container> 
                       <Grid item xs={4}>
                       <div  className={classes.divIcon2}>
                            <EqualizerIcon/>
                       </div>
                       </Grid>
                        <Grid item xs={8} sx={{display:'flex',justifyContent:'flex-end'}}>
                        <Typography fontSize={"0.9rem"}>Value of Assets</Typography>
                        </Grid>
                        <Grid item xs={11.8} sx={{display:'flex',justifyContent:'flex-end'}}>
                        <Typography fontSize={"1.5rem"}>$0</Typography>
                        </Grid>
                       </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3} mt={3}>
                    <Paper className={classes.paper} elevation={0} >
                       <Grid container> 
                       <Grid item xs={4}>
                       <div  className={classes.divIcon}>
                            <ShoppingCartIcon/>
                       </div>
                       </Grid>
                        <Grid item xs={8} sx={{display:'flex',justifyContent:'flex-end'}}>
                        <Typography fontSize={"0.9rem"}>Purchases in Fiscal Year</Typography>
                        </Grid>
                        <Grid item xs={11.8} sx={{display:'flex',justifyContent:'flex-end'}}>
                        <Typography fontSize={"1.5rem"}>0</Typography>
                        </Grid>
                        <Grid item xs={11.8} sx={{display:'flex',justifyContent:'flex-end'}}>
                        <Typography fontSize={"0.9rem"}>0 Assets</Typography>
                        </Grid>
                       </Grid>
                    </Paper>
                </Grid>
               </Grid>

                
            </Grid>
        </Box>
    </div>
  )
}

export default DashboardPage
