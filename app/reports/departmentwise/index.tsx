"use client"
import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import DepartmentReportsExportComponent from '../clientwise/projectreports/departmentexportcomponent';
import DepartmentListComponent from './list'

const DepartmentWiseReport = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([])

  const fetchData = () => {
      fetch("http://localhost:8000/employeeManagement")
        .then((r) => {
          return r.json();
        })
        .then((d) => {
          setData(d);
        });
    };

    useEffect(() => {
      fetchData();
    }, []);

    useEffect(()=>{
      setUsers(data)
    },[data])

    const updateUsers = (f)=>{
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
