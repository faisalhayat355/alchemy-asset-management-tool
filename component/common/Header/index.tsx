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
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
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
