"use client";
import Logout from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { default as Settings, default as SettingsIcon } from "@mui/icons-material/Settings";
import { Box, Divider, Grid, IconButton, ListItemIcon, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import { headerstyle as style } from "./header.style";

const HeaderComponent = () => {
  const { data: session } = useSession();
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);
  const open = Boolean(openMenu);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMenu(event.currentTarget);
  };
  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <Grid container style={style.headercontainer}>
      <Grid item xs={12}>
        <Grid item lg={12} md={12} sm={12} xs={12} py={0.5} px={0.5} display={"flex"} justifyContent={"flex-end"}>
          <Stack direction="row">
            <IconButton>
              <MailIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <SettingsIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon fontSize="small" />
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true" aria-expanded={open ? "true" : undefined}>
            <Avatar sx={{ width: 32, height: 32 }} alt="Image not Found" src="data:image/jpeg;base64,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" />
            {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu anchorEl={openMenu} id="account-menu"
         open={open} onClose={handleClose} onClick={handleClose}
          PaperProps={{
          elevation: 0,
          sx: { overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {width: 32, height: 32, ml: -0.5, mr: 1},
            "&:before": {content: '""', display: "block", position: "absolute",
              top: 0, right: 14, width: 10, height: 10, bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)", zIndex: 0} }}}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
              <MenuItem onClick={handleClose}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={() => signOut()}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
        </Menu>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderComponent;
