import React, { useState } from "react";
import { Grid } from "@mui/material";
import HeaderComponent from "./Header/index";
import Logo from "./Sidebar/Logo";
import ProjectSidebar from "./Sidebar/ProjectSidebar/project.sidebar";
import TestSidebar from "../common/Sidebar/ProjectSidebar/testsidebar/TestSidebar";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(true);

  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <>
        <Grid container>
          <Grid pr={1} item  xs={show ? 1.5 : 1.5}sm={show ? 1.5 : 0.5}  md={show ? 2 : 0.5} lg={show ? 2 : 0.5}
            textAlign={show ? "right" : "left"} style={{ backgroundColor: "white" }} >
            <Logo handleMenu={handleMenu} show={show} />
            {/* <SidebarComponent show={show} /> */}
            {/* <ProjectSidebar show={show} /> */}
            <TestSidebar/>
          </Grid>
          <Grid item xs={show ? 10.5 : 10.5} sm={show ? 10.5 : 11.5} md={show ? 10 : 11.5} lg={show ? 10 : 11.5}>
            <HeaderComponent />
            {children}
          </Grid>
        </Grid>
      {/* {!session && <div>{children}</div>} */}
    </>
  );
};

export default LayoutComponent;
