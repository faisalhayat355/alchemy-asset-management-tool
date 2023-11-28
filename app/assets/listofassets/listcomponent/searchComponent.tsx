import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Divider, IconButton, Paper } from '@mui/material';
import { IAssets } from '../models/assets.model';


type AssetSearchComponentProps = {
  users: Array<IAssets>;

}

const AssetSearchComponent = ({setData,users}:any) => {
  // const [name, setName] = useState();


  const handleClick = (value) => {
    const newItems = users.filter((u) => u.brand.toLowerCase().includes(value));
    setData(newItems);
    if (value === ""){
      setData([])
    }
  };

  // const filterByName = (brand: string) =>  (f): boolean => f.brand.toLowerCase().includes(brand.toLowerCase());

  // const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const _searchValue = e.target.value;
  //   setSearchStr(_searchValue);
  //   if (_searchValue == "") {
  //     onSearchHandler(users);
  //     return;
  //   }
  //   onSearchHandler(users.filter(filterByName(_searchValue)));
  // };

  // const filterByName = (brand: string) =>  (f: IAssets): boolean => f.brand.toLowerCase().includes(brand.toLowerCase());

  // const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const _searchValue = e.target.value;
  //   setSearchStr(_searchValue);
  //   if (_searchValue == "") {
  //     onSearchHandler(users);
  //     return;
  //   }
  //   onSearchHandler(users.filter(filterByName(_searchValue)));
  // };

  return (
    <div>
      <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 350,height:"7vh" }}>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Asset here..."
        inputProps={{ 'aria-label': 'search google maps' }}  
        // value={name}
        onChange={(e) => handleClick (e.target.value)}/>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: '10px' }} aria-label="directions">
        <SearchIcon/>
      </IconButton>
    </Paper>
    </div>
  )
}

export default AssetSearchComponent
