"use client"
import { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Divider, Grid, IconButton, Tooltip, Typography, Zoom } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { Case, Default, Switch } from "react-if";
import AssetCalendarView from '../assets/listofassets/listcomponent/calendarView';
import AssetViewComponent from '../assets/listofassets/multipleview';
import { ViewTypes } from "../utility/view.type";
import EmployeeListComponent from './list';
import EmployeeExportComponent from "./list/employeeExportComponent";
import EmployeeGridViewComponent from './list/gridView';

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

const EmployeeManagementHome = () => {
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);
  const [data, setData] = useState<Post[]>([]);
  const [users, setUsers] = useState([])
  
  const items= data.reverse()

  const onViewSelect = (view: ViewTypes) => {
    setViewType(view);
  };
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
    
  useEffect(()=>{
  setUsers(data)
  },[data])

  return (
    <Box>
      <Grid container sx={{padding:'0.8rem',alignItems:'center'}}>
      <Grid container sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #1F7DA9',paddingTop:'0.1rem',width:'98.7%',alignItems:'center',marginLeft:"0.2rem",boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
        <Link href="/dashboard" passHref style={{ textDecoration: "none" }}>
        <Grid item xs={0.6}>
          <Tooltip title="Back" TransitionComponent={Zoom} arrow>
          <IconButton><ArrowBackIcon/></IconButton>
          </Tooltip>
        </Grid>
        </Link>
        <Grid item xs={4.3}>
          <Typography fontWeight={"bold"} style={{fontFamily:"cursive", fontSize:'1.3rem'}}>List of Employee Management</Typography>
        </Grid>
        <Grid item xs={1}>
        <EmployeeExportComponent users={users} />
      </Grid>
      <Grid item xs={4.4}>
        <AssetViewComponent onViewSelect={onViewSelect}/>
      </Grid>
        <Grid item xs={1.8} sx={{display:'flex',justifyContent:'flex-end'}}>   
          <Link href="/employeemanagement/addemployee/" passHref style={{ textDecoration: "none" }}>
            <Button variant='outlined' size='small' style={{background:'#1F7DA9',border:'1px solid #1F7DA9',color:'white',fontSize:'0.8rem',fontWeight:'bold'}}> + Add New Employee</Button>
          </Link>
        </Grid>
      </Grid>
      </Grid>
      <Grid item xs={12}>
        <Switch>
          <Case condition={viewType === ViewTypes.GRID}>
            <EmployeeGridViewComponent users={users}  />
          </Case>
          <Case condition={viewType === ViewTypes.CALENDAR}>
            <AssetCalendarView users={users}  />
          </Case>
          <Default>
            <Grid style={{marginLeft:'1rem',width:'96.5%',marginTop:"-1rem"}}>
            <Divider style={{width:'100%',marginTop:'0.2rem',background:'#fecaca'}}/>
            <EmployeeListComponent />
            </Grid>
          </Default>
        </Switch>
      </Grid>
   </Box>
  )
}
export default EmployeeManagementHome
