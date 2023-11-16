"use client"
import ListItemComponent from './listcomponent/ListItem'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Divider, Grid, IconButton, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';

import AssetViewComponent from './multipleview';
import { ViewTypes } from './utility/view.type';
import { Case, Default, Switch } from "react-if";
import GridViewComponent from './listcomponent/gridView';
import AssetCalendarView from './listcomponent/calendarView';
import AssetSearchComponent from './listcomponent/searchComponent';
import AssetFilterComponent from './listcomponent/filterComponent';
import AssetExportComponent from './listcomponent/exportComponent';


const useStyles = makeStyles({
  typography: {
     fontFamily:"Papyrus",
     fontSize:'1.3rem'
  },
});

const ListAssetHomeComponent = () => {
  const [users, setUsers] = useState ([]);
  // const [copyUsers, setCopyUsers]=useState([...users,])
  const [error, setError] = useState ([]);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);
  const classes = useStyles();

  useEffect(() => {
    axios .get("http://localhost:8000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []); 
  const onViewSelect = (view: ViewTypes) => {
    setViewType(view);
  };

  const onSearchHandler = (c:any) => {
    setUsers(c);
  };

  return (
    <div>

<Box>
     <Grid container sx={{padding:'1rem'}}>
       <Grid item xs={12}>
         <Typography fontWeight={"bold"} className={classes.typography}>List of Assets</Typography>
       </Grid>
     </Grid>
     <Grid container sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #f87171',paddingLeft:'1rem',paddingTop:'1rem',paddingBottom:'1rem',width:'97.5%',marginLeft:'1rem',alignItems:'center'}}>
      <Grid item xs={4}>   
        <AssetSearchComponent onSearchHandler={onSearchHandler} users={users}/>
      </Grid>
      <Grid item xs={0.4}>
        <AssetFilterComponent/>
      </Grid>
      <Grid item xs={4.4}>
        <AssetExportComponent users={users}/>
      </Grid>
      <Grid item xs={1}>
        <AssetViewComponent onViewSelect={onViewSelect}/>
      </Grid>
      <Grid item xs={2} sx={{display:'flex',justifyContent:'flex-end'}}>
      <Link href="/assets/addassets" passHref style={{ textDecoration: "none" }}>
        <Button variant='outlined' size='small' style={{background:'#f87171',border:'1px solid #f87171',color:'white',fontSize:'0.8rem',fontWeight:'bold'}}> + Add Asset</Button>
      </Link>
      </Grid>
      <Divider style={{width:'98.5%',marginTop:'1rem'}}/>
     </Grid>

     <Grid item xs={12}>
          <Switch>
            <Case condition={viewType === ViewTypes.GRID}>
              <GridViewComponent users={users} />
            </Case>
            {/* <Case condition={viewType === ViewTypes.GRAPH}>
              <CustomerGraphView customer={copyCustomer} />
            </Case> */}
            {/* <Case condition={viewType === ViewTypes.KANBAN}>
              <CustomerKanbanView customer={copyCustomer} />
            </Case> */}
            <Case condition={viewType === ViewTypes.CALENDAR}>
              <AssetCalendarView users={users} />
            </Case>
            <Default>
              <ListItemComponent users={users} />
            </Default>
          </Switch>
        </Grid>


    </Box>



       {/* <ListItemComponent users={users}/> */}
    </div>
  )
}

export default ListAssetHomeComponent
