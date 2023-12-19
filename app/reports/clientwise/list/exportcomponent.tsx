import React from 'react'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { IconButton, Tooltip, Typography } from '@mui/material';
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ClientReportPDFDownload from '../../../utility/clientsreport/clientpdf';
import ClientReportExcellDownload from '../../../utility/clientsreport/clientexcell';
// import AssetCSVDownload from '../utility/asset/assetcsv';
// import AssetPDFDownload from '../utility/asset/assetpdf';
// import AssetExcellDownload from '../utility/asset/assetexcell';



const ReportsExportComponent = ({users}:any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Tooltip title="Import">
      <IconButton  onClick={handleClick} >
          <FileDownloadOutlinedIcon style={{fontSize:'1.3rem'}}/>
      </IconButton>
    </Tooltip>
      
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
          MenuListProps={{'aria-labelledby': 'basic-button',}}>
          <MenuItem onClick={handleClose}>
            <ClientReportPDFDownload users={users}/>
          </MenuItem>
          {/* <MenuItem onClick={handleClose}>
            <AssetCSVDownload users={users}/>
         </MenuItem> */}
          <MenuItem onClick={handleClose}>
            <ClientReportExcellDownload users={users}/>
          </MenuItem>
      </Menu>
    </>
  )
}

export default ReportsExportComponent
