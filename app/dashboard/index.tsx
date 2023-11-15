"use client"
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import moment from "moment";
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import "react-big-calendar/lib/css/react-big-calendar.css";


// const localizer = momentLocalizer(moment);

const localizer = dayjsLocalizer(dayjs)

const useStyles = makeStyles({
    paper: {
        paddingRight:'0.6rem',paddingTop:'0.6rem',paddingBottom:'0.3rem',
        background: "#f8fafc",
        border:'1px solid #f1f5f9',
        cursor:'pointer',
        height:'14.5vh',
        "&:hover": {
            boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            cursor:'pointer'
        },
    },
    divIcon: {
        borderRadius:'5px',background:'#3b82f6',height:'3vh',width:'45%',
        marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
        paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',color:'white',
        transition: "width 2s, height 2s, transform 2s",
        "&:hover": {
            borderRadius:'5px',background:'#1e40af',height:'3vh',width:'45%',
            marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
            paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',transform: "rotate(180deg)",
        },
    },
    divIcon2: {
        borderRadius:'5px',background:'#991b1b',height:'3vh',width:'45%',
        marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
        paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',color:'white',
        transition: "width 2s, height 2s, transform 2s",
        "&:hover": {
            borderRadius:'5px',background:'#450a0a',height:'3vh',width:'45%',
            marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
            paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',transform: "rotate(180deg)",
            
            
        },
    },
    divIcon3: {
        borderRadius:'5px',background:'#86198f',height:'3vh',width:'45%',
        marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
        paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',color:'white',
        transition: "width 2s, height 2s, transform 2s",
        "&:hover": {
            borderRadius:'5px',background:'#701a75',height:'3vh',width:'45%',
            marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
            paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',transform: "rotate(180deg)",
            
            
        },
    },
    assetvalue: {
        paddingRight:'0.6rem',paddingTop:'0.6rem',paddingBottom:'0.3rem',
        background: "#f8fafc",
        border:'1px solid #f1f5f9',
        cursor:'pointer',
        height:'56vh',
    },
  });
  
const DashboardPage = () => {
    const classes = useStyles();
    
  return (
    <div>
        <Box>
            <Grid container sx={{padding:'0.7rem',alignItems:'center'}}>
                <Grid item xs={9} sx={{display:'flex',alignItems:'center'}} >
                    <Typography fontSize={"1.8rem"} style={{fontWeight:'normal',color:'#1e293b'}}>Dashboard <span style={{fontSize:'1rem'}}>dashboard & statistics</span></Typography>
                </Grid>
                <Grid item xs={3} sx={{display:'flex',justifyContent:'flex-end'}}>
                    <Link href="/setup" passHref style={{ textDecoration: "none" }}>
                    <Button variant="outlined" style={{textTransform:'capitalize',color:'#1e293b',border:'1px solid #1e293b'}} endIcon={<SettingsIcon />}>Manage Dashboard</Button>
                    </Link>
                </Grid>
               
               <Grid container spacing={1}>
               <Grid item xs={3} mt={1.5}>
                    <Paper className={classes.paper} elevation={0} >
                       <Grid container> 
                       <Grid item xs={4}>
                       <div className={classes.divIcon}> <SettingsIcon style={{fontSize:'1rem',marginTop:'-1rem'}}/></div>
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
                <Grid item xs={3} mt={1.5}>
                    <Paper className={classes.paper} elevation={0} >
                       <Grid container> 
                       <Grid item xs={4}>
                       <div className={classes.divIcon2}><EqualizerIcon style={{fontSize:'1rem',marginTop:'-1rem'}}/></div>
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
                <Grid item xs={3} mt={1.5}>
                    <Paper className={classes.paper} elevation={0} >
                       <Grid container> 
                       <Grid item xs={4}>
                       <div className={classes.divIcon3}><ShoppingCartIcon style={{fontSize:'1rem',marginTop:'-1rem'}}/></div>
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
               <Grid container spacing={1} mt={0.1}>
                <Grid item xs={5}>
                    <Paper elevation={0} className={classes.assetvalue}>
                        <Typography sx={{paddingLeft:'1rem'}} fontSize={"1rem"} fontWeight={"bold"}>Asset Value <span style={{fontWeight:'normal',fontSize:'0.8rem'}}>by Category</span></Typography>
                        <Divider style={{width:'100%',paddingLeft:'0.5rem',marginTop:'0.5rem'}}/>
                    </Paper>
                </Grid>
                <Grid item xs={7}>
                    <Paper elevation={0} className={classes.assetvalue}>
                        <Grid container>
                            <Grid item xs={6}>
                            <Typography sx={{paddingLeft:'1rem'}} fontSize={"1rem"} fontWeight={"bold"}>Alerts</Typography>
                            </Grid>
                            <Grid item xs={6} style={{display:'flex'}}>
                                <div style={{background:"#3b82f6",color:'white',padding:'0.4rem',borderRadius:'5px',fontSize:'0.7rem'}}>Assets Due</div>
                                <div style={{background:"#a21caf",marginLeft:'0.7rem',color:'white',padding:'0.4rem',borderRadius:'5px',fontSize:'0.7rem'}}>Maintenance Due</div>
                                <div style={{background:"#ef4444",marginLeft:'0.7rem',color:'white',padding:'0.4rem',borderRadius:'5px',fontSize:'0.7rem'}}>Warranty Expiring</div>
                            </Grid>
                            <Grid item xs={11.75} mt={0.5} sx={{display:"flex",justifyContent:'flex-end'}}>
                            <div style={{textAlign:'center',width:'17%',background:"#facc15",marginLeft:'0.7rem',color:'white',padding:'0.4rem',borderRadius:'5px',fontSize:'0.7rem'}}>Lease Expiring</div>
                            </Grid>
                        </Grid>
                        <Divider style={{width:'100%',paddingLeft:'0.5rem',marginTop:'0.3rem'}}/>
                        <Calendar
                            localizer={localizer}
                            //   events={myEventsList}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 233,marginLeft:'0.6rem',marginTop:'0.3rem' }}
                            />
                    </Paper>
                </Grid>
            </Grid>              
            </Grid>

            
        </Box>
    </div>
  )
}

export default DashboardPage
