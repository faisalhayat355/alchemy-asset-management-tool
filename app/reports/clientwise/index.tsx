"use client"
import React, { useEffect, useState } from 'react';
import { Box, Grid,Typography } from '@mui/material';
import ProjectReport from './projectreports';
import ClientsReport from './clientsreports';
import ReportsExportComponent from './list/exportcomponent';
import ReportListComponent from './list';

const ReportsHomePage = () => {
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

      const updateUsers = (f:any)=>{
        setUsers(f);
      }
  return (
    <div>
        <Grid container sx={{paddingLeft:'1rem',paddingTop:"0.5rem",paddingBottom:'0.5rem'}}>
          <Grid item xs={12}>
            <Typography fontWeight={"bold"} style={{fontFamily:"cursive", fontSize:'1.3rem'}}>Client Wise Reports</Typography>
          </Grid>
        </Grid>
     <Box sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #1F7DA9',paddingLeft:'1rem',paddingTop:'0.8rem',height:'82vh',width:'97%',marginLeft:'0.85rem',alignItems:'center',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",marginTop:'0.2rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={5.5}>
            <ProjectReport users={data} updateUsers={updateUsers} />
          </Grid>
          <Grid item xs={4.7}>
            <ClientsReport users={data} updateUsers={updateUsers} />
          </Grid>
          <Grid item xs={0.8}></Grid>
          <Grid item xs={1}>
          <ReportsExportComponent users={users} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
            <ReportListComponent users={users}/>
        </Grid>
     </Box>
    </div>
  )
}

export default ReportsHomePage
