import ClearAllIcon from '@mui/icons-material/ClearAll';
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, Fade, Grid, Tooltip, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  typography: {
      fontFamily:"cursive",
      fontSize:'1.9rem',
      paddingLeft:'0.6rem',
      fontWeight:'bold',
      marginRight:'1rem',
      marginLeft:'1rem',
      color:'#f75757'
   },
   typographyspan: {
    fontFamily:"cursive",
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
         <Typography style={{ fontFamily:"cursive",fontSize:'1.9rem',paddingLeft:'0.6rem',fontWeight:'bold', 
         marginRight:'1rem', marginLeft:'1rem',color:'#f75757'}}>Alchemy</Typography>
         <Divider style={{marginLeft:'1rem',width:'100%'}}>
         <Typography style={{fontFamily:"cursive",fontSize:'1.1rem', fontWeight:'bold', color:'#84cc16'}}>Asset Tool</Typography>
         </Divider>
        </Grid>
      )}
      <div>
        <div onClick={handleMenu}>
          {show ? <MenuIcon style={{marginLeft:'1rem',color:'black',cursor:'pointer'}}/>   : <Tooltip title="Expand Menu" arrow TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }} placement="right-start"><ClearAllIcon style={{marginTop:'1rem',marginLeft:'1rem',color:'#f75757',cursor:'pointer',fontSize:'1.7rem'}}/> </Tooltip>}
        </div>
      </div>
    </div>
  );
};

export default Logo;
