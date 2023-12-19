"use client"
import { Box, Grid, Pagination, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useState } from 'react';
import { PaginationHandler } from '../../../utility/pagination';
import { IAssets } from '../models/assets.model';


const useStyles = makeStyles({
  paper: {
    background: "#eff6ff",
    border:'1px solid #f1f5f9',
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 1px",
    cursor:'pointer',
    "&:hover": {
        boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        cursor:'pointer',
        background:'white'
    },
},
});

type AssetsProps = {
  posts: Array<IAssets>;
};

const GridViewComponent = ({posts}:any) => {
  const classes = useStyles();

  let [page, setPage] = useState(1);
  const PER_PAGE = 6;
  const count = Math.ceil(posts.length / PER_PAGE);
  const paginationHandler = PaginationHandler(posts, PER_PAGE);

  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };

  return (
    <div>
    <Box style={{height:'74vh'}} >
     <Grid container sx={{background:'white',paddingLeft:'1rem',paddingRight:'1rem',paddingBottom:'7rem',width:'96.5%',marginLeft:'1rem',alignItems:'center',marginTop:'-0.8rem'}}>
        <Grid container spacing={2}>
          {posts.data.data.map((item:any) => {
              return (
                <Grid item xs={4} md={4} sm={4} lg={4} key={item.id} mt={1}>
                  <Link href={`/assets/viewassets/${item._id}`} style={{textDecoration:'none'}}>
                  <Paper variant="outlined" className={classes.paper}>
                    <Box paddingLeft={2} paddingTop={0}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Typography variant="subtitle1"  fontWeight={"bold"}>
                           Asset Tag ID
                          </Typography>
                        </Grid>
                        {/* <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid> */}
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
                        {/* <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid> */}
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
                        {/* <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid> */}
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
                        {/* <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid> */}
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
                        {/* <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid> */}
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
                        {/* <Grid item xs={1}>
                          <Typography> :</Typography>
                        </Grid> */}
                        <Grid item xs={6} paddingLeft={2}>
                          <Typography noWrap variant="subtitle1">
                            {item?.remarks}
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
    <Grid container mt={1.5}>
        <Grid item xs={11.8} display={"flex"} justifyContent={"flex-end"}>
          <Grid style={{ position: "fixed" }}>
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
        <Grid item xs={0.2}></Grid>
      </Grid>
   </div>
  )
}

export default GridViewComponent
