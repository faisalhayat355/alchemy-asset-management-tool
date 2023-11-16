"use client"
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Link from "next/link";
import { makeStyles } from '@mui/styles';
import { IAssets } from '../models/assets.model';

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

const GridViewComponent = ({users}:AssetsProps) => {
  const classes = useStyles();
  return (
    <>
    <Box>
     <Grid container sx={{background:'white',paddingLeft:'1rem',paddingRight:'1rem',paddingBottom:'1rem',width:'97.5%',marginLeft:'1rem',alignItems:'center'}}>
        <Grid container spacing={1}>
          {users?.map((item:any) => {
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
   </>
  )
}

export default GridViewComponent
