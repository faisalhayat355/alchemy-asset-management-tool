"use client"
import { Box, Grid, Pagination, Typography } from '@mui/material';
import { useState } from 'react';
import { IAssets } from '../../../../listofassets/models/assets.model';
import { PaginationHandler } from '../../../../listofassets/utility/pagination';
import ActiveAssetInfoComponent from '../info';


  type AssetsProps = {
      users: Array<IAssets>;
    };
const ActiveAssetListComponent = ({users}:AssetsProps) => {

    let [page, setPage] = useState(1);
    const PER_PAGE = 8;
    const count = Math.ceil(users.length / PER_PAGE);
    const paginationHandler = PaginationHandler(users, PER_PAGE);
  
    const handleChangePage = (e: any, p: number) => {
      setPage(p);
      paginationHandler.jump(p);
    };
  return (
    <div>
     <Box>
     <Grid container sx={{background:'white',paddingLeft:'1rem',paddingBottom:'1rem',width:'97.5%',marginLeft:'1rem',alignItems:'center'}}>
        <Grid container sx={{border:'1px solid #fecaca',padding:'0.2rem',width:'98.5%',borderRadius:'5px'}}>
        <Grid item xs={1.55}>
            <Typography style={{ color:"#334155",fontSize:'0.8rem',fontWeight:'bold'}} ml={1}>Asset Tag ID</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography style={{ color:"#334155",fontSize:'0.8rem',fontWeight:'bold'}}>Department</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography style={{ color:"#334155",fontSize:'0.8rem',fontWeight:'bold'}}>Ram</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography style={{ color:"#334155",fontSize:'0.8rem',fontWeight:'bold'}}>Processor</Typography>
        </Grid>
        <Grid item xs={2.2}>
            <Typography style={{ color:"#334155",fontSize:'0.8rem',fontWeight:'bold'}}>Location</Typography>
        </Grid>
        <Grid item xs={1.25}>
            <Typography style={{ color:"#334155",fontSize:'0.8rem',fontWeight:'bold'}}>Department</Typography>
        </Grid>
        <Grid item xs={1} sx={{display:'flex',justifyContent:'center'}}>
            <Typography style={{ color:"#334155",fontSize:'0.8rem',fontWeight:'bold'}}>Category</Typography>
        </Grid>
        </Grid>
     </Grid>     
    </Box>

    <Grid style={{ marginTop:"-1rem",height: "53vh",background:'white',paddingLeft:'1rem',paddingBottom:'1rem',width:'97.5%',marginLeft:'1rem',alignItems:'center' }}>
        {paginationHandler
          .currentData()
          ?.map((items:any, index: number) => {
            return (
              <Typography key={index}>
                 <ActiveAssetInfoComponent items={items}/>
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
    </div>
  )
}

export default ActiveAssetListComponent
