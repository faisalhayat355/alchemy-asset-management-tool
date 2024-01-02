"use client"
import { Box, Divider, Grid, Pagination, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useState } from 'react';
import { IAssets } from '../../assets/listofassets/models/assets.model';
import { PaginationHandler } from '../../utility/pagination';

const useStyles = makeStyles({
  paper: {
    background: "#f8fafc",
    border:'1px solid #eff6ff',
    // boxShadow: "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(32, 176, 147) 0px 1px 0px inset",
    cursor:'pointer',
    
    "&:hover": {
        boxShadow: " #e2e8f0 10px -50px 36px -38px inset" ,
        // boxShadow: "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(32, 176, 147) 0px 1px 0px inset",
        // borderTop:'2px solid #20b093',
        cursor:'pointer',
        background:'white',
        border:'10px'
        
    },
},
});

type AssetsProps = {
  users: Array<IAssets>;
};

const EmployeeGridViewComponent = ({users}:AssetsProps) => {
  const classes = useStyles();
  let [page, setPage] = useState(1);
  const PER_PAGE = 6;
  const count = Math.ceil(users.length / PER_PAGE);
  const paginationHandler = PaginationHandler(users, PER_PAGE);

  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };

  return (
    <div>
    <Box sx={{marginTop:"-0.8rem",height:'73vh',background:'white',paddingLeft:'1rem',paddingRight:'1rem',paddingBottom:'4.5rem',width:'96.45%',marginLeft:'1rem',alignItems:'center'}} >
     <Grid container >
      <Divider style={{width:'100%'}}/>
        <Grid container spacing={2} mt={"0.1rem"}>
          {paginationHandler
          .currentData().map((item:any) => {
              return (
                <Grid item xs={4} md={4} sm={4} lg={4} key={item.id}>
                <Link href={`/assets/viewemployee/${item.id}`} style={{textDecoration:'none'}}>
                  <Paper variant="outlined" className={classes.paper}>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1"  fontWeight={"bold"}>
                           Employee ID
                          </Typography>
                        </Grid>
                        <Grid item xs={1} mt={1.2}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1" >
                            {item.employeeId}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1" fontWeight={"bold"}>Employee Name</Typography>
                        </Grid>
                        <Grid item xs={1} mt={1.2}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1" >
                            {item.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1" fontWeight={"bold"}>Work Location</Typography>
                        </Grid>
                        <Grid item xs={1} mt={1.2}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1" >
                            {item?.workLocation}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1" fontWeight={"bold"} >Position</Typography>
                        </Grid>
                        <Grid item xs={1} mt={1.2}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1" >
                            {item?.position}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1" fontWeight={"bold"}>Employee Type</Typography>
                        </Grid>
                        <Grid item xs={1} mt={1.2}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1" >
                            {item?.site}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1" fontWeight={"bold"}>Location</Typography>
                        </Grid>
                        <Grid item xs={1} mt={1.2}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1">
                            {item?.location}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </Link>
                </Grid>                                
              );
            })}
        </Grid>
     </Grid>     
    </Box>
      <Grid container mt={2.5}>
        <Grid item xs={11.8} display={"flex"} justifyContent={"flex-end"}>
          <Grid style={{ position: "fixed" }}>
            <Pagination  size="small" variant="outlined" color="primary" count={count} page={page} onChange={handleChangePage}/>
          </Grid>
        </Grid>
        <Grid item xs={0.2}></Grid>
      </Grid>
   </div>
  )
}

export default EmployeeGridViewComponent
