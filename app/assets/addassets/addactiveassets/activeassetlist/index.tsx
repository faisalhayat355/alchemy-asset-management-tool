"use client"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Divider, Grid, IconButton, Tooltip, Typography, Zoom } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { Case, Default, Switch } from "react-if";
import AssetCalendarView from "../../../listofassets/listcomponent/calendarView";
import AssetExportComponent from "../../../listofassets/listcomponent/exportComponent";
import AssetViewComponent from "../../../listofassets/multipleview";
import { ViewTypes } from "../../../listofassets/utility/view.type";
import ActiveAssetList from './list';
import ActiveAssetGridViewComponent from './list/assetgridview';


const ActiveAssetListHomeComponent = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([])

  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);
  async function fetchData() {
    const users = await fetch("http://localhost:8000/activeAsset");
    const result = await users.json();
    setData(result);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const onViewSelect = (view: ViewTypes) => {
    setViewType(view);
  };

  useEffect(()=>{
    setUsers(data)
  },[data])
  return (
    <div>
    <Box>
     <Grid container sx={{padding:'0.8rem',alignItems:'center'}}>
      <Grid container sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #1F7DA9',paddingTop:'0.1rem',width:'98.7%',alignItems:'center',marginLeft:"0.2rem"}}>
      <Link href="/dashboard" passHref style={{ textDecoration: "none" }}>
      <Grid item xs={0.6}>
      <Tooltip title="Back" TransitionComponent={Zoom} arrow>
      <IconButton><ArrowBackIcon/></IconButton>
      </Tooltip>
      </Grid>
      </Link>
       <Grid item xs={3}>
         <Typography fontWeight={"bold"} style={{fontFamily:"cursive", fontSize:'1.3rem'}}>List of Active Assets</Typography>
       </Grid>
       <Grid item xs={1.3}>
        <AssetExportComponent users={users}/>
      </Grid>
      {/* <Grid item xs={0.8}>
        <AssetFilterComponent/>
      </Grid> */}

      <Grid item xs={5}>
        <AssetViewComponent onViewSelect={onViewSelect}/>
      </Grid>
      <Grid item xs={2.2} sx={{display:'flex',justifyContent:'flex-end'}}>
      <Link href="/assets/addassets/addactiveassets" passHref style={{ textDecoration: "none" }}>
        <Button variant='outlined' size='small' style={{background:'#1F7DA9',border:'1px solid #1F7DA9',color:'white',fontSize:'0.8rem',fontWeight:'bold'}}> + Add Active Asset</Button>
      </Link>
      </Grid>
     </Grid>
     
     </Grid>
     <Grid item xs={12}>
          <Switch>
            <Case condition={viewType === ViewTypes.GRID}>
              <ActiveAssetGridViewComponent users={users} />
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
             <Grid style={{marginLeft:'1rem',width:'96.5%',marginTop:"-1rem"}}>
             <Divider style={{width:'100%',marginTop:'0.2rem',background:'#fecaca'}}/>
             <ActiveAssetList />
             </Grid>
            </Default>
          </Switch>
        </Grid>
    </Box>
    </div>
  )
}

export default ActiveAssetListHomeComponent
