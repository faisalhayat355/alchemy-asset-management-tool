import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ActiveStatus from './activeStatus';
import DeactiveStatus from './deactiveStatus';
import ScrappedStatus from './scrappedStatus';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function StatusTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  textColor="secondary"  indicatorColor="secondary">
          <Tab label="Active" {...a11yProps(0)} />
          <Tab label="Deactive" {...a11yProps(1)} />
          <Tab label="Scrapped" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <ActiveStatus/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DeactiveStatus/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ScrappedStatus/>
      </CustomTabPanel>
    </Box>
  );
}
