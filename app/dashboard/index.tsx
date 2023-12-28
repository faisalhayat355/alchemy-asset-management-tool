"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from "moment";
import Link from 'next/link';
import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import DvrIcon from '@mui/icons-material/Dvr';
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import LaptopIcon from '@mui/icons-material/Laptop';
import { makeStyles } from '@mui/styles';
import { momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DashboardCalender from './calendarview';
import DashboardGraphView from './graphview';

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
    assettagid:string;
  
  };

const localizer = momentLocalizer(moment);

const useStyles = makeStyles({
    paper: {
        paddingRight:'0.6rem',paddingTop:'0.6rem',paddingBottom:'0.3rem',
        background: "#f8fafc",
        border:'1px solid #f1f5f9',
        cursor:'pointer',
        height:'15.5vh',
        marginTop:'0.5rem',
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "&:hover": {
            background: "#eff6ff",
            border:'5px solid #f1f5f9',
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            cursor:'pointer'
        },
    },
    divIcon: {
        borderRadius:'5px',background:'#1F7DA9',height:'3vh',width:'53%',
        marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'0.3rem',paddingTop:'0.7rem',
        paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',color:'white',
        transition: "width 2s, height 2s, transform 2s",
        "&:hover": {
            borderRadius:'5px',background:'#3b82f6',height:'3vh',width:'53%',
            marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'0.3rem',paddingTop:'0.7rem',
            paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',transform: "rotate(180deg)",
        },
    },
    divIcon2: {
        borderRadius:'5px',background:'#a21caf',height:'3vh',width:'53%',
        marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'0.3rem',paddingTop:'0.7rem',
        paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',color:'white',
        transition: "width 2s, height 2s, transform 2s",
        "&:hover": {
            borderRadius:'5px',background:' #c026d3',height:'3vh',width:'53%',
            marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'0.3rem',paddingTop:'0.7rem',
            paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',transform: "rotate(180deg)",  
        },
    },
    divIcon3: {
        borderRadius:'5px',background:' #ef4444 ',height:'3vh',width:'55.5%',
        marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'0.3rem',paddingTop:'0.7rem',
        paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',color:'white',
        transition: "width 2s, height 2s, transform 2s",
        "&:hover": {
            borderRadius:'5px',background:'#dc2626',height:'3vh',width:'55.5%',
            marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'0.3rem',paddingTop:'0.7rem',
            paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',transform: "rotate(180deg)",  
        },
    },
    divIcon4: {
        borderRadius:'5px',background:'#facc15',height:'3vh',width:'71%',
        marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'0.3rem',paddingTop:'0.7rem',
        paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',color:'white',
        transition: "width 2s, height 2s, transform 2s",
        "&:hover": {
            borderRadius:'5px',background:'#eab308',height:'3vh',width:'71%',
            marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'0.3rem',paddingTop:'0.7rem',
            paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',transform: "rotate(180deg)",  
        },
    },

    divIcon5: {
        borderRadius:'5px',background:'#84cc16',height:'3vh',width:'55%',
        marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'0.3rem',paddingTop:'0.7rem',
        paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',color:'white',
        transition: "width 2s, height 2s, transform 2s",
        "&:hover": {
            borderRadius:'5px',background:'#65a30d',height:'3vh',width:'55%',
            marginBottom:'0.5rem',marginTop:'-1.5rem',marginLeft:'0.3rem',paddingTop:'0.7rem',
            paddingLeft:'0.7rem',paddingRight:'1rem',paddingBottom:'1.5rem',transform: "rotate(180deg)",  
        },
    },
    assetvalue: {
        paddingRight:'0.6rem',paddingTop:'0.6rem',paddingBottom:'0.3rem',
        background: "#f8fafc",
        border:'1px solid #f1f5f9',
        // cursor:'pointer',
        height:'61vh',
    },
  });
  
