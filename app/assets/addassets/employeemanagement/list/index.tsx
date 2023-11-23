"use client"
import { Box, Grid, Pagination, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { IAssets } from '../../../listofassets/models/assets.model';
import { PaginationHandler } from '../../../listofassets/utility/pagination';
import EmployeeInfoComponent from '../info';


const useStyles = makeStyles({
    typography: {
       color:"#334155",
       fontSize:'0.8rem',
       fontWeight:'bold'
    },
  });
  
  type AssetsProps = {
      users: Array<IAssets>;
    };
const EmployeeListComponent = ({users}:AssetsProps) => {
    const classes = useStyles();

    let [page, setPage] = useState(1);
    const PER_PAGE = 8;
    const count = Math.ceil(users.length / PER_PAGE);
    const paginationHandler = PaginationHandler(users, PER_PAGE);
  
    const handleChangePage = (e: any, p: number) => {
      setPage(p);
      paginationHandler.jump(p);
    };
  return (
    <>
       <Box>
     <Grid container sx={{background:'white',paddingLeft:'1rem',paddingBottom:'1rem',width:'97.5%',marginLeft:'1rem',alignItems:'center'}}>
        <Grid container sx={{border:'1px solid #fecaca',padding:'0.2rem',width:'98.5%',borderRadius:'5px'}}>
        <Grid item xs={0.6}>
            <Typography className={classes.typography} ml={1}>S No.</Typography>
        </Grid>
        <Grid item xs={1.55}>
            <Typography className={classes.typography} ml={1}>Asset Tag ID</Typography>
        </Grid>
        <Grid item xs={1.5}>
            <Typography className={classes.typography}>Employee ID</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography className={classes.typography}>First Name</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography className={classes.typography}>Last Name</Typography>
        </Grid>
        <Grid item xs={1.5}>
            <Typography className={classes.typography}>Department</Typography>
        </Grid>
        <Grid item xs={1.5}>
            <Typography className={classes.typography}>Employement Type</Typography>
        </Grid>
        <Grid item xs={1.3} sx={{display:'flex',justifyContent:'center'}}>
            <Typography className={classes.typography}>Location</Typography>
        </Grid>
        {/* <Grid item xs={0.5} sx={{display:'flex',justifyContent:'flex-end'}}>
            <Typography className={classes.typography}>Action</Typography>
        </Grid> */}
        </Grid>
     </Grid>     
    </Box>

    <Grid style={{ marginTop:"-1rem",height: "53vh",background:'white',paddingLeft:'1rem',paddingBottom:'1rem',width:'97.5%',marginLeft:'1rem',alignItems:'center' }}>
        {paginationHandler
          .currentData()
          ?.map((items:any, index: number) => {
            return (
              <Typography key={index}>
                 <EmployeeInfoComponent items={items}/>
              </Typography>
            );
          })}
      </Grid>
      <Grid container mt={1}>
        <Grid item xs={11.92} display={"flex"} justifyContent={"flex-end"}>
          <Grid style={{ position: "fixed" }}></Grid>
          <Pagination
            count={count}
            size="small"
            page={page}
            variant="outlined"
            color="primary"
            onChange={handleChangePage}
          />
        </Grid>
      </Grid> 
    </>
  )
}

export default EmployeeListComponent