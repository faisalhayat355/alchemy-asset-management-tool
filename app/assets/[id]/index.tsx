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
import { IAssets } from "../listofassets/models/assets.model";
import { updateAsset } from "../services/assetAction";

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
  typography: {
    fontFamily:"cursive",
    fontSize:'1.3rem',
    paddingBottom:'0.5rem'
 },
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

const EditAssetComponent = ({ user }: IUserProp) => {
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
      <Typography className={classes.typography} fontWeight={"bold"}>Update Asset</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container className={classes.card} style={{height:'50vh'}}>
        <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Assign To </Typography>
              </Grid>
              <Grid item xs={8.6}>
              <Autocomplete size="small" id="free-solo-demo" freeSolo options={employeeData.map((option) => option.name)}
              renderInput={(params) => <TextField {...params} label="Select Employee" {...register("name")}/>}/>
              <p className={classes.errormessage}>{errors.name?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Assign Date </Typography>
              </Grid>
              <Grid item xs={8.6}>
              <input type="date" id="birthday" name="birthday" style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}
             {...register("assigndate")}/>
             <p className={classes.errormessage}>{errors.assigndate?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Asset Tag ID </Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("assettagid")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.assettagid?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6} >
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Description </Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("description")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.description?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Purchase Date </Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("purchasedate")} size="small" disabled />
              <p className={classes.errormessage}>{errors.purchasedate?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Purchase From </Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("purchasefrom")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.purchasefrom?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Ram</Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("ram")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.ram?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Brand</Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("brand")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.brand?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Processor</Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("processor")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.processor?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Serial No.</Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("serialno")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.serialno?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Model</Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("model")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.model?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Cost</Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("cost")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.cost?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
        </Grid>
      <Grid container className={classes.card} style={{height:'32vh',marginTop:"0.5rem"}}>
        <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Site</Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("site")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.site?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Category</Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("category")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.category?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Location</Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("location")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.location?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Department</Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("department")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.department?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mt={2} pl={1} pr={1}>
            <Grid container>
              <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link href={"/assets/listofassets"} style={{ textDecoration: "none" }}>
                  <Button variant="contained" style={{ marginRight:'2rem',textTransform: "capitalize",background:'#f87171',color:'white',width:'110%' }}>
                    Close
                  </Button>
                </Link>
                <Button type="submit" variant="contained" style={{ marginLeft: "2rem",textTransform: "capitalize",background:'#f87171',color:'white',width:'11%'}}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
      </form>
    </div>
  );
};

export default EditAssetComponent;