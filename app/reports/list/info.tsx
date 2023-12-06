import { Grid, Typography } from '@mui/material'
import React from 'react'

const InfoComponent = ({test}:any) => {
  return (
    <div>
     <Grid container style={{ padding: "0.5rem", background: "#f8fafc",width:'98.7%' }} mt={0.4}>
        <Grid item xs={0.3}></Grid>
        <Grid item xs={2}>
          <Typography style={{textAlign:'left'}}>{test.employeeid}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={{textAlign:'left'}}>{test.client}</Typography>
        </Grid>
        <Grid item xs={3.4}>
          <Typography style={{textAlign:'left'}}>{test.projectName}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography style={{textAlign:'left'}}>{test.location}</Typography>
        </Grid>
        <Grid item xs={1.2}>
          <Typography style={{textAlign:'left'}}> {test.mobile}</Typography>
        </Grid>
        
      </Grid>

    </div>
  )
}

export default InfoComponent
