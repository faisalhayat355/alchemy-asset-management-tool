"use client"
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Divider, Grid, Pagination, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { PaginationHandler } from '../../../utility/pagination';
import { IAssets } from '../models/assets.model';

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
  posts: Array<IAssets>;
};

const GridViewComponent = ({data}:any) => {
  const classes = useStyles();
  //Pagination Handler
  let [page, setPage] = useState(1);
  const PER_PAGE = 6;
  const count = Math.ceil(data.length / PER_PAGE);
  const paginationHandler = PaginationHandler(data, PER_PAGE);

  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };

  return (
    <div>
      
     <Box sx={{marginTop:"-0.8rem",height:'75.5vh',background:'white',paddingLeft:'1rem',paddingRight:'1rem',width:'96.45%',marginLeft:'1rem',alignItems:'center'}} >
     <Grid container >
      {/* <Divider style={{width:'100%'}}/> */}
        <Grid container spacing={2} mt={"0.1rem"}>
          {paginationHandler
            .currentData().map((item:any) => {
              return (
                <Grid item xs={4} md={4} sm={4} lg={4} key={item.id}>
                  <Paper variant="outlined" className={classes.paper}>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1"  fontWeight={"bold"}>
                          Asset Tag ID
                          </Typography>
                        </Grid>
                        <Grid item xs={1} mt={1.2}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1" >
                            {item.assettagid}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1" fontWeight={"bold"}>Purchased From</Typography>
                        </Grid>
                        <Grid item xs={1} mt={1.2}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1" >
                            {item.purchasefrom}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1" fontWeight={"bold"}>Purchased Date</Typography>
                        </Grid>
                        <Grid item xs={1} mt={1.2}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1" >
                            {item?.purchasedate}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1" fontWeight={"bold"} >Description</Typography>
                        </Grid>
                        <Grid item xs={1} mt={1.2}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1" >
                            {item?.description}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1" fontWeight={"bold"}>Processor</Typography>
                        </Grid>
                        <Grid item xs={1} mt={1.2}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1" >
                            {item?.processor}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1" fontWeight={"bold"}>Remarks</Typography>
                        </Grid>
                        <Grid item xs={1} mt={1.2}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1">
                            {item?.remarks}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </Grid>                                
              );
            })}
        </Grid>
     </Grid>     
    </Box>
    <Grid container mt={0.5}>
      <Grid item xs={11.8} display={"flex"} justifyContent={"flex-end"}>
        <Grid style={{position: "fixed"}}>
          <Pagination size="small" variant="outlined" color="primary" count={count} page={page} onChange={handleChangePage}/>
        </Grid>
      </Grid>
    </Grid>
   </div>
  )
}

export default GridViewComponent
