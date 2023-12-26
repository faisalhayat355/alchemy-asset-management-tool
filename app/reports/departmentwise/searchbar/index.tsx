import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'

const DepartmentWiseSearchbarComponent = ({ users, updateUsers }:any) => {
    const [filterData, setFilterData] = useState();

    useEffect(() => {
      const newUser = users.filter((d) => d.name === filterData);
      updateUsers(newUser);
    }, [filterData]);

  return (
    <div>
        <Autocomplete size="small" freeSolo disableClearable options={Array.from(new Set(users.map((f) => f.name)))}
            renderInput={(params) => (
            <TextField {...params} InputProps={{...params.InputProps,type: "search",}}label="Search Here..."/>)}
            onChange={(event, value) => setFilterData(value)}/>
    </div>
  )
}

export default DepartmentWiseSearchbarComponent