const AssetDashboardPage = ({items}:any) => {
const classes = useStyles();
const [data, setData] = useState<Post[]>([]);
const [users, setUsers] = useState([...items])

useEffect(() => {
    setUsers(items);
  }, [items]);

useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get<{ data: Post[] }>('http://127.0.0.1:8000/get-asset-posts');
          setData(response.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    fetchData();
},[]);
    
let length = data.length;

return (
    <div>
        <Box>
            <Grid container sx={{padding:'0.7rem',alignItems:'center'}}>
                <Grid item lg={10.5} xs={12} md={10.35} sx={{display:'flex',alignItems:'center'}}>
                    <Typography fontSize={"1.8rem"} style={{fontWeight:'bold',color:'#1e293b',fontFamily:"cursive",fontSize:'1.5rem'}}>Dashboard 
                    </Typography>
                </Grid>
                <Grid item lg={1.5} xs={12} md={1.65}>
                <Link href="/assets/addassets" passHref style={{ textDecoration: "none" }}>
                    <Button size='small' style={{textTransform:'capitalize',fontWeight:"bold",background:'#1F7DA9',color:'white'}}  startIcon={<AddIcon style={{fontSize:'1.4rem'}}/>}> Add New Asset</Button>
                </Link>
                </Grid>
               <Grid container spacing={1}>
                    <Grid item lg={2.4} mt={1.5} xs={12} md={6} sm={6}>
                    <Link href="/assets/listofassets" passHref style={{ textDecoration: "none" }}>
                    <Paper className={classes.paper} elevation={0} >
                        <Grid container> 
                        <Grid item xs={4}>
                        <div className={classes.divIcon}> <DvrIcon style={{fontSize:'1rem',marginTop:'-1rem'}}/></div>
                        </Grid>
                            <Grid item xs={8} sx={{display:'flex',justifyContent:'center'}}>
                            <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Total Asset</Typography>
                            </Grid>
                            <Grid item xs={8} sx={{display:'flex',justifyContent:'flex-end',paddingTop:'1rem'}}>
                            <Typography fontSize={"1.5rem"}>{length}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    </Link>
                    </Grid>
                <Grid item lg={2.4} mt={1.5} xs={12} md={6} sm={6}>
                    <Paper className={classes.paper} elevation={0} >
                       <Grid container> 
                       <Grid item xs={4}>
                       <div className={classes.divIcon2}><AddToQueueIcon style={{fontSize:'1rem',marginTop:'-1rem'}}/></div>
                       </Grid>
                        <Grid item xs={8} sx={{display:'flex',justifyContent:'center'}}>
                        <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Asset Assigned </Typography>
                        </Grid>
                        <Grid item xs={8} sx={{display:'flex',justifyContent:'flex-end',paddingTop:'1rem'}}>
                        <Typography fontSize={"1.5rem"}> {data?.filter(item=>item.status==="Assign")?.length}</Typography>
                        {/* <Typography fontSize={"1.5rem"}>{data?.filter(r => r.status !== 'UnAssign')?.length}</Typography> */}
                        </Grid>
                       </Grid>
                    </Paper>
                </Grid>
                <Grid item lg={2.4} mt={1.5} xs={12} md={6} sm={6}>
                    <Paper className={classes.paper} elevation={0} >
                       <Grid container> 
                       <Grid item xs={3.8}>
                       <div className={classes.divIcon3}><LaptopIcon style={{fontSize:'1rem',marginTop:'-1rem'}}/></div>
                       </Grid>
                        <Grid item xs={8.2} sx={{display:'flex',justifyContent:'center'}}>
                        <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Active Stock</Typography>
                        </Grid>
                        <Grid item xs={8} sx={{display:'flex',justifyContent:'flex-end',paddingTop:'1rem'}}>
                       <Typography fontSize={"1.5rem"}>{data?.filter(item=>item.status==="UnAssign")?.length}</Typography> 
                        {/* <Typography fontSize={"1.5rem"}> {data?.filter(r => r.status !== 'Assign')?.length}</Typography> */}
                        </Grid>
                       </Grid>
                    </Paper>
                </Grid>
                <Grid item lg={2.4} mt={1.5} xs={12} md={6} sm={6}>
                    <Paper className={classes.paper} elevation={0} >
                       <Grid container> 
                       <Grid item xs={3}>
                        <div className={classes.divIcon4}><InstallDesktopIcon style={{fontSize:'1rem',marginTop:'-1rem'}}/></div>
                       </Grid>
                        <Grid item xs={9} sx={{display:'flex',justifyContent:'center'}}>
                        <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Under Maintainance</Typography>
                        </Grid>
                        <Grid item xs={8} sx={{display:'flex',justifyContent:'flex-end',paddingTop:'1rem'}}>
                       <Typography fontSize={"1.5rem"}>{data?.filter(item=>item.status==="UnderMaintainance")?.length}</Typography> 
                        </Grid>
                       </Grid>
                    </Paper>
                </Grid>
                <Grid item lg={2.4} mt={1.5} xs={12} md={6} sm={6}>
                    <Paper className={classes.paper} elevation={0} >
                       <Grid container> 
                       <Grid item xs={3.8}>
                       <div className={classes.divIcon5}><InstallDesktopIcon style={{fontSize:'1rem',marginTop:'-1rem'}}/></div>
                       </Grid>
                        <Grid item xs={8.2} sx={{display:'flex',justifyContent:'center'}}>
                        <Typography fontSize={"0.9rem"} fontWeight={"bold"}>Scrapped Asset</Typography>
                        </Grid>
                        <Grid item xs={8} sx={{display:'flex',justifyContent:'flex-end',paddingTop:'1rem'}}>
                       <Typography fontSize={"1.5rem"}>{data?.filter(item=>item.status==="Scrap")?.length}</Typography> 
                        </Grid>
                       </Grid>
                    </Paper>
                </Grid>
               </Grid>  
               <Grid container spacing={1} mt={0.1}>
                {/* <Grid item lg={5} xs={12}>
                    <Paper elevation={0} className={classes.assetvalue}>
                        <Typography sx={{paddingLeft:'1rem'}} fontSize={"1rem"} fontWeight={"bold"}>Asset Value <span style={{fontWeight:'normal',fontSize:'0.8rem'}}>by Category</span></Typography>
                        <Divider style={{width:'100%',paddingLeft:'0.5rem',marginTop:'0.5rem'}}/>
                    </Paper>
                </Grid> */}
                <Grid item xs={5}>
                    <Paper elevation={0} className={classes.assetvalue}>
                    <DashboardGraphView items={users}></DashboardGraphView>
                    </Paper>
                </Grid>
                <Grid item lg={7} xs={12}>
                    <Paper elevation={0} className={classes.assetvalue}>
                        <Grid container>
                            <Grid item xs={1}>
                            <Typography sx={{paddingLeft:'1rem'}} fontSize={"1rem"} fontWeight={"bold"}>Calendars</Typography>
                            </Grid>
                            {/* <Grid item xs={11} style={{display:'flex',justifyContent:'flex-end'}}>
                                <div style={{background:"#3b82f6",color:'white',padding:'0.4rem',borderRadius:'5px',fontSize:'0.7rem'}}>Assets Due</div>
                                <div style={{background:"#a21caf",marginLeft:'0.7rem',color:'white',padding:'0.4rem',borderRadius:'5px',fontSize:'0.7rem'}}>Maintenance Due</div>
                                <div style={{background:"#ef4444",marginLeft:'0.7rem',color:'white',padding:'0.4rem',borderRadius:'5px',fontSize:'0.7rem'}}>Warranty Expiring</div>
                                <div style={{textAlign:'center',width:'17%',background:"#facc15",marginLeft:'0.7rem',color:'white',padding:'0.4rem',borderRadius:'5px',fontSize:'0.7rem'}}>Lease Expiring</div>
                            </Grid> */}
                        </Grid>
                        <Divider style={{width:'100%',paddingLeft:'0.5rem',marginTop:'0.6rem'}}/>
                        <DashboardCalender data={users}/>
                    </Paper>
                </Grid>
            </Grid>              
            </Grid>
        </Box>

    </div>
  )
}

export default AssetDashboardPage
