import { Grid, Typography } from '@mui/material'
import React from 'react'

const InfoComponent = ({test}:any) => {
  return (
    <div>
      <Grid container style={{ padding: "0.5rem", background: "#f8fafc",width:'98.7%' }} mb={"0.3rem"} mt={0.4}>
        <Grid item xs={1}>
          <Typography style={{fontSize:'0.8rem'}}>{test.employeeId}</Typography>
        </Grid>
        <Grid item xs={1.7}>
          <Typography style={{fontSize:'0.8rem'}}>{test.name}</Typography>
        </Grid>
        <Grid item xs={1.4}>
          <Typography style={{fontSize:'0.8rem'}}>{test.clients}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={{fontSize:'0.8rem'}}>{test.projectName}</Typography>
        </Grid>
        <Grid item xs={1.8}>
          <Typography style={{fontSize:'0.8rem'}}>{test.mobile}</Typography>
        </Grid>
        <Grid item xs={2.1}>
          <Typography style={{fontSize:'0.8rem'}}>{test.sbuHead}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography noWrap style={{fontSize:'0.8rem'}}>{test.clientsLob}</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default InfoComponent
