"use client"
import { Grid, Typography } from '@mui/material';

const EmployeeInfoComponent = ({items}:any) => {
  return (
    <div>
      <Grid container mt={0.2}>
       <Grid container  sx={{height:'5vh',border:'1px solid #fecaca',width:'98.5%',borderRadius:'5px',alignItems:'center'}}>
       <Grid item xs={0.5}>
           <Typography fontSize={"0.75rem"} ml={2} noWrap>{items.id}</Typography>
       </Grid>
       <Grid item xs={1.65}>
           <Typography fontSize={"0.75rem"} ml={2} noWrap>{items.assettagid}</Typography>
       </Grid>
       <Grid item xs={1.5}>
           <Typography fontSize={"0.75rem"} noWrap>{items.employeeid}</Typography>
       </Grid>
       <Grid item xs={2}>
           <Typography fontSize={"0.75rem"} noWrap>{items.firstName}</Typography>
       </Grid>
       <Grid item xs={2}>
           <Typography fontSize={"0.75rem"} noWrap>{items.lastName}</Typography>
       </Grid>
       <Grid item xs={1.5}>
           <Typography fontSize={"0.75rem"} noWrap>{items.department}</Typography>
       </Grid>
       <Grid item xs={1.448}>
           <Typography fontSize={"0.75rem"} noWrap>{items.employementType}</Typography>
       </Grid>
       <Grid item xs={1.3} sx={{display:'flex',justifyContent:'center'}}>
           <Typography fontSize={"0.75rem"} noWrap>{items.location}</Typography>
       </Grid>
       
       </Grid>
    </Grid>     
    </div>
  )
}

export default EmployeeInfoComponent
