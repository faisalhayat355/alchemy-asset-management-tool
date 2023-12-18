"use client"
import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import DepartmentReportsExportComponent from '../clientwise/projectreports/departmentexportcomponent';
import DepartmentListComponent from './list'
import axios from 'axios';


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

const DepartmentWiseReport = () => {
  const [data, setData] = useState<Post[]>([]);
  const [users, setUsers] = useState([])
  const items= data.reverse()
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

  const updateUsers = (f:any)=>{
      setUsers(f);
    }

  return (
    <div>
      <Grid container sx={{paddingLeft:'1rem',paddingTop:"0.5rem",paddingBottom:'0.5rem'}}>
        <Grid item xs={11.4}>
          <Typography fontWeight={"bold"} style={{fontFamily:"cursive", fontSize:'1.3rem'}}> Department Wise Reports</Typography>
        </Grid>
        <Grid item xs={0.5}>
          <DepartmentReportsExportComponent users={users}/>
        </Grid>
      </Grid>
      <Box sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #1F7DA9',paddingLeft:'1rem',paddingTop:'0.8rem',height:'81vh',width:'97%',marginLeft:'0.85rem',alignItems:'center',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",marginTop:'0.2rem'}}>
        <Grid item xs={12}>
        <DepartmentListComponent users={users}/>
        </Grid>
     </Box>
    </div>
  )
}
export default DepartmentWiseReport
