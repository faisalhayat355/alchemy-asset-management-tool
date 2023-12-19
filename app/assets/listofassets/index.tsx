"use client"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Divider, Grid, IconButton, Tooltip, Typography, Zoom } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { Case, Default, Switch } from "react-if";
import AssetExportComponent from './listcomponent/exportComponent';
import GridViewComponent from './listcomponent/gridView';
import ListItemComponent from './listcomponent/ListItem';
import AssetViewComponent from './multipleview';

import axios from 'axios';
import { ViewTypes } from "../../utility/view.type";


type Post = {
  _id: string;
  id: string;
  employeeId: string;
  name: string;
  email: string;
  mobile: string;
  position: string;
  address: string;
  site: string;

};


const ListAssetHomeComponent = () => {

  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);
  
  const onViewSelect = (view: ViewTypes) => {
    setViewType(view);
  };

  const [data, setData] = useState<Post[]>([]);
  const [users, setUsers] = useState([])
  const items= data.reverse()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: Post[] }>('http://127.0.0.1:8000/get-asset-posts');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
    
  useEffect(()=>{
  setUsers(data)
  },[data])


  return (

  <Box>
     <Grid container sx={{padding:'0.8rem',alignItems:'center'}}>
      <Grid container sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #1F7DA9',paddingTop:'0.1rem',width:'98.7%',alignItems:'center',marginLeft:"0.2rem",boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
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
        <AssetExportComponent users={users} />
      </Grid>
      <Grid item xs={5.37}>
        <AssetViewComponent onViewSelect={onViewSelect}/>
      </Grid>
      <Grid item xs={1.7} sx={{display:'flex',justifyContent:'flex-end'}}>
      <Link href="/assets/addassets" passHref style={{ textDecoration: "none" }}>
        <Button variant='outlined' size='small' style={{background:'#1F7DA9',border:'1px solid #1F7DA9',color:'white',fontSize:'0.8rem',fontWeight:'bold'}}> + Add New Asset</Button>
      </Link>
      </Grid>
     </Grid> 
     </Grid>
        <Grid item xs={12}>
          <Switch>
            <Case condition={viewType === ViewTypes.GRID}>
              <GridViewComponent />
            </Case>
            <Case condition={viewType === ViewTypes.CALENDAR}>
              {/* <AssetCalendarView users={users} /> */}
            </Case>
            <Default>
             <Grid style={{marginLeft:'1rem',width:'96.5%',marginTop:"-1rem"}}>
             <Divider style={{width:'100%',marginTop:'0.2rem',background:'#eff6ff'}}/>
             {/* <ListItemComponent posts={posts}/> */}

             <ListItemComponent/>
             </Grid>
            </Default>
          </Switch>
        </Grid>
    </Box>
  )
}

export default ListAssetHomeComponent
