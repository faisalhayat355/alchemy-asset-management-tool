import React from "react";
import { Divider, Grid, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  typography: {
      fontFamily:"Lucida Handwriting",
      fontSize:'1.9rem',
      paddingLeft:'0.6rem',
      fontWeight:'bold',
      marginRight:'1rem',
      marginLeft:'1rem',
      color:'#f75757'
   },
   typographyspan: {
    fontFamily:"Papyrus",
    fontSize:'1.1rem',
    fontWeight:'bold',
    color:'#84cc16'
 }
});



interface logoProps {
  show: boolean;
  handleMenu: () => void;
}
const Logo = ({ handleMenu, show }: logoProps) => {
  const classes = useStyles();
  return (
    <div
      style={{ display: "flex", alignItems: "center", paddingBottom: "1rem" }}
    >
      {show && (
        <Grid
          textAlign={"left"}
          pt={1}
          display={{ xs: "none", sm: "none", md: "block" }}
        >
         {/* <img src="./images/alchemyasset.png" alt="logo not found" style={{ width: "90%" }}/> */}
         <Typography className={classes.typography}>Alchemy</Typography>
         <Divider style={{marginLeft:'1rem',paddingRight:'1rem'}}>
         <Typography className={classes.typographyspan}>Asset Tool</Typography>
         </Divider>
        </Grid>
      )}
      <div>
        <IconButton onClick={handleMenu}>
          {show ? <MenuIcon/> : <ListIcon style={{marginLeft:'0.6rem',color:'#f75757'}}/>}
        </IconButton>
      </div>
    </div>
  );
};

export default Logo;
