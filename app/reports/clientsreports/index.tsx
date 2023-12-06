import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Typography } from '@mui/material';

const ClientsReport = ({ users, updateUsers }:any) => {

  const [filterData, setFilterData] = useState();

    useEffect(() => {
      const newUser = users.filter((d) => d.client === filterData);
      updateUsers(newUser);
    }, [filterData]);

  return (
    <div>
       <Grid container style={{alignItems:'center'}}>
                <Grid item xs={4} sx={{textAlign:'center'}}>
                    <Typography style={{fontSize:'0.9rem',fontWeight:'bold',marginLeft:'2.2rem'}}>Clients</Typography>
                </Grid>
                <Grid item xs={1}>
                <Typography>:</Typography>
                </Grid>
                <Grid item xs={6.7}>
                {/* <Autocomplete size="small" id="free-solo-demo" freeSolo options={Array.from(new Set(data.map((option) => option.client)))}
                renderInput={(params) => <TextField {...params}/>}/> */}

                <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                <Select labelId="demo-simple-select-label"
                    id="demo-simple-select" onChange={(e) => setFilterData(e.target.value)} size='small' >
                    {users.map((f) => {
                    return <MenuItem value={f.client}>{f.client}</MenuItem>;
                    })} 
                </Select>
                </FormControl>
                </Box>
                </Grid>
            </Grid>
    </div>
  )
}

export default ClientsReport
