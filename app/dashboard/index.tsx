"use client"
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsIcon from '@mui/icons-material/Settings';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { IAssets } from '../assets/listofassets/models/assets.model';
const localizer = momentLocalizer(moment);

const useStyles = makeStyles({
    paper: {
        paddingRight:'0.6rem',paddingTop:'0.6rem',paddingBottom:'0.3rem',
        background: "#f8fafc",
        border:'1px solid #f1f5f9',
        cursor:'pointer',
        height:'15.5vh',
        marginTop:'0.5rem',
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
        borderRadius:'5px',background:'#a21caf',height:'3vh',width:'45%',
        marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
        paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',color:'white',
        transition: "width 2s, height 2s, transform 2s",
        "&:hover": {
            borderRadius:'5px',background:' #c026d3',height:'3vh',width:'45%',
            marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
            paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',transform: "rotate(180deg)",
            
            
        },
    },
    divIcon3: {
        borderRadius:'5px',background:' #ef4444 ',height:'3vh',width:'45%',
        marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
        paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',color:'white',
        transition: "width 2s, height 2s, transform 2s",
        "&:hover": {
            borderRadius:'5px',background:'#dc2626',height:'3vh',width:'45%',
            marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
            paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',transform: "rotate(180deg)",  
        },
    },

    divIcon4: {
        borderRadius:'5px',background:'#facc15',height:'3vh',width:'45%',
        marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'1rem',paddingTop:'0.7rem',
        paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',color:'white',
        transition: "width 2s, height 2s, transform 2s",
        "&:hover": {
            borderRadius:'5px',background:'#eab308',height:'3vh',width:'45%',
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
    typography: {
        fontFamily:"cursive",
        fontSize:'1.5rem'
     }
  });
  
const DashboardPage = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [newAsset,setNewAsset]=useState([])
    const [oldAsset,setOldAsset] = useState([])
    const [scrapAsset,setScrapAsset] = useState([])
    const [events, setEvents] = useState([]);

    async function fetchData() {
        const users = await fetch("http://localhost:8000/users");
        const result = await users.json();
        setData(result);
      }
      useEffect(() => {
        fetchData();
      }, []);
      let length = data.length;
      
      async function fetchNewData() {
        const users = await fetch("http://localhost:8000/newAsset");
        const result = await users.json();
        setNewAsset(result);
      }
      useEffect(() => {
        fetchNewData();
      }, []);
      let newAssetData = newAsset.length;

      async function fetchOldData() {
        const users = await fetch("http://localhost:8000/oldAsset");
        const result = await users.json();
        setOldAsset(result);
      }
      useEffect(() => {
        fetchOldData();
      }, []);
      let oldAssetData = oldAsset.length;

      async function fetchScrapData() {
        const users = await fetch("http://localhost:8000/scrappedAsset");
        const result = await users.json();
        setScrapAsset(result);
      }
      useEffect(() => {
        fetchScrapData();
      }, []);
      let scrapAssetData = scrapAsset.length;

      const calendarAsset = data?.map((data : IAssets) => {
        return {
          title: data.purchasefrom,
          start: new Date(data.brand),
          end: new Date(data.id),
        }
      });
      useEffect(() => {
        setEvents(calendarAsset);
      }, []);

  return (
    <div>
        <Box>
            <Grid container sx={{padding:'0.7rem',alignItems:'center'}}>
                <Grid item xs={8.5} sx={{display:'flex',alignItems:'center'}}>
                    <Typography fontSize={"1.8rem"} style={{fontWeight:'bold',color:'#1e293b'}} className={classes.typography}>Dashboard <span style={{fontSize:'1rem'}}>dashboard & statistics</span></Typography>
                </Grid>
                <Grid item xs={1.4} >
                <Link href="/assets/addassets" passHref style={{ textDecoration: "none" }}>
                    <Button variant='outlined' size='small' style={{textTransform:'capitalize',background:'white'}} endIcon={<AddIcon style={{fontSize:'1.4rem',color:'#a21caf'}}/>}> Add Asset</Button>
                </Link>
                </Grid>
                <Grid item xs={2.1} style={{display:'flex',justifyContent:'flex-end'}}>
                    <Link href="/setup" passHref style={{ textDecoration: "none" }}>
                    <Button variant="outlined" size='small' style={{textTransform:'capitalize',background:'white'}} endIcon={<ManageAccountsIcon style={{fontSize:'1.4rem',color:'#a21caf'}}/>}>Manage Dashboard</Button>
                    </Link>
                </Grid>
               <Grid container spacing={1}>
               <Grid item xs={3} mt={1.5}>
                    <Paper className={classes.paper} elevation={0} >
                       <Grid container> 
                       <Grid item xs={4}>
                       <div className={classes.divIcon}> <SettingsIcon style={{fontSize:'1rem',marginTop:'-1rem'}}/></div>
                       </Grid>
                        <Grid item xs={8} sx={{display:'flex',justifyContent:'center'}}>
                        <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Total Asset</Typography>
                        </Grid>
                        <Grid item xs={8} sx={{display:'flex',justifyContent:'flex-end',paddingTop:'1rem'}}>
                        <Typography fontSize={"1.5rem"}>{length}</Typography>
                        </Grid>
                       </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3} mt={1.5}>
                    <Paper className={classes.paper} elevation={0} >
                       <Grid container> 
                       <Grid item xs={4}>
                       <div className={classes.divIcon2}><ToggleOnIcon style={{fontSize:'1rem',marginTop:'-1rem'}}/></div>
                       </Grid>
                        <Grid item xs={8} sx={{display:'flex',justifyContent:'center'}}>
                        <Typography fontSize={"0.9rem"} fontWeight={"bold"}>New Asset</Typography>
                        </Grid>
                        <Grid item xs={8} sx={{display:'flex',justifyContent:'flex-end',paddingTop:'1rem'}}>
                        <Typography fontSize={"1.5rem"}>{newAssetData}</Typography>
                        </Grid>
                       </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3} mt={1.5}>
                    <Paper className={classes.paper} elevation={0} >
                       <Grid container> 
                       <Grid item xs={3.8}>
                       <div className={classes.divIcon3}><ToggleOffIcon style={{fontSize:'1rem',marginTop:'-1rem'}}/></div>
                       </Grid>
                        <Grid item xs={8.2} sx={{display:'flex',justifyContent:'center'}}>
                        <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Old Asset</Typography>
                        </Grid>
                        <Grid item xs={8} sx={{display:'flex',justifyContent:'flex-end',paddingTop:'1rem'}}>
                        <Typography fontSize={"1.5rem"}>{oldAssetData}</Typography>
                        </Grid>
                       </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={3} mt={1.5}>
                <Link href="/assets/addassets/addscrappedassets/scrappedassetlist" passHref style={{ textDecoration: "none" }}>
                    <Paper className={classes.paper} elevation={0} >
                       <Grid container> 
                       <Grid item xs={3.8}>
                       <div className={classes.divIcon4}><DeleteOutlineIcon style={{fontSize:'1rem',marginTop:'-1rem'}}/></div>
                       </Grid>
                        <Grid item xs={8.2} sx={{display:'flex',justifyContent:'center'}}>
                        <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Scrapped Asset</Typography>
                        </Grid>
                        <Grid item xs={8} sx={{display:'flex',justifyContent:'flex-end',paddingTop:'1rem'}}>
                        <Typography fontSize={"1.5rem"}>{scrapAssetData}</Typography>
                        </Grid>
                       </Grid>
                    </Paper>
                    </Link>

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
                            <Grid item xs={1}>
                            <Typography sx={{paddingLeft:'1rem'}} fontSize={"1rem"} fontWeight={"bold"}>Alerts</Typography>
                            </Grid>
                            <Grid item xs={11} style={{display:'flex',justifyContent:'flex-end'}}>
                                <div style={{background:"#3b82f6",color:'white',padding:'0.4rem',borderRadius:'5px',fontSize:'0.7rem'}}>Assets Due</div>
                                <div style={{background:"#a21caf",marginLeft:'0.7rem',color:'white',padding:'0.4rem',borderRadius:'5px',fontSize:'0.7rem'}}>Maintenance Due</div>
                                <div style={{background:"#ef4444",marginLeft:'0.7rem',color:'white',padding:'0.4rem',borderRadius:'5px',fontSize:'0.7rem'}}>Warranty Expiring</div>
                                <div style={{textAlign:'center',width:'17%',background:"#facc15",marginLeft:'0.7rem',color:'white',padding:'0.4rem',borderRadius:'5px',fontSize:'0.7rem'}}>Lease Expiring</div>
                            </Grid>
                        </Grid>
                        <Divider style={{width:'100%',paddingLeft:'0.5rem',marginTop:'0.6rem'}}/>
                        {/* <Calendar localizer={localizer}
                            startAccessor="start" endAccessor="end"
                            style={{ height: 270,marginLeft:'0.6rem',marginTop:'0.5rem' }}/> */}
                             <Calendar events={events} startAccessor="start"
                              endAccessor="end" defaultDate={moment().toDate()} localizer={localizer} />
                    </Paper>
                </Grid>
            </Grid>              
            </Grid>
        </Box>
      {/* <DashboardGraphView newAsset={newAsset}/> */}
      {/* <DashboardChart newAsset={newAsset}/> */}

    </div>
  )
}

export default DashboardPage
