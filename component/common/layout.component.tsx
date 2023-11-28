import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import SidebarAssetComponent from "./Sidebar/sidebarAsset";
import HeaderComponent from "./Header";
import Logo from "./Sidebar/Logo";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const [show, setShow] = useState(true);

  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      {session && (
         <Grid container>
         <Grid item  xs={show ? 1.5 : 1.5}sm={show ? 1.5 : 0.5}  md={show ? 2 : 0.5} lg={show ? 2 : 0.5}
           textAlign={show ? "right" : "left"} style={{ backgroundColor: "#f8fafc",height:'99.9vh' }} >
           <Logo handleMenu={handleMenu} show={show} />
           {/* <SidebarComponent show={show} /> */}
           {/* <ProjectSidebar show={show} /> */}
           <SidebarAssetComponent show={show}/>
           {/* <AssetSidebarComponent/> */}
         </Grid>
         <Grid item xs={show ? 10.5 : 10.5} sm={show ? 10.5 : 11.5} md={show ? 10 : 11.5} lg={show ? 10 : 11.5} style={{background:'#eff6ff',height:'100vh'}}>
           <HeaderComponent />
           <div style={{paddingLeft:'0.5rem',overflowY:'auto',borderTop:'3px solid #dbeafe',borderRadius:"8px 8px 0px 0px"}}>
           {children}
           </div>
         </Grid>
       </Grid>
      )}
      {!session && <div>{children}</div>}
    </>
  );
};

export default LayoutComponent;
