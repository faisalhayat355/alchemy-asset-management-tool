import * as React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import DescriptionIcon from '@mui/icons-material/Description';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LaptopIcon from '@mui/icons-material/Laptop';
import ListIcon from '@mui/icons-material/List';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonAddDisabledOutlinedIcon from '@mui/icons-material/PersonAddDisabledOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import SpokeIcon from '@mui/icons-material/Spoke';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import StartIcon from '@mui/icons-material/Start';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import TableChartIcon from '@mui/icons-material/TableChart';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { Divider, Fade, Tooltip, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { signOut } from "next-auth/react";
import Link from "next/link";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "../../styles.css";

const SidebarAssetComponent = ({show}:any) => {
  const [alerts, setAlerts] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
  const [assets, setAssets] = React.useState(false);
  const [lists, setLists] = React.useState(false);
  const [reports, setReports] = React.useState(false);
  const [customReports, setCustomReports] = React.useState(false);
  const [assetReports, setAssetReports] = React.useState(false);
  const [auditReports, setAuditReports] = React.useState(false);
  const [checkOutReports, setCheckOutReports] = React.useState(false);
  const [leasedReports, setLeasedReports] = React.useState(false);
  const [maintenanceReports, setMaintenanceReports] = React.useState(false);
  const [reservationReports, setReservationReports] = React.useState(false);
  const [statusReports, setStatusReports] = React.useState(false);
  const [transactionReports, setTransactionReports] = React.useState(false);
  const [otherReports, setOtherReports] = React.useState(false);
  const [tools, setTools] = React.useState(false);
  const [advanced, setAdvanced] = React.useState(false);
  const [helpsupport, setHelpSupport] = React.useState(false);
  const [setup, setSetup] = React.useState(false);
  const [database, setDatabase] = React.useState(false);
  const [customizeForms, setCustomizeForms] = React.useState(false);
  const [assetsType, setAssetsType] = React.useState(false);
  const [employee, setEmployee] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickAlerts = () => {
    setAlerts(!alerts);
  };
  const handleClickProfile = () => {
    setProfile(!profile);
  };
  const handleClickAssets = () => {
    setAssets(!assets);
  };
  const handleClickLists = () => {
    setLists(!lists);
  };
  const handleClickReports = () => {
    setReports(!reports);
  };
  const handleClickCustomReports = () => {
    setCustomReports(!customReports);
  };
  const handleClickAssetReports = () => {
    setAssetReports(!assetReports);
  };
  const handleClickAuditReports = () => {
    setAuditReports(!auditReports);
  };
  const handleClickCheckOutReports = () => {
    setCheckOutReports(!checkOutReports);
  };
  const handleClickLeasedReports = () => {
    setLeasedReports(!leasedReports);
  };
  const handleClickMaintenanceReports = () => {
    setMaintenanceReports(!maintenanceReports);
  };
  const handleClickReservationReports = () => {
    setReservationReports(!reservationReports);
  };
  const handleClickStatusReports = () => {
    setStatusReports(!statusReports);
  };
  const handleClickTransactionReports = () => {
    setTransactionReports(!transactionReports);
  };
  const handleClickOtherReports = () => {
    setOtherReports(!otherReports);
  };
  const handleClickTools = () => {
    setTools(!tools);
  };
  const handleClickAdvanced = () => {
    setAdvanced(!advanced);
  };
  const handleClickHelpSupport = () => {
    setHelpSupport(!helpsupport);
  };
  const handleClickSetup = () => {
    setSetup(!setup);
  };
  const handleClickDatabase = () => {
    setDatabase(!database);
  };
  const handleClickCustomizeForms = () => {
    setCustomizeForms(!customizeForms);
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
 
    <div style={{height:'78vh',overflowY:'auto',overflowX:'hidden'}}>
      <List sx={{ width: "100%", maxWidth: 360}}component="nav" aria-labelledby="nested-list-subheader">
      {/* <ListItemButton selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)} >
            <Tooltip title="Profile" arrow TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }} placement="right-start">
        <AccountCircleIcon style={{color:"#1F7DA9",fontSize:'1.3rem',marginRight:'0.6rem',marginLeft:'0.1rem'}} />
        </Tooltip>
        {show && (
          <div style={{display:'flex',alignItems:'center'}} onClick={handleClickProfile} >
            <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550',alignItems:'center'}} >Profile
          </Typography>
          {profile ? <ExpandLess style={{marginLeft:'5.3rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'5.3rem'}}/>} 
          </div>
        )}
      </ListItemButton>
      <Collapse in={profile} timeout="auto" unmountOnExit>
      <Link href="/alerts/assetpastdue" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <Person2OutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
          {show &&(
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>My Profile</Typography>
          )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/assetpastdue" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <LockOpenOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
          {show && (
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Change Password</Typography>
          )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/assetpastdue" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <ExitToAppOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
          {show && (
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Log out</Typography>
          )}
          </ListItemButton>
        </List>
        </Link>
      </Collapse> */}
      <Divider style={{width:'100%'}}/>
      {/* <Collapse in={profile} timeout="auto" unmountOnExit style={{marginTop:'-0.1rem'}}>
      <Link href="/alerts/setupalerts" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <Person2OutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
          {show && (
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Account Details</Typography>
          )}
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/setupalerts" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <DiamondOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
          {show && (
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Subscription Plan</Typography>
          )}
          </ListItemButton>
        </List>
        </Link>
      </Collapse> */}
         <Link href="/dashboard" passHref style={{ textDecoration: "none" }}>
        <ListItemButton selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
          <Tooltip title="Dashboard" arrow TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }} placement="right-start">
          <HomeOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.4rem',marginRight:'0.6rem'}}/>
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
        <ManageAccountsIcon style={{color:"#1F7DA9",fontSize:'1.4rem',marginRight:'0.6rem'}} />
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
      <ListItemButton sx={{ pl: 2.7 }} onClick={handleClickAssetsType} >
        <div style={{display:'flex',alignItems:'center'}}>
          <ManageAccountsIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
          {show && (
            <div style={{display:'flex',alignItems:'center'}}>
                <Typography style={{color:'#414242',fontSize:'0.8rem'}}>Assets</Typography>
                {assetsType ? <ExpandLess style={{marginLeft:'5.55rem',color:"#1F7DA9"}} /> : <ExpandMore style={{marginLeft:'5.55rem'}}/>}
            </div>
          )} 
        </div>   
      </ListItemButton>
      <Collapse in={assetsType} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/assets/addassets" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:2.8}}>
          <DataSaverOnIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.75rem'}}>Add an Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/addassets/addactiveassets" passHref style={{ textDecoration: "none" }}>
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
        </Link>
        <Link href="/assets/addassets/addscrappedassets/scrappedassetlist" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:2.8}}>
          <DesktopAccessDisabledIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.75rem'}}>Add Scrapped Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        {/* <Link href="/assets/addassets/employeemanagement" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:2.8}}>
          <PersonAddAltIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.75rem'}}>Employee Management</Typography>
          </ListItemButton>
        </List>
        </Link> */}
      </Collapse>
        <Divider style={{width:'100%'}}/>
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
        </Link>
      </Collapse>
      )}
      <Divider style={{width:'100%'}}/>
        <ListItemButton selected={selectedIndex === 13}
          onClick={(event) => handleListItemClick(event, 13)}>
          <Tooltip title="Setup" arrow TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }} placement="right-start">
          <PersonAddAltIcon style={{color:"#1F7DA9",fontSize:'1.4rem',marginRight:'0.6rem'}} />
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
      <Collapse in={employee} timeout="auto" unmountOnExit>
      <Link href="/assets/addassets/employeemanagement" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <WorkOutlineIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
           {show && (
             <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Employee List</Typography>
           )}
          </ListItemButton>
        </List>
        </Link>
      </Collapse>


      <Divider style={{width:'100%'}}/>
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
      <Collapse in={reports} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/warrantiesexpire" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
         {show && (
           <ListItemButton sx={{ pl: 5 }}>
           <Typography sx={{color:'#414242',fontSize:'0.9rem'}}>Automated Reports</Typography>
         </ListItemButton>
         )}
        </List>
        </Link>
      </Collapse>
      
      <Collapse in={reports} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
         {show && (
           <ListItemButton sx={{ pl: 5 }} onClick={handleClickCustomReports} >
           <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Custom Reports</Typography>
           {customReports ? <ExpandLess style={{marginLeft:'2.8rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'2.8rem'}}/>}
         </ListItemButton>
         )}
          <Collapse in={customReports} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
         {show && (
           <ListItemButton sx={{ pl:5.5}}>
           <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>New Report</Typography>
         </ListItemButton>
         )}
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          {show && (
            <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>-Asset List</Typography>
          </ListItemButton>
          )}
        </List>
        </Link>
      </Collapse>

      {show && (
        <ListItemButton sx={{ pl: 5 }} onClick={handleClickAssetReports} >
        <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Asset Reports</Typography>
        {assetReports ? <ExpandLess style={{marginLeft:'3.6rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'3.6rem'}}/>}
      </ListItemButton>
      )}
          <Collapse in={assetReports} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        {show && (
          <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Asset Tag</Typography>
          </ListItemButton>
        </List>
        )}
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          {show && (
            <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Tag with Pictures</Typography>
          </ListItemButton>
          )}
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
         {show && (
           <ListItemButton sx={{ pl:5.5}}>
           <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Category</Typography>
         </ListItemButton>
         )}
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Site/Location</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
         {show && (
           <ListItemButton sx={{ pl:5.5}}>
           <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Department</Typography>
         </ListItemButton>
         )}
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
         {show && (
           <ListItemButton sx={{ pl:5.5}}>
           <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Warranty Info.</Typography>
         </ListItemButton>
         )}
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
        {show && (
            <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Linked Assets</Typography>
          </ListItemButton>
        )}
        </List>
        </Link>
      </Collapse>

      <ListItemButton sx={{ pl: 5 }} onClick={handleClickAuditReports} >
          {show && (
             <div style={{display:'flex'}}>
             <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Audit Reports</Typography>
              {auditReports ? <ExpandLess style={{marginLeft:'3.7rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'3.7rem'}}/>}
             </div>
          )}
      </ListItemButton>
      <Collapse in={auditReports} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Asset Tag</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Audit Date</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Site/Location</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Non-Audited Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Location Discrepancy</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Funding</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Non Audited-Funding</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <ListItemButton sx={{ pl: 5 }} onClick={handleClickCheckOutReports} >
       {show && (
        <div style={{display:'flex'}}>
           <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Check-Out Reports</Typography>
            {checkOutReports ? <ExpandLess style={{marginLeft:'1.8rem',color:'#1F7DA9'}}/> : <ExpandMore style={{marginLeft:'1.8rem'}}/>}
        </div>
       )}
      </ListItemButton>
      <Collapse in={checkOutReports} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Person/ Employee</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Asset/Tag</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Due Date</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Past Date</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Suite/Location</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>in a Time Frame</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <ListItemButton sx={{ pl: 5 }} onClick={handleClickLeasedReports} >
      {show && (
        <div style={{display:'flex'}}>
            <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Leased Asset Reports</Typography>
            {leasedReports ? <ExpandLess style={{marginLeft:'0.75rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'0.75rem'}}/>}
        </div>
      )}    
      </ListItemButton>
      <Collapse in={leasedReports} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Customer</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Asset Tag</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Due Date</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Past Date</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>in a Time Frame</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <ListItemButton sx={{ pl: 5 }} onClick={handleClickMaintenanceReports} >
      {show && (
        <div style={{display:'flex'}}>
           <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Maintenance Reports</Typography>
            {maintenanceReports ? <ExpandLess style={{marginLeft:'1rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'1rem'}}/>}
        </div>
      )}    
      </ListItemButton>
      <Collapse in={maintenanceReports} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Asset Tag</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Assigned Person</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>History by Asset Tag</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>History by Date</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Past Due</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <ListItemButton sx={{ pl: 5 }} onClick={handleClickReservationReports} >
      {show && (
        <div style={{display:"flex"}}>
            <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Reservation Reports</Typography>
            {reservationReports ? <ExpandLess style={{marginLeft:'1.3rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'1.3rem'}}/>}
        </div>
      )}  
      </ListItemButton>
      <Collapse in={reservationReports} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Asset Tag</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <ListItemButton sx={{ pl: 5 }} onClick={handleClickStatusReports} >
      {show && (
        <div style={{display:'flex'}}>
            <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Status Reports</Typography>
            {statusReports ? <ExpandLess style={{marginLeft:'3.3rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'3.3rem'}}/>}
        </div>
      )}    
      </ListItemButton>
      <Collapse in={statusReports} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Assets Under Repaire</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Broken Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Disposed Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Donated Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Leased Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Lost/Missing Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Sold Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <ListItemButton sx={{ pl: 5 }} onClick={handleClickTransactionReports} >
      {show && (
        <div style={{display:'flex'}}>
           <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Transaction Reports</Typography>
            {transactionReports ? <ExpandLess style={{marginLeft:'1.3rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'1.3rem'}}/>}
        </div>
      )}     
      </ListItemButton>
      <Collapse in={transactionReports} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Add Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Broken Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Checkout/Checkin</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Dispose Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Donate Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Edit Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Lease out/Lease return</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Lost/Missing Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Move Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Repaire Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Reserve Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Sell Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Transaction History</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Actions by Users</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <ListItemButton sx={{ pl: 5 }} onClick={handleClickOtherReports} >
      {show && (
        <div style={{display:'flex'}}>
            <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Other Reports</Typography>
            {otherReports ? <ExpandLess style={{marginLeft:'3.5rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'3.5rem'}}/>}
        </div>
      )}    
      </ListItemButton>
      <Collapse in={otherReports} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Customer List</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Category List</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Department List</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Person/Employee List</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Site/Location List</Typography>
          </ListItemButton>
        </List>
        </Link>
       
        
      </Collapse>
        </List>
      </Collapse>
      <Divider style={{width:'100%'}}/>
      <ListItemButton selected={selectedIndex === 9}
          onClick={(event) => handleListItemClick(event, 9)}>
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
          <SupportOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.3rem',marginRight:'0.6rem'}} />
          </Tooltip>
       {show && (
        <div style={{display:'flex',alignItems:'center'}} onClick={handleClickHelpSupport}>
           <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Help/Support</Typography> 
          {helpsupport ? <ExpandLess style={{marginLeft:'2.5rem',color:"#1F7DA9"}}/> : <ExpandMore style={{marginLeft:'2.5rem'}}/>}
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
        {/* <Link href="/help-support/videos" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <SmartDisplayOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            {show && (
              <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Videos</Typography>
            )}
          </ListItemButton>
        </List>
        </Link> */}
        {/* <Link href="/help-support/user-reviews" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <StarBorderPurple500OutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            {show && (
              <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>User Reviews</Typography>
            )}
          </ListItemButton>
        </List>
        </Link> */}
        {/* <Link href="/help-support/change-log" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2.7 }}>
          <WatchLaterOutlinedIcon style={{color:"#1F7DA9",fontSize:'1.1rem',marginRight:'0.6rem'}} />
           {show && (
            <div style={{display:'flex'}}>
               <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Changelog</Typography>
            <ListItemIcon style={{marginLeft:'1rem'}}>
              <div style={{background:'#dc2626',width:'90%',height:'3.5vh ',borderRadius:'4px',paddingLeft:'0.6rem',paddingTop:'0.2rem',fontWeight:'bold'}}>
                <Typography sx={{fontSize:'0.8rem',color:'white'}}>Aug01</Typography>
              </div>
        </ListItemIcon>
            </div>
           )}
          </ListItemButton>
          
        </List>
        </Link> */}
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
        <ListItemIcon style={{marginLeft:'2rem'}}>
        </ListItemIcon>
      </ListItemButton>
    </>
  )
}
export default SidebarAssetComponent
