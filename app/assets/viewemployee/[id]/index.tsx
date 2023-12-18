"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { Autocomplete, Grid, TextField, Typography,Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { IAssets } from "../../listofassets/models/assets.model";
import { updateAsset } from "../../services/assetAction";

const useStyles = makeStyles({
  errormessage: {
    fontSize: "0.75rem",
    color: "red",
  },
  container:{
    paddingLeft:'1rem',
    paddingTop:'0.5rem',
    paddingRight:'1rem'
   
  },
  card:{
    background: "white",
    width: "99.5%", 
    borderRadius:"8px",
    borderTop:'3px solid #1F7DA9',
    paddingLeft:'1rem',
    paddingRight:'0.5rem',
    paddingTop:'0.5rem'
  },
});
type IUserProp ={
  user: IAssets | undefined;
}
const schema = yup
  .object({
    description: yup.string().required("First Name is required"),
    brand: yup.string().required("Last Name is required"),
  })
  .required();


const ViewEmployeeAssetComponent = ({user}:any) => {
  const [employeeData, setEmployeeData] = useState([]);
  
  async function fetchData() {
    const users = await fetch("http://localhost:8000/api/get-posts");
    const result = await users.json();
    setEmployeeData(result);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const {register,setValue,handleSubmit,formState: { errors },reset,} = useForm({
    defaultValues: {
      assettagid:user?.assettagid,
      description: user?.description,
      brand: user?.brand,
      serialno:user?.serialno,
      model:user?.model,
      cost:user?.cost,
      site:user?.site,
      category:user?.category,
      location:user?.location,
      purchasedate:user?.purchasedate,
      purchasefrom:user?.purchasefrom,
      ram:user?.ram,
      department:user?.department,
      processor:user?.processor,
      name:user?.name,
      assigndate:user?.assigndate
    },
    resolver: yupResolver(schema),
  });
  const classes = useStyles();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    if (user?.id) {
      try {
        const newUser = {
          id: user.id,
          assettagid:data.assettagid, 
          description: data?.description,
          brand: data?.brand,
          serialno:data?.serialno,
          model:data?.model,
          cost:data?.cost,
          site:data?.site,
          category:data?.category,
          location:data?.location,
          purchasedate:data?.purchasedate,
          purchasefrom:data?.purchasefrom,
          ram:data?.ram,
          department:data?.department,
          processor:data?.processor,
          name:data?.name,
        };
        await updateAsset(user.id, newUser); 
        router.push('/assets/listofassets');
      } catch (error) {
        console.error('Error updating asset:', error);
      }
    }
  }
  return (
    <div className={classes.container}>
    <Typography style={{fontFamily:"cursive", fontSize:'1.3rem',paddingBottom:'0.5rem'}} fontWeight={"bold"}>View Employee Details</Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container className={classes.card} style={{height:'70vh',paddingLeft:'4rem',paddingTop:'1rem',marginTop:'1rem',paddingBottom:'0.5rem'}}>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Name</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={8}>
              <Typography fontSize={"1rem"}>{user?.name}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={4.4}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Employee ID</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
              <Typography fontSize={"1rem"}>{user?.employeeid}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Email</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={8}>
              <Typography fontSize={"1rem"}>{user?.email}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={4.4}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Contact No.</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
              <Typography fontSize={"1rem"}>{user?.mobile}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Position</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={8}>
              <Typography fontSize={"1rem"}>{user?.position}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={4.4}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Address</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
              <Typography fontSize={"1rem"}>{user?.address}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Site</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={8}>
              <Typography fontSize={"1rem"}>{user?.site}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={4.4}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Project Name</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
              <Typography fontSize={"1rem"}>{user?.projectName}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Client</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={8}>
              <Typography fontSize={"1rem"}>{user?.client}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={4.4}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Location</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
              <Typography fontSize={"1rem"}>{user?.location}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Work Location</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={8}>
              <Typography fontSize={"1rem"}>{user?.workLocation}</Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={4.4}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>SBU Head</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
              <Typography fontSize={"1rem"}>{user?.sbuHead}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Client LOB</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={8}>
              <Typography fontSize={"1rem"}>{user?.clientLob}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} mt={5} pl={1} pr={1}>
          <Grid container>
            <Grid item xs={11.3} style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href={"/employeemanagement"} style={{ textDecoration: "none" }}>
                <Button variant="contained" style={{textTransform: "capitalize",background:'#1F7DA9',color:'white',width:'140%' }}>
                  Close
                </Button>
              </Link>
             
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  </div>
  )
}

export default ViewEmployeeAssetComponent
