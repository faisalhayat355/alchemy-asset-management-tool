import { Grid, Pagination, Typography } from '@mui/material'
import React, { useState } from 'react'
import { IAssets } from '../../../assets/listofassets/models/assets.model'
import DepartmentInfoComponent from './info'
import { makeStyles } from "@mui/styles";
import { ListComponentProps } from '../../../assets/listofassets/props/props'
import { PaginationHandler } from '../../../utility/pagination';

const useStyles = makeStyles({
  pagination: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "2rem",
    position: "relative",
  },
});
const DepartmentListComponent = ({users}:ListComponentProps) => {

  const classes = useStyles();
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(users.length / PER_PAGE);
  const _DATA = PaginationHandler(users, PER_PAGE);

  const handleChangePage = (e:any, p:any) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
    <div>
    <Grid container style={{ padding: "0.5rem", background: "#f1f5f9",width:'98.7%' }} mb={"0.3rem"} mt={"1rem"} >
        <Grid item xs={0.9}>
          <Typography style={{ fontWeight: "bold", textAlign: "left" }}>EMP ID</Typography>
        </Grid>
        <Grid item xs={1.4}>
          <Typography style={{ fontWeight: "bold", textAlign: "left" }}>EMP NAME</Typography>
        </Grid>
        <Grid item xs={1.4}>
          <Typography style={{ fontWeight: "bold", textAlign: "left" }}>CONTACT NO.</Typography>
        </Grid>
        <Grid item xs={1.5}>
          <Typography style={{ fontWeight: "bold", textAlign: "left" }}>DEPARTMENT</Typography>
        </Grid>
        <Grid item xs={1.9} style={{ display: "flex" }}>
          <Typography style={{ fontWeight: "bold"}}>DESIGNATION</Typography>
        </Grid>
        <Grid item xs={1.9} style={{ display: "flex" }}>
          <Typography style={{ fontWeight: "bold"}}>EMAIL</Typography>
        </Grid>
        <Grid item xs={1.8} style={{ display: "flex" }}>
          <Typography style={{ fontWeight: "bold", }}>WORK LOCATION</Typography>
        </Grid>
        <Grid item xs={1.2} style={{ display: "flex" }}>
          <Typography style={{ fontWeight: "bold"}}>ADDRESS</Typography>
        </Grid>  
    </Grid>
    <Grid style={{ height: "56vh" }}>
      {_DATA.currentData().reverse().map((test:IAssets) => {
          return(
            <Typography key={test.id}>
            <DepartmentInfoComponent test={test}/> 
          </Typography>
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

export default DepartmentListComponent
