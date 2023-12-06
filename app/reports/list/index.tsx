import { Grid, Typography } from '@mui/material'
import React from 'react'
import InfoComponent from './info';

const ReportListComponent = ({users}:any) => {
  return (
    <div>
     <Grid container style={{ padding: "0.5rem", background: "#f1f5f9",width:'98.7%' }} mb={"0.3rem"} mt={"1rem"} >
        <Grid item xs={0.3}></Grid>
        <Grid item xs={2}>
          <Typography style={{ fontWeight: "bold", textAlign: "left" }}>
            Employee ID
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={{ fontWeight: "bold", textAlign: "left" }}>
           Client
          </Typography>
        </Grid>
        <Grid item xs={3.4}>
          <Typography style={{ fontWeight: "bold", textAlign: "left" }}>
          Project Name
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography style={{ fontWeight: "bold", textAlign: "left" }}>
            Location
          </Typography>
        </Grid>
        <Grid item xs={1} style={{ display: "flex" }}>
          <Typography style={{ fontWeight: "bold", marginRight: "4.55rem" }}>
            Contact
          </Typography>
        </Grid>
       
      </Grid>
      {users.map((test) => {
        return <InfoComponent test={test} key={test.id} />;
      })}
    </div>
  )
}

export default ReportListComponent
