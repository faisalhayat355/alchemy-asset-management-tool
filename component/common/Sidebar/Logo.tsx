import ClearAllIcon from '@mui/icons-material/ClearAll';
import MenuIcon from "@mui/icons-material/Menu";
import { Fade, Grid, Tooltip } from "@mui/material";
import Image from 'next/image';

type logoProps = {
  show: boolean;
  handleMenu: () => void;
}
const Logo = ({ handleMenu, show }: logoProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center", paddingBottom: "1rem" }}>
      {show && (
        <Grid textAlign={"left"} pt={1} display={{ xs: "none", sm: "none", md: "block" }}>
         {/* <img src="./images/alchemyasset4.png" alt="logo not found" style={{ width: "90%",marginLeft:'0.5rem' }}/> */}
         {/* <Typography style={{ fontFamily:"cursive",fontSize:'1.9rem',paddingLeft:'0.6rem',fontWeight:'bold', 
         marginRight:'1rem', marginLeft:'1rem',color:'#1F7DA9'}}>Alchemy</Typography>
         <Divider style={{marginLeft:'1rem',width:'100%'}}>
         <Typography style={{fontFamily:"cursive",fontSize:'1.1rem', fontWeight:'bold', color:'#414242'}}>Asset Tool</Typography>
         </Divider> */}
         <Image loading='eager' src="/images/alchemyasset4.png" width={161} height={70} alt="logo not found" style={{marginLeft:'0.5rem'}}/>
        </Grid>
      )}
      <div>
        <div onClick={handleMenu}>
          {show ? <MenuIcon style={{marginLeft:'0.7rem',color:'#04425b',cursor:'pointer',marginTop:'1rem'}}/> : <Tooltip title="Expand Menu" arrow TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }} placement="right-start"><ClearAllIcon style={{marginTop:'1rem',marginLeft:'1.3rem',color:'#1F7DA9',cursor:'pointer',fontSize:'1.7rem'}}/> </Tooltip>}
        </div>
      </div>
    </div>
  );
};

export default Logo;
