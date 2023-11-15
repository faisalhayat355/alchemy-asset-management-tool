"use client"
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Link from "next/link";
import AssetsInfoComponent from './infocomponent/InfoComponent';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  typography: {
     fontFamily:"Papyrus",
     fontSize:'1.3rem'
  },
});

const ListItemComponent = ({users}:any) => {
  const classes = useStyles();

  return (
    <>
    <Box>
     <Grid container sx={{padding:'1rem'}}>
       <Grid item xs={12}>
         <Typography fontWeight={"bold"} className={classes.typography}>List of Assets</Typography>
       </Grid>
     </Grid>
     <Grid container sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #f87171',paddingLeft:'1rem',paddingTop:'1rem',paddingBottom:'1rem',width:'97.5%',marginLeft:'1rem',alignItems:'center',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
      <Grid item xs={9.8}>
      <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 350,height:"7vh" }}>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Asset here..."
        inputProps={{ 'aria-label': 'search google maps' }}/>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <SearchIcon />
      </IconButton>
    </Paper>
      </Grid>
      <Grid item xs={2} sx={{display:'flex',justifyContent:'flex-end'}}>
      <Link href="/assets/addassets" passHref style={{ textDecoration: "none" }}>
        <Button variant='outlined' size='small'> + Add Asset</Button>
      </Link>
      </Grid>
      <Divider style={{width:'98.5%',marginTop:'1rem'}}/>
        <Grid container mt={1} sx={{border:'1px solid #e2e8f0',padding:'0.2rem',width:'98.5%',borderRadius:'5px'}}>
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
