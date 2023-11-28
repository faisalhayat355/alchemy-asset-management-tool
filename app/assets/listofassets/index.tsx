"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';
import { Box, Button, Divider, Grid, IconButton, Tooltip, Typography, Zoom } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { makeStyles } from '@mui/styles';
import { Case, Default, Switch } from "react-if";
import AssetCalendarView from './listcomponent/calendarView';
import AssetExportComponent from './listcomponent/exportComponent';
import GridViewComponent from './listcomponent/gridView';
import ListItemComponent from './listcomponent/ListItem';
import AssetViewComponent from './multipleview';
import { ViewTypes } from './utility/view.type';

const useStyles = makeStyles({
  typography: {
     fontFamily:"cursive",
     fontSize:'1.3rem'
  },
});

const ListAssetHomeComponent = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([])

  // const [error, setError] = useState ([]);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);
  const classes = useStyles();
  // useEffect(() => {
  //   axios .get("http://localhost:8000/users")
  //     .then((res) => setUsers(res.data))
  //     .catch((err) => {
  //       setError(err.message);
  //     });
  // }, []);
  async function fetchData() {
    const users = await fetch("http://localhost:8000/users");
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

  <Box>
     <Grid container sx={{padding:'0.8rem',alignItems:'center'}}>
      <Grid container sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #1F7DA9',paddingTop:'0.1rem',width:'99.9%',alignItems:'center',marginLeft:"0.2rem"}}>
      <Link href="/dashboard" passHref style={{ textDecoration: "none" }}>
      <Grid item xs={0.6}>
      <Tooltip title="Back" TransitionComponent={Zoom}>
      <IconButton style={{marginLeft:'0.1rem',marginRight:'0.3rem'}}><ArrowBackIcon style={{fontSize:'1.2rem',}}/></IconButton>
      </Tooltip>
      </Grid>
      </Link>
       <Grid item xs={3}>
         <Typography fontWeight={"bold"} style={{fontFamily:"cursive", fontSize:'1.3rem'}}>List of Assets</Typography>
       </Grid>
       <Grid item xs={1.3}>
        <AssetExportComponent users={users}/>
      </Grid>
      {/* <Grid item xs={0.8}>
        <AssetFilterComponent/>
      </Grid> */}

      <Grid item xs={6}>
        <AssetViewComponent onViewSelect={onViewSelect}/>
      </Grid>
      <Grid item xs={1.2} sx={{display:'flex',justifyContent:'flex-end'}}>
      <Link href="/assets/addassets" passHref style={{ textDecoration: "none" }}>
        <Button variant='outlined' size='small' style={{background:'#1F7DA9',border:'1px solid #1F7DA9',color:'white',fontSize:'0.8rem',fontWeight:'bold'}}> + Add Asset</Button>
      </Link>
      </Grid>
     </Grid>
     
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
             <Grid style={{marginLeft:'1rem',width:'97.4%',marginTop:"-1rem"}}>
             <Divider style={{width:'100%',marginTop:'0.2rem',background:'#eff6ff'}}/>
             <ListItemComponent />
             </Grid>
            </Default>
          </Switch>
        </Grid>
    </Box>
  )
}

export default ListAssetHomeComponent
