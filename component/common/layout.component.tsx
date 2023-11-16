import React, { useState } from "react";
import { Grid } from "@mui/material";
import HeaderComponent from "./Header/index";
import Logo from "./Sidebar/Logo";
import ProjectSidebar from "./Sidebar/ProjectSidebar/project.sidebar";
import TestSidebar from "./Sidebar/ProjectSidebar/testsidebar/TestSidebar";
import { useSession } from "next-auth/react";
import AssetSidebarComponent from "./Sidebar/assetsidebar/assetSidebar"

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(true);
  const { data: session } = useSession();
  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <>
    {/* {session && ( */}
        <Grid container>
          <Grid item  xs={show ? 1.5 : 1.5}sm={show ? 1.5 : 0.5}  md={show ? 2 : 0.5} lg={show ? 2 : 0.5}
            textAlign={show ? "right" : "left"} style={{ backgroundColor: "#f8fafc",height:'99.3vh' }} >
            <Logo handleMenu={handleMenu} show={show} />
            {/* <SidebarComponent show={show} /> */}
            {/* <ProjectSidebar show={show} /> */}
            <TestSidebar show={show}/>
            {/* <AssetSidebarComponent/> */}
          </Grid>
          <Grid item xs={show ? 10.5 : 10.5} sm={show ? 10.5 : 11.5} md={show ? 10 : 11.5} lg={show ? 10 : 11.5}>
            <HeaderComponent />
            <div style={{background:'#fef2f2',height:'91vh',paddingLeft:'0.5rem'}}>
            {children}
            </div>
          </Grid>
        </Grid>
    {/* )}
    {!session && <div>{children}</div>} */}
    </>
  );
};

export default LayoutComponent;