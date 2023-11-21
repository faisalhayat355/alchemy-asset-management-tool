"use client"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Divider, Grid, IconButton, Tooltip, Typography, Zoom } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { Case, Default, Switch } from "react-if";
import AssetCalendarView from "../../../listofassets/listcomponent/calendarView";
import AssetExportComponent from "../../../listofassets/listcomponent/exportComponent";
import AssetFilterComponent from "../../../listofassets/listcomponent/filterComponent";
import AssetSearchComponent from "../../../listofassets/listcomponent/searchComponent";
import AssetViewComponent from "../../../listofassets/multipleview";
import { ViewTypes } from "../../../listofassets/utility/view.type";
import OldAssetGridViewComponent from './list/gridview';
import OldListAssetComponent from "./list/listcomponent";


const useStyles = makeStyles({
  typography: {
     fontFamily:"cursive",
     fontSize:'1.3rem'
  },
});

const OldAssetHomeComponent = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([])

  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);
  const classes = useStyles();
  async function fetchData() {
    const users = await fetch("http://localhost:8000/oldAsset");
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
     <Grid container sx={{padding:'1rem',alignItems:'center'}}>
     <Link href="/dashboard" passHref style={{ textDecoration: "none" }}>
      <Grid item xs={0.6}>
      <Tooltip title="Back" TransitionComponent={Zoom} arrow>
      <IconButton><ArrowBackIcon/></IconButton>
      </Tooltip>
      </Grid>
      </Link>
       <Grid item xs={11}>
         <Typography fontWeight={"bold"} className={classes.typography}>List of Old Assets</Typography>
       </Grid>
     </Grid>
     <Grid container sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #f87171',paddingLeft:'1rem',paddingTop:'1rem',paddingBottom:'1rem',width:'97.5%',marginLeft:'1rem',alignItems:'center'}}>
      <Grid item xs={4}>   
        <AssetSearchComponent users={data} setData={setData}/>
      </Grid>
      <Grid item xs={0.4}>
        <AssetFilterComponent/>
      </Grid>
      <Grid item xs={4}>
        <AssetExportComponent users={users}/>
      </Grid>
      <Grid item xs={1.4}>
        <AssetViewComponent onViewSelect={onViewSelect}/>
      </Grid>
      <Grid item xs={2} sx={{display:'flex',justifyContent:'flex-end'}}>
      <Link href="/assets/addassets/addoldassets" passHref style={{ textDecoration: "none" }}>
        <Button variant='outlined' size='small' style={{background:'#f87171',border:'1px solid #f87171',color:'white',fontSize:'0.8rem',fontWeight:'bold'}}> + Add Old Asset</Button>
      </Link>
      </Grid>
      <Divider style={{width:'98.5%',marginTop:'1rem',background:'#fecaca'}}/>
     </Grid>
     <Grid item xs={12}>
          <Switch>
            <Case condition={viewType === ViewTypes.GRID}>
              <OldAssetGridViewComponent users={users}/>
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
              <OldListAssetComponent users={users} />
            </Default>
          </Switch>
        </Grid>
    </Box>
    </div>
  )
}

export default OldAssetHomeComponent
