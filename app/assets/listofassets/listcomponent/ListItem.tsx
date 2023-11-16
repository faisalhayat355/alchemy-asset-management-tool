"use client"
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Link from "next/link";
import AssetsInfoComponent from '../infocomponent/InfoComponent';
import { makeStyles } from '@mui/styles';
import { IAssets } from '../models/assets.model';

const useStyles = makeStyles({
  typography: {
     fontFamily:"Papyrus",
     fontSize:'1.3rem'
  },
});

type AssetsProps = {
    users: Array<IAssets>;
  };

const ListItemComponent = ({users}:AssetsProps) => {
  const classes = useStyles();

  return (
    <>
    <Box>
     <Grid container sx={{background:'white',paddingLeft:'1rem',paddingBottom:'1rem',width:'97.5%',marginLeft:'1rem',alignItems:'center'}}>
        <Grid container sx={{border:'1px solid #e2e8f0',padding:'0.2rem',width:'98.5%',borderRadius:'5px'}}>
        <Grid item xs={2.5}>
            <Typography fontWeight={"bold"} fontSize={"0.8rem"} color={"#334155"} ml={1}>Asset Tag ID</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography fontWeight={"bold"} fontSize={"0.8rem"} color={"#334155"}>Department</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography fontWeight={"bold"} fontSize={"0.8rem"} color={"#334155"}>Brand</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography fontWeight={"bold"} fontSize={"0.8rem"} color={"#334155"}>Model</Typography>
        </Grid>
        <Grid item xs={2.5}>
            <Typography fontWeight={"bold"} fontSize={"0.8rem"} color={"#334155"}>Serial No.</Typography>
        </Grid>
        <Grid item xs={1}>
            <Typography fontWeight={"bold"} fontSize={"0.8rem"} color={"#334155"}>Action</Typography>
        </Grid>
        </Grid>
        {users.map((items)=>{
            return(
               <>
                <AssetsInfoComponent items={items}/>
               </>
            )
        })}
        
     </Grid>     
    </Box>
   </>
  )
}

export default ListItemComponent
