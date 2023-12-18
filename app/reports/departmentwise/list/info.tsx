import React from 'react'
import { Grid, Typography } from '@mui/material'

const DepartmentInfoComponent = ({test}:any) => {
  return (
    <div>
       <Grid container style={{ padding: "0.5rem", background: "#f8fafc",width:'98.7%' }} mt={0.4} >
       

        <Grid item xs={0.9}>
          <Typography noWrap>{test.employeeId}</Typography>
        </Grid>
        
        <Grid item xs={1.4}>
          <Typography noWrap>{test.name}</Typography>
        </Grid>
        <Grid item xs={1.4}>
          <Typography>{test.mobile}</Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography noWrap>{test.department}</Typography>
        </Grid>
        <Grid item xs={1.9} style={{ display: "flex" }}>
          <Typography noWrap>{test.position}</Typography>
        </Grid>
        <Grid item xs={1.9} style={{ display: "flex" }}>
          <Typography noWrap>{test.email}</Typography>
        </Grid>
        <Grid item xs={1.8} style={{ display: "flex" }}>
          <Typography>{test.workLocation}</Typography>
        </Grid>
        <Grid item xs={1.2} style={{ display: "flex" }}>
          <Typography noWrap>{test.address}</Typography>
        </Grid>  
    </Grid>
    </div>
  )
}

export default DepartmentInfoComponent
