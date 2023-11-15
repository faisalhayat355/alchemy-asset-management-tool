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
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import PersonAddDisabledOutlinedIcon from '@mui/icons-material/PersonAddDisabledOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StartIcon from '@mui/icons-material/Start';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TableChartIcon from '@mui/icons-material/TableChart';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import SpokeIcon from '@mui/icons-material/Spoke';
import DescriptionIcon from '@mui/icons-material/Description';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const TestSidebar = () => {
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


  
  return (
    <div style={{height:'81.5vh',overflowY:'auto'}}>
      <List sx={{ width: "100%", maxWidth: 360}}component="nav" aria-labelledby="nested-list-subheader">
      <ListItemButton onClick={handleClickProfile}>
        <FlagOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
        <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Profile</Typography> 
        {profile ? <ExpandLess /> : <ExpandMore />}
        <ListItemIcon style={{marginLeft:'2rem'}}>
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={profile} timeout="auto" unmountOnExit>
      <Link href="/alerts/assetpastdue" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <Person2OutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>My Profile</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/assetpastdue" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <LockOpenOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Change Password</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/assetpastdue" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <ExitToAppOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Log out</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
    <Divider style={{width:'100%'}}/>
      <Collapse in={profile} timeout="auto" unmountOnExit style={{marginTop:'-0.1rem'}}>
      <Link href="/alerts/setupalerts" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <Person2OutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.9rem'}}>Account Details</Typography>
          </ListItemButton>
        </List>
        </Link>

        <Link href="/alerts/setupalerts" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <DiamondOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.9rem'}}>Subscription Plan</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
         <Link href="/dashboard" passHref style={{ textDecoration: "none" }}>
      <ListItemButton>
          <HomeOutlinedIcon style={{color:"#f75757",fontSize:'1.4rem',marginRight:'0.6rem'}}/>
        <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'bold'}}>Dashboard</Typography>
      </ListItemButton>
      </Link>
      <Divider style={{width:'100%'}}/>
      <ListItemButton onClick={handleClickAlerts}>
        <FlagOutlinedIcon style={{color:"#f75757",fontSize:'1.4rem',marginRight:'0.6rem'}} />
        <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Alerts</Typography>
        {alerts ? <ExpandLess /> : <ExpandMore />}
        <ListItemIcon style={{marginLeft:'2rem'}}>
        <Badge color="error" overlap="circular" badgeContent="0" ></Badge>
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={alerts} timeout="auto" unmountOnExit>
      <Link href="/alerts/assetpastdue" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Assets Past Due</Typography>
            <Badge color="primary" overlap="circular" badgeContent="0" style={{marginLeft:'3.2rem'}}></Badge>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <Collapse in={alerts} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Leases Expiring</Typography>
            <Badge color="warning" overlap="circular" badgeContent="0" style={{marginLeft:'3.4rem'}}></Badge>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <Collapse in={alerts} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/maintainancedue" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Maintainance Due</Typography>
            <Badge color="secondary" overlap="circular" badgeContent="0" style={{marginLeft:'2.7rem'}}></Badge>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <Collapse in={alerts} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/maintananceoverdue" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Maintainance Overdue</Typography>
            <Badge color="secondary" overlap="circular" badgeContent="0" style={{marginLeft:'1.1rem'}}></Badge>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <Collapse in={alerts} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/warrantiesexpire" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Warranties Expiring</Typography>
            <Badge color="error" overlap="circular" badgeContent="0" style={{marginLeft:'2.3rem'}}></Badge>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
    <Divider style={{width:'100%'}}/>
      <Collapse in={alerts} timeout="auto" unmountOnExit style={{marginTop:'-0.1rem'}}>
      <Link href="/alerts/setupalerts" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <BuildOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.9rem'}}>Setup Alerts</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <ListItemButton onClick={handleClickAssets}>
        <FlagOutlinedIcon style={{color:"#f75757",fontSize:'1.4rem',marginRight:'0.6rem'}} />
        <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Assets</Typography> 
        {assets ? <ExpandLess /> : <ExpandMore />}
        <ListItemIcon style={{marginLeft:'2rem'}}>
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={assets} timeout="auto" unmountOnExit>
      <Link href="/assets/listofassets" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <ListOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>List of Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/addassets" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <AddCircleOutlineOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Add an Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Divider style={{width:'100%'}}/>
        <Link href="/assets/checkin" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <PersonAddOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Check in</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/checkout" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <PersonAddDisabledOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Check out</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/lease" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <SendOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Lease</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/leasereturn" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <SendOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Lease Return</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/dispose" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <RecyclingOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Dispose</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/maintanance" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <MiscellaneousServicesOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Maintenance</Typography>
          </ListItemButton>
        </List>
        </Link>

        <Link href="/assets/move" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <OpenWithOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Move</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/assets/reserve" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <CalendarMonthOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Reserve</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <Divider style={{width:'100%'}}/>

      <ListItemButton onClick={handleClickLists}>
        <ListOutlinedIcon style={{color:"#f75757",fontSize:'1.4rem',marginRight:'0.6rem'}} />
        <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Lists</Typography>
        {lists ? <ExpandLess /> : <ExpandMore />}
        <ListItemIcon style={{marginLeft:'2rem'}}>
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={lists} timeout="auto" unmountOnExit>
      <Link href="/lists/listofassets" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>List of Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/lists/listofmaintanance" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>List of Maintenance</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/lists/listofwarranties" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>List of Warranties</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <Divider style={{width:'100%'}}/>

      <ListItemButton onClick={handleClickReports}>
        <DescriptionOutlinedIcon style={{color:"#f75757",fontSize:'1.4rem',marginRight:'0.6rem'}} />
        <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Reports</Typography>
        {reports ? <ExpandLess /> : <ExpandMore />}
        <ListItemIcon style={{marginLeft:'2rem'}}>
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={reports} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/warrantiesexpire" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 5 }}>
            <Typography sx={{color:'#414242',fontSize:'0.9rem'}}>Automated Reports</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <Divider style={{width:'100%'}}/>
      <Collapse in={reports} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 5 }} onClick={handleClickCustomReports} >
            <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Custom Reports</Typography>
            {customReports ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={customReports} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>New Report</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>-Asset List</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>

      <ListItemButton sx={{ pl: 5 }} onClick={handleClickAssetReports} >
            <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Asset Reports</Typography>
            {assetReports ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={assetReports} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
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
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Tag with Pictures</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Category</Typography>
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
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Department</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Warranty Info.</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/alerts/leaseexpiring" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>by Linked Assets</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>


      <ListItemButton sx={{ pl: 5 }} onClick={handleClickAuditReports} >
            <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Audit Reports</Typography>
            {auditReports ? <ExpandLess /> : <ExpandMore />}
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
            <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Check-Out Reports</Typography>
            {checkOutReports ? <ExpandLess /> : <ExpandMore />}
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
            <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Leased Asset Reports</Typography>
            {leasedReports ? <ExpandLess /> : <ExpandMore />}
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
            <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Maintenance Reports</Typography>
            {maintenanceReports ? <ExpandLess /> : <ExpandMore />}
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
            <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Reservation Reports</Typography>
            {reservationReports ? <ExpandLess /> : <ExpandMore />}
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
            <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Status Reports</Typography>
            {statusReports ? <ExpandLess /> : <ExpandMore />}
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
            <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Transaction Reports</Typography>
            {transactionReports ? <ExpandLess /> : <ExpandMore />}
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
            <Typography sx={{color:'#414242',fontSize:'0.75rem',fontWeight:'550'}}>Other Reports</Typography>
            {otherReports ? <ExpandLess /> : <ExpandMore />}
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

      <ListItemButton onClick={handleClickTools}>
        <BuildOutlinedIcon style={{color:"#f75757",fontSize:'1.3rem',marginRight:'0.6rem'}} />
        <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Tools</Typography> 
        {tools ? <ExpandLess /> : <ExpandMore />}
        <ListItemIcon style={{marginLeft:'2rem'}}>
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={tools} timeout="auto" unmountOnExit>
      <Link href="/tools/import" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <FileUploadOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Import</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/tools/export" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <FileDownloadOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Export</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/tools/documentgallery" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <CollectionsBookmarkOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Documents Gallery</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/tools/imagegallery" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <BrokenImageOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Image Gallery</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/tools/audit" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <BorderColorOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Audit</Typography>
          </ListItemButton>
        </List>
        </Link>
        
      </Collapse>
      <Divider style={{width:'100%'}}/>
      <ListItemButton onClick={handleClickAdvanced}>
        <WorkOutlineOutlinedIcon style={{color:"#f75757",fontSize:'1.4rem',marginRight:'0.6rem'}} />
        <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Advanced</Typography> 
        {advanced ? <ExpandLess /> : <ExpandMore />}
        <ListItemIcon style={{marginLeft:'2rem'}}>
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={advanced} timeout="auto" unmountOnExit>
      <Link href="/advanced/persons-employee" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <Person2OutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Persons/Employee</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/advanced/customers" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <SupportAgentOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Customers</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/advanced/users" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <PeopleAltOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Users</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/advanced/security-groups" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <ManageAccountsOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Security Groups</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <Divider style={{width:'100%'}}/>

      <ListItemButton 
      onClick={handleClickSetup}
      >
        <SettingsOutlinedIcon style={{color:"#f75757",fontSize:'1.4rem',marginRight:'0.6rem'}} />
        <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Setup</Typography> 
        {setup ? <ExpandLess /> : <ExpandMore />}
        <ListItemIcon style={{marginLeft:'2rem'}}>
        </ListItemIcon>
      </ListItemButton>
      
      
      
      
      
      
      
      <Collapse in={setup} timeout="auto" unmountOnExit>
      <Link href="/setup/company-info" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <WorkOutlineIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Company Info</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/sites" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <LocationOnIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Sites</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/location" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <StartIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Locations</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/categories" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <ListIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Categories</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/department" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <GridViewIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Departments</Typography>
          </ListItemButton>
        </List>
        </Link>
        
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }} onClick={handleClickDatabase}>
          <ViewStreamIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Databases</Typography>
            {database ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={database} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
          <Link href="/setup/database/asset-table" passHref style={{ textDecoration: "none" }}>
          <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Asset Table</Typography>
          </ListItemButton>
          </List>
          </Link>
        <Link href="/setup/database/person-employee" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Persons/Employee</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/database/customer-table" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Customers Table</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/database/maintanance-table" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Maintanance Table</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/database/warranties-table" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Warranties Table</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/database/contract-table" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Contract Table</Typography>
          </ListItemButton>
        </List>
        </Link>
          </Collapse>
        </List>
        <Link href="/setup/events" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <EventAvailableIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Events</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/table-option" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <TableChartIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Table Options</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/options" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <DisplaySettingsIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Options</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/managed-dashboard" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <SpokeIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Managed Dashboard</Typography>
          </ListItemButton>
        </List>
        </Link>
        {/* <Link href="/alerts/assetpastdue" passHref style={{ textDecoration: "none" }}> */}
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }} onClick={handleClickCustomizeForms}>
          <DescriptionIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Customize Forms</Typography>
            {customizeForms ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={customizeForms} timeout="auto" unmountOnExit style={{marginTop:'-0.5rem'}}>
      <Link href="/setup/customize-forms/asset-forms" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Asset Form</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/database/person-employee" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Persons/Employee</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/customize-forms/customer-forms" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Customers Form</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/customize-forms/maintanance-form" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Maintanance Form</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/customize-forms/warranty-form" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Warranty Form</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/setup/customize-forms/contract-form" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:5.5}}>
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}><span style={{marginRight:'0.3rem ',fontSize:'0.6rem'}}>o</span>Contract Form</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
        </List>
        {/* </Link> */}
        <Link href="/setup/customize-emails" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <ContactMailIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Customize Emails</Typography>
          </ListItemButton>
        </List>
        </Link>
      </Collapse>
      <Divider style={{width:'100%'}}/>

      <ListItemButton onClick={handleClickHelpSupport}>
        <SupportOutlinedIcon style={{color:"#f75757",fontSize:'1.3rem',marginRight:'0.6rem'}} />
        <Typography sx={{color:'#414242',fontSize:'0.9rem',fontWeight:'550'}}>Help/Support</Typography> 
        {helpsupport ? <ExpandLess /> : <ExpandMore />}
        <ListItemIcon style={{marginLeft:'2rem'}}>
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={helpsupport} timeout="auto" unmountOnExit>
      <Link href="/help-support/aboutus" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <ErrorOutlineOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>About Us</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/help-support/contactus" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <CallOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Contact Us</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/help-support/terms-of-service" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <FavoriteBorderOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Terms of Service</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/help-support/privacy-policy" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <SentimentSatisfiedAltOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Privacy Policy</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/help-support/videos" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <SmartDisplayOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Videos</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/help-support/user-reviews" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <StarBorderPurple500OutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>User Reviews</Typography>
          </ListItemButton>
        </List>
        </Link>
        <Link href="/help-support/change-log" passHref style={{ textDecoration: "none" }}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3.7 }}>
          <WatchLaterOutlinedIcon style={{color:"#f75757",fontSize:'1.1rem',marginRight:'0.6rem'}} />
            <Typography sx={{color:'#414242',fontSize:'0.8rem'}}>Changelog</Typography>
            <ListItemIcon style={{marginLeft:'1rem'}}>
        <div style={{background:'#dc2626',width:'90%',height:'3.5vh ',borderRadius:'4px',paddingLeft:'0.6rem',paddingTop:'0.2rem',fontWeight:'bold'}}>
          <Typography sx={{fontSize:'0.8rem',color:'white'}}>Aug01</Typography>
        </div>
        </ListItemIcon>
          </ListItemButton>
          
        </List>
        </Link>
      </Collapse>
      <Divider style={{width:'100%'}}/>



    </List>
    </div>
  )
}

export default TestSidebar
