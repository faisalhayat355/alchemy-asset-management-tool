"use client"
import React, { useEffect, useState } from 'react';
import { Box, Grid,Typography } from '@mui/material';
import ProjectReport from './projectreports';
import ClientsReport from './clientsreports';
import ReportsExportComponent from './list/exportcomponent';
import ReportListComponent from './list';
import postService from '../../employeemanagement/services/postService';
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
const ClientWiseHomeComponent = () => {
    // const [data, setData] = useState([]);
    // const [users, setUsers] = useState([])

    // const fetchData = () => {
    //     fetch("http://127.0.0.1:3000/get-employee-posts")
    //       .then((r) => {
    //         return r.json();
    //       })
    //       .then((d) => {
    //         setData(d);
    //       });
    //   };
    //   useEffect(() => {
    //     fetchData();
    //   }, []);

    //   useEffect(()=>{
    //     setUsers(data)
    //   },[data])

    //   const updateUsers = (f:any)=>{
    //     setUsers(f);
    //   }

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
        <Grid container sx={{paddingLeft:'1rem'}}>
          <Grid item xs={12}>
            <Typography fontWeight={"bold"} style={{fontFamily:"cursive", fontSize:'1.3rem'}}>Client Wise Reports</Typography>
          </Grid>
        </Grid>
     <Box sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #1F7DA9',paddingLeft:'1rem',paddingTop:'0.8rem',height:'70vh',width:'97%',marginLeft:'0.85rem',alignItems:'center',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",marginTop:'0.2rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={5.5}>
            <ProjectReport users={data} updateUsers={updateUsers} />
          </Grid>
          <Grid item xs={4.7}>
            <ClientsReport users={data} updateUsers={updateUsers} />
            {/* <ProjectReport users={data} updateUsers={updateUsers} /> */}
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

export default ClientWiseHomeComponent
