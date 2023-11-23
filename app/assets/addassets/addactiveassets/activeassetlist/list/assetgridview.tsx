"use client"
import { Box, Grid, Pagination, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { IAssets } from '../../../../listofassets/models/assets.model';
import { PaginationHandler } from '../../../../listofassets/utility/pagination';


const useStyles = makeStyles({
  paper: {
    background: "#fffbeb",
    border:'1px solid #f1f5f9',
    cursor:'pointer',
    "&:hover": {
        boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        cursor:'pointer',
        background:'white'
    },
},
});

type AssetsProps = {
  users: Array<IAssets>;
};

const ActiveAssetGridViewComponent = ({users}:AssetsProps) => {
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
    <Box style={{height:'63vh'}} >
     <Grid container sx={{background:'white',paddingLeft:'1rem',paddingRight:'1rem',paddingBottom:'4.5rem',width:'97.5%',marginLeft:'1rem',alignItems:'center'}}>
        <Grid container spacing={2}>
          {paginationHandler
          .currentData().map((item:any) => {
              return (
                <Grid item xs={4} md={4} sm={4} lg={4} key={item.id}>
                  <Paper variant="outlined" className={classes.paper}>
                    <Box paddingLeft={2} paddingTop={1}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1"  fontWeight={"bold"}>
                           Asset Tag ID
                          </Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1" >
                            {item.id}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1" fontWeight={"bold"}>Purchased From</Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1" >
                            {item?.purchasefrom}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1" fontWeight={"bold"}>Purchased Date</Typography>
                        </Grid>
                        <Grid item xs={1}>
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
                          <Typography variant="subtitle1" fontWeight={"bold"} >Category</Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1" >
                            {item?.category}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1" fontWeight={"bold"}>Location</Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1" >
                            {item?.location}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box paddingLeft={2}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1" fontWeight={"bold"}>Department</Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid>
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1">
                            {item?.department}
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
    <Grid container mt={-1.5}>
        <Grid item xs={11.8} display={"flex"} justifyContent={"flex-end"}>
          <Grid style={{ position: "fixed" }}>
            <Pagination count={count} size="small" page={page} variant="outlined" color="primary" 
            onChange={handleChangePage}/>
          </Grid>
        </Grid>
        <Grid item xs={0.2}></Grid>
      </Grid>



   </div>
  )
}

export default ActiveAssetGridViewComponent
