"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DepartmentWiseReport from './departmentwise';
import ClientWiseHomeComponent from './clientwise';

export default function ReportsHomeComponent() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Client Wise" value="1" />
            <Tab label="Department Wise" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
         <div style={{marginTop:'-1.2rem'}}>
         <ClientWiseHomeComponent/>
         </div>
        </TabPanel>
        <TabPanel value="2">
          <div style={{marginTop:'-1.2rem'}}>
          <DepartmentWiseReport/>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
