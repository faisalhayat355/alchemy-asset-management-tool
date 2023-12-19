import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { IconButton, Tooltip } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import EmployeeExcellDownload from '../../utility/employee/employeeexcell';
import EmployeePDFDownload from '../../utility/employee/employeepdf';


const EmployeeExportComponent = ({users}:any) => {
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
            <EmployeePDFDownload users={users}/>
          </MenuItem>
          {/* <MenuItem onClick={handleClose}>
            <AssetCSVDownload users={users}/>
         </MenuItem> */}
          <MenuItem onClick={handleClose}>
            <EmployeeExcellDownload users={users}/>
          </MenuItem>
      </Menu>
    </>
  )
}

export default EmployeeExportComponent
