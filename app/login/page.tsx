"use client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  typography: {
      fontFamily:"Papyrus",
      fontSize:'1.5rem'
   }
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  marginLeft: theme.spacing(1),
  color: theme.palette.text.primary,
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
  const classes = useStyles();
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
                  <Grid item lg={6} sm={4} xs={2.5} md={5.6}></Grid>
                  <Grid item xs={5}>
                    <img src="./images/alchemyasset.png" alt="LoginImage" style={{width:'80%'}} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4} lg={4} sm={2} xs={0}></Grid>
              <Grid item px={2} md={8} lg={8} sm={10} xs={12}>
                <Item>
                  <form onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                      <Typography pb={1.5} fontWeight={"bold"} className={classes.typography}>
                        Login
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography py={1}>
                       Email Address*
                      </Typography>
                      <TextField size="small" fullWidth placeholder="user@genesis.com" value={userInfo.email}
                      onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })} type="email"/>
                    </Grid>
                    <Grid item xs={12} py={2}>
                      <Typography py={1}> Password</Typography>
                      <TextField size="small" type="password" fullWidth placeholder="Enter Your Password" value={userInfo.password}
                      onChange={({ target }) =>setUserInfo({ ...userInfo, password: target.value })}/>
                    </Grid>
                    <Grid item xs={12} my={2}>
                      <Button fullWidth type="submit" value="Login" variant="contained">
                        Login
                      </Button>
                    </Grid>
                    <Grid item xs={12} my={1}>
                      <Button fullWidth type="submit" value="Login"variant="contained">
                        New User? Register Account
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
