import * as React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import GroupIcon from '@mui/icons-material/Group';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LaptopIcon from '@mui/icons-material/Laptop';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonAddDisabledOutlinedIcon from '@mui/icons-material/PersonAddDisabledOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Divider, Fade, Tooltip, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { signOut } from "next-auth/react";
import Link from "next/link";
import "../../styles.css";

const SidebarAssetComponent = ({show}:any) => {
  const [assets, setAssets] = React.useState(false);
  const [reports, setReports] = React.useState(false);
  const [helpsupport, setHelpSupport] = React.useState(false);
  const [setup, setSetup] = React.useState(false);
  const [assetsType, setAssetsType] = React.useState(false);
  const [employee, setEmployee] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickAssets = () => {
    setAssets(!assets);
  };
  const handleClickReports = () => {
    setReports(!reports);
  };
  const handleClickHelpSupport = () => {
    setHelpSupport(!helpsupport);
  };
  const handleClickSetup = () => {
    setSetup(!setup);
  };
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };
  const handleClickAssetsType = () => {
    setAssetsType(!assetsType);
  };
  const handleClickEmployee = () => {
    setEmployee(!employee);
  };
  return (
    <>
    <div style={{height:'77vh',overflowY:'auto',overflowX:'hidden'}}>
      <List sx={{ width: "100%", maxWidth: 360}} component="nav" aria-labelledby="nested-list-subheader">
      <Divider style={{width:'100%'}}/>
        <Link href="/dashboard" passHref style={{ textDecoration: "none" }}>
          <ListItemButton selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}>
            <Tooltip title="Dashboard" arrow TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }} placement="right-start">
            <HomeOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.4rem',marginRight:'0.4rem',marginLeft:'0.2rem'}}/>
          </Tooltip>
            {show && (
          <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'bold',marginTop:'0.2rem'}}>Dashboard</Typography>
            )}
        </ListItemButton>
      </Link>
      <Divider style={{width:'100%'}}/>
      <Link href="/assets/listofassets" passHref style={{ textDecoration: "none" }}>
      <ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)} >
        <Tooltip title="Assets" arrow TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }} placement="right-start">
        <ManageAccountsIcon style={{color:"#1F7DA9",fontSize:'1.4rem',marginRight:'0.4rem',marginLeft:'0.2rem'}} />
        </Tooltip>
     {show &&(
       <div style={{display:'flex',alignItems:'center'}} onClick={handleClickAssets}>
       <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Assets</Typography> 
         {assets ? <ExpandLess style={{marginLeft:'5.1rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'5.1rem',color:'#414242'}}/>}
       </div>
     )}
      </ListItemButton>
      </Link>
      {show && (
      <Collapse in={assets} timeout="auto" unmountOnExit>
      <Link href="/assets/listofassets" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <ListOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
           {show &&(
             <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>List of Assets</Typography>
           )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/addassets" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <DataSaverOnIcon style={{color:"#1F7DA9",fontSize:'1rem',marginRight:'0.6rem'}} />
           {show &&(
             <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Add New Assets</Typography>
           )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/scrappedasset" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <DesktopAccessDisabledIcon style={{color:"#1F7DA9",fontSize:'0.9rem',marginRight:'0.6rem',marginLeft:'0.1rem'}} />
           {show &&(
             <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Add Scrapped Assets</Typography>
           )}
          </ListItemButton>
        </List>
        </Link>
      {/* <ListItemButton sx={{ pl: 2.7 }} onClick={handleClickAssetsType} >
        <div style={{display:'flex',alignItems:'center'}}>
          <ManageAccountsIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
          {show && (
            <div style={{display:'flex',alignItems:'center'}}>
                <Typography style={{color:'#414242',fontSize:'0.8rem'}}>Assets</Typography>
                {assetsType ? <ExpandLess style={{marginLeft:'5.55rem',color:"#1F7DA9"}} /> : <ExpandMore style={{marginLeft:'5.55rem'}}/>}
            </div>
          )} 
        </div>   
      </ListItemButton> */}
      {/* <Collapse in={assetsType} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}> */}
      {/* <Link href="/assets/addassets" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:2.8}}>
          <DataSaverOnIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.75rem'}}>Add an Assets</Typography>
          </ListItemButton>
        </List>
        </Link> */}
        {/* <Link href="/assets/addassets/addactiveassets" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:2.8}}>
          <AddToQueueIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.75rem'}}>Add Active Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/addassets/addstockassets" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:2.8}}>
          <LaptopIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.75rem'}}>Add Stock Assets</Typography>
          </ListItemButton>
        </List>
        </Link> */}
        {/* <Link href="/assets/addassets/addscrappedassets/scrappedassetlist" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:2.8}}>
          <DesktopAccessDisabledIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.75rem'}}>Add Scrapped Assets</Typography>
          </ListItemButton>
        </List>
        </Link> */}
      {/* </Collapse> */}
        {/* <Divider style={{width:'100%'}}/>
        <Link href="/assets/checkin" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <PersonAddOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            {show && (
              <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Check in</Typography>
            )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/checkout" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <PersonAddDisabledOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
           {show && (
             <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Check out</Typography>
           )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/lease" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <SendOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            {show && (
              <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Lease</Typography>
            )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/leasereturn" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <SendOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            {show && (
              <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Lease Return</Typography>
            )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/dispose" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <AcUnitIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            {show && (
              <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Dispose</Typography>
            )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/maintanance" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <MiscellaneousServicesOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            {show && (
              <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Maintenance</Typography>
            )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/move" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <OpenWithOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            {show && (
              <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Move</Typography>
            )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/reserve" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <CalendarMonthOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            {show && (
              <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Reserve</Typography>
            )}
          </ListItemButton>
        </List>
        </Link> */}
      </Collapse>
      )}
      <Divider style={{width:'100%'}}/>
      <Link href="/employeemanagement" passHref style={{ textDecoration: "none",color:'#414242' }}>
        <ListItemButton selected={selectedIndex === 13}
          onClick={(event) => handleListItemClick(event, 13)}>
          <Tooltip title="Employee" arrow TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }} placement="right-start">
          <PersonAddAltIcon style={{color:"#1F7DA9",fontSize:'1.4rem',marginRight:'0.4rem',marginLeft:'0.2rem'}} />
          </Tooltip>
          {show && (
            <div style={{display:'flex',alignItems:'center'}} onClick={handleClickEmployee}>
              <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Employee</Typography> 
                {employee ? <ExpandLess style={{marginLeft:'3.85rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'3.85rem'}}/>} 
            </div>
          )}
        <ListItemIcon style={{marginLeft:'2rem'}}>
        </ListItemIcon>
      </ListItemButton>
      </Link>
      <Collapse in={employee} timeout="auto" unmountOnExit style={{marginTop:'0.1rem'}}>
      <Link href="/employeemanagement" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <WorkOutlineIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
           {show && (
             <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Employee List</Typography>
           )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/employeemanagement/addemployee" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <DataSaverOnIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
           {show && (
             <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Add New Employee</Typography>
             )}
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <Divider style={{width:'100%'}}/>
      <Link href="/reports" passHref style={{ textDecoration: "none",color:"#414242" }}>
      <ListItemButton selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}>
          <Tooltip title="Reports" arrow TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }} placement="right-start">
          <DescriptionOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.4rem',marginRight:'0.6rem'}} />
          </Tooltip>
          {show && (
            <div style={{display:'flex',alignItems:'center'}} onClick={handleClickReports}>
                <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Reports</Typography>
                {reports ? <ExpandLess style={{marginLeft:'4.7rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'4.7rem'}} />}
            </div>
          )}
        <ListItemIcon style={{marginLeft:'2rem'}}>
        </ListItemIcon>
      </ListItemButton>
      </Link>
      <Collapse in={reports} timeout="auto" unmountOnExit style={{marginTop:'0.1rem'}}>
      <Link href="/reports/clientwise" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <GroupIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
           {show && (
             <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Client Wise</Typography>
           )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/reports/departmentwise" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <GroupIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
           {show && (
             <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Department Wise</Typography>
           )}
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <Divider style={{width:'100%'}}/>
      <ListItemButton selected={selectedIndex === 9} onClick={(event) => handleListItemClick(event, 9)}>
          <Tooltip title="Setup" arrow TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }} placement="right-start">
          <SettingsOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.4rem',marginRight:'0.6rem'}} />
          </Tooltip>
          {show && (
            <div style={{display:'flex',alignItems:'center'}} onClick={handleClickSetup}>
              <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Setup</Typography> 
                {setup ? <ExpandLess style={{marginLeft:'5.6rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'5.6rem'}}/>} 
            </div>
          )}
        <ListItemIcon style={{marginLeft:'2rem'}}>
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={setup} timeout="auto" unmountOnExit>
      <Link href="/setup/company-info" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <WorkOutlineIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
           {show && (
             <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Company Info</Typography>
           )}
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <Divider style={{width:'100%'}}/>
      <ListItemButton selected={selectedIndex === 10}
          onClick={(event) => handleListItemClick(event, 10)}>
          <Tooltip title="Help/Support" arrow TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }} placement="right-start">
          <SupportOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.3rem',marginRight:'0.55rem',marginLeft:'0.1rem'}} />
          </Tooltip>
          {show && (
            <div style={{display:'flex',alignItems:'center'}} onClick={handleClickHelpSupport}>
              <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Help/Support</Typography> 
              {helpsupport ? <ExpandLess style={{marginLeft:'2.4rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'2.4rem'}}/>}
            </div>
          )}
        <ListItemIcon style={{marginLeft:'2rem'}}>
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={helpsupport} timeout="auto" unmountOnExit>
      <Link href="/help-support/aboutus" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <ErrorOutlineOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            {show && (
              <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>About Us</Typography>
            )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/help-support/contactus" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <CallOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            {show && (
              <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Contact Us</Typography>
            )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/help-support/terms-of-service" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <FavoriteBorderOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            {show && (
              <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Terms of Service</Typography>
            )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/help-support/privacy-policy" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <SentimentSatisfiedAltOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
           {show && (
             <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Privacy Policy</Typography>
           )}
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <Divider style={{width:'100%'}}/>
    </List>
    </div>
    <ListItemButton  onClick={() => signOut()}>
      <Tooltip title="Logout" arrow TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }} placement="right-start">
      <LogoutIcon style={{color:"#1F7DA9",fontSize:'1.3rem',marginRight:'0.6rem'}} />
      </Tooltip>
       {show && (
        <div style={{display:'flex'}}>
           <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Log out</Typography> 
        </div>
       )}
      </ListItemButton>
    </>
  )
}
export default SidebarAssetComponent
