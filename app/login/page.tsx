"use client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  background: "rgba(16, 18, 27, 0.4)",
  boxShadow:'white 0px 3px 8px',
  backdropFilter: "blur(1px)",
  padding: theme.spacing(2),
  marginLeft: theme.spacing(1),
  marginTop: theme.spacing(3),
  color:"white",
  height:'60vh'
 
}));
const Container = styled(Paper)(({ theme }) => ({
  backgroundImage: `url(${"./images/loginbackground1.png"})`,
  padding: theme.spacing(3),
  height: "100vh",
  
}));
const FormGrid = styled(Grid)(({ theme }) => ({
  position: "absolute",
  top: "7%",
}));

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    e.preventDefault();
    if (userInfo?.email === "alchemy@gmail.com" && userInfo.password) {
      const res = await signIn("credentials", {
        email: userInfo.email,
        password: userInfo.password,
        redirect: false,
      });
      if (!res.error) {
        router.push("/");
      }
    }
  };
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <FormGrid>
            <Grid container>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item lg={5.8} sm={4} xs={2.5} md={5.6}></Grid>
                  <Grid item xs={5}>
                    <img src="./images/loginpagelogo.png" alt="LoginImage" style={{width:'85%'}} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4} lg={4} sm={2} xs={0}></Grid>
              <Grid item px={2} md={8} lg={8} sm={10} xs={12}>
                <Item>
                  <form onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                      <Typography pb={1.5} fontWeight={"bold"} style={{ fontFamily:"cursive",fontSize:'1.6rem'}}>
                        Login
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography py={1} fontSize={"1rem"}>Email Address <span style={{color:'red'}}>*</span></Typography>
                      <TextField size="small" fullWidth placeholder="alchemy@gmail.com" value={userInfo.email}
                      style={{background:'#f8fafc',borderRadius:'5px'}} onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })} type="email" required/>
                    </Grid>
                    <Grid item xs={12} py={2}>
                      <Typography py={1} fontSize={"1rem"}> Password <span style={{color:'red'}}>*</span></Typography>
                      <TextField size="small" type="password" fullWidth placeholder="Enter Your Password" value={userInfo.password}
                     style={{background:'#f8fafc',borderRadius:'5px'}} onChange={({ target }) =>setUserInfo({ ...userInfo, password: target.value })} required/>
                    </Grid>
                    <Grid item xs={12} mt={5}>
                      <Button fullWidth type="submit" value="Login" 
                      style={{fontSize:'1rem' ,color:'white',background: "rgba(16, 18, 27, 0.4)",boxShadow:'white 0px 3px 8px',backdropFilter: "blur(1px)",}} >
                        Log In
                      </Button>
                    </Grid>
                  </form>
                </Item>
              </Grid>
            </Grid>
          </FormGrid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
