import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Divider, Typography } from "@mui/material";
import Badge from '@mui/material/Badge';
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "next/link";
import * as React from "react";
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';


const TestSidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav" aria-labelledby="nested-list-subheader">
         <Link href="/dashboard" passHref style={{ textDecoration: "none" }}>
      <ListItemButton>
          <HomeOutlinedIcon style={{color:"#f75757",fontSize:'1rem',marginRight:'0.6rem'}}/>
        <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'bold'}}>Dashboard</Typography>
      </ListItemButton>
      </Link>
      <ListItemButton onClick={handleClick}>
        <FlagOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
        <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Alerts</Typography>
        
        {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemIcon style={{marginLeft:'2rem'}}>
        <Badge color="error" overlap="circular" badgeContent="0" ></Badge>
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <Link href="/alerts/assetpastdue" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Assets Past Due</Typography>
            <Badge color="primary" overlap="circular" badgeContent="0" style={{marginLeft:'3.2rem'}}></Badge>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>

      <Collapse in={open} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Leases Expiring</Typography>
            <Badge color="warning" overlap="circular" badgeContent="0" style={{marginLeft:'3.4rem'}}></Badge>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>


      <Collapse in={open} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/maintainancedue" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Maintainance Due</Typography>
            <Badge color="secondary" overlap="circular" badgeContent="0" style={{marginLeft:'2.7rem'}}></Badge>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>

      <Collapse in={open} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/maintananceoverdue" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Maintainance Overdue</Typography>
            <Badge color="secondary" overlap="circular" badgeContent="0" style={{marginLeft:'1.1rem'}}></Badge>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>


      <Collapse in={open} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/warrantiesexpire" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Warranties Expiring</Typography>
            <Badge color="error" overlap="circular" badgeContent="0" style={{marginLeft:'2.3rem'}}></Badge>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>







    <Divider style={{width:'90%'}}/>
      <Collapse in={open} timeout="auto" unmountOnExit style={{marginTop:'-0.1rem'}}>
      <Link href="/alerts/setupalerts" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <BuildOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.9rem'}}>Setup Alerts</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>

      



    </List>
    </div>
  )
}

export default TestSidebar
