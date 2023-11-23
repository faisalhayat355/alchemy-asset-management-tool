"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
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
    width: "95%", 
    borderRadius:"8px",
    borderTop:'3px solid #f87171',
    paddingLeft:'1rem',
    paddingRight:'0.5rem',
    paddingTop:'0.5rem'
  },
//   typography: {
//     fontFamily:"cursive",
//     fontSize:'1.3rem',
//     paddingBottom:'0.5rem'
//  },
});
interface IUserProp {
  user: IAssets | undefined;
}
const schema = yup
  .object({
    description: yup.string().required("First Name is required"),
    brand: yup.string().required("Last Name is required"),
  })
  .required();


const ViewAssetComponent = ({user}:any) => {
  const [employeeData, setEmployeeData] = useState([]);
  
  async function fetchData() {
    const users = await fetch("http://localhost:8000/employeeManagement");
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
          assigndate:data?.assigndate
        };
        await updateAsset(user.id, newUser); 
        router.push('/assets/listofassets', { scroll: false });
      } catch (error) {
        console.error('Error updating asset:', error);
      }
    }
  }
  return (
    <div className={classes.container}>
    <Typography style={{fontFamily:"cursive", fontSize:'1.3rem',paddingBottom:'0.5rem'}} fontWeight={"bold"}>View Asset</Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container className={classes.card} style={{height:'50vh',paddingLeft:'4rem',paddingTop:'1rem'}}>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Assign To</Typography>
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
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Assign Date</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
              <Typography fontSize={"1rem"}>{user?.assigndate}</Typography>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Asset Tag ID</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={8}>
              <Typography fontSize={"1rem"}>{user?.id}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={4.4}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Description</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
              <Typography fontSize={"1rem"}>{user?.description}</Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Purchase From</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={8}>
              <Typography fontSize={"1rem"}>{user?.purchasefrom}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={4.4}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Purchase Date</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
              <Typography fontSize={"1rem"}>{user?.purchasedate}</Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Ram</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={8}>
              <Typography fontSize={"1rem"}>{user?.ram}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={4.4}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Brand</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
              <Typography fontSize={"1rem"}>{user?.brand}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Processor</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={8}>
              <Typography fontSize={"1rem"}>{user?.processor}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={4.4}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Serial No.</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
              <Typography fontSize={"1rem"}>{user?.serialno}</Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Model</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={8}>
              <Typography fontSize={"1rem"}>{user?.model}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={4.4}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Cost</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
              <Typography fontSize={"1rem"}>₹ {user?.cost}</Typography>
              </Grid>
            </Grid>
          </Grid>

      </Grid>
    <Grid container className={classes.card} style={{height:'32vh',marginTop:"0.5rem",paddingLeft:'4rem',paddingTop:'1rem'}}>
      
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
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Category</Typography>
              </Grid>
              <Grid item xs={0.6}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
              <Typography fontSize={"1rem"}>{user?.category}</Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontSize={"1rem"} fontWeight={"bold"}>Department</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={8}>
              <Typography fontSize={"1rem"}>{user?.department}</Typography>
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




        <Grid item xs={12} sm={12} md={12} lg={12} mt={2} pl={1} pr={1}>
          <Grid container>
            <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href={"/assets/listofassets"} style={{ textDecoration: "none" }}>
                <Button variant="contained" style={{textTransform: "capitalize",background:'#f87171',color:'white',width:'110%' }}>
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

export default ViewAssetComponent
