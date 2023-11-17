import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";

interface logoProps {
  show: boolean;
  handleMenu: () => void;
}
const Logo = ({ handleMenu, show }: logoProps) => {
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
         <img src="./images/alchemyasset.png" alt="logo not found" style={{ width: "90%" }}/>
        </Grid>
      )}
      <div>
        <IconButton onClick={handleMenu}>
          {show ? <MenuIcon /> : <ListIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default Logo;
