import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const ProjectReport = ({ users, updateUsers }:any) => {
    const [filterData, setFilterData] = useState();

    useEffect(() => {
      const newUser = users.filter((d) => d.projectName === filterData);
      updateUsers(newUser);
    }, [filterData]);

    const handleClick = (f) => {
      setFilterData(f);
    };

  return (
    <div>
        <Grid container style={{alignItems:'center'}}>
            <Grid item xs={4}>
                <Typography style={{fontSize:'0.9rem',fontWeight:'bold',marginLeft:'2.2rem'}}>Project Name</Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography>:</Typography>
            </Grid>
            <Grid item xs={6.4}>
                {/* <Autocomplete size="small" id="free-solo-demo" value={projectName} onChange={(e) => setFilterData(e.target.value)} freeSolo options={Array.from(new Set(users.map((option) => option.projectName)))}
                renderInput={(params) => <TextField {...params} />}/> */}
                <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" 
                  onChange={(e) => setFilterData(e.target.value)} size='small'>
                      {/* <MenuItem >ALL</MenuItem> */}
                    {users.map((f) => {
                    return(
                        <MenuItem value={f.projectName}>
                        {f.projectName}
                        </MenuItem>
                    )})} 
                </Select>
                </FormControl>
                </Box>
            </Grid>
            </Grid>
    </div>
  )
}

export default ProjectReport
