import { Grid, Pagination, Typography } from '@mui/material'
import React, { useState } from 'react'
import { PaginationHandler } from '../../../assets/listofassets/utility/pagination';
import InfoComponent from './info';
import { makeStyles } from "@mui/styles";
import { IAssets } from '../../../assets/listofassets/models/assets.model';
import { ListComponentProps } from '../../../assets/listofassets/props/props';

const useStyles = makeStyles({
  pagination: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "2rem",
    position: "relative",
  },
});

const ReportListComponent = ({users}:ListComponentProps) => {
  const classes = useStyles();
  let [page, setPage] = useState(1);
  const PER_PAGE = 8;
  const count = Math.ceil(users.length / PER_PAGE);
  const _DATA = PaginationHandler(users, PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
      <>
        <div>
          <Grid container style={{ padding: "0.5rem", background: "#f1f5f9",width:'98.7%' }} mb={"0.3rem"} mt={"1rem"}>
            <Grid item xs={1}>
              <Typography fontWeight={'bold'} style={{fontSize:'0.8rem'}}>EMP ID</Typography>
            </Grid>
            <Grid item xs={1.7}>
              <Typography fontWeight={'bold'} style={{fontSize:'0.8rem'}}>EMP NAME</Typography>
            </Grid>
            <Grid item xs={1.4}>
              <Typography fontWeight={'bold'} style={{fontSize:'0.8rem'}}>CLIENT NAME</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography fontWeight={'bold'} style={{fontSize:'0.8rem'}}>PROJECT NAME</Typography>
            </Grid>
            <Grid item xs={1.8}>
              <Typography fontWeight={'bold'} style={{fontSize:'0.8rem'}}>CONTACT</Typography>
            </Grid>
            <Grid item xs={2.1}>
              <Typography fontWeight={'bold'} style={{fontSize:'0.8rem'}}>SBU HEAD</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography fontWeight={'bold'} style={{fontSize:'0.8rem'}}>CLIENT LOB</Typography>
            </Grid>
          </Grid>
          <Grid style={{ height: "52vh" }}>
          {_DATA.currentData().reverse().map((test:IAssets) => {
              return(
                <Typography key={test.id}><InfoComponent test={test}/></Typography>
              ) 
            })}
          </Grid>
        </div>
        <div>
        <Grid container>
          <Grid item xs={11.8} className={classes.pagination}>
            <div style={{ position: "fixed" }}>
              <Pagination count={count} size="small" page={page} variant="outlined" color="primary" onChange={handleChangePage}/>
            </div>
          </Grid>
          <Grid item xs={0.2}></Grid>
        </Grid>
        </div>
      </>
  )
}

export default ReportListComponent
