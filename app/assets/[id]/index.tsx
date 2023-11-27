"use client";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
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
    width: "99.5%", 
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
      assigndate:user?.assigndate,
      disktype:user?.disktype,
      id:user?.id
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
          assigndate:data?.assigndate,
          disktype:data?.disktype
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
      <Typography style={{fontFamily:"cursive", fontSize:'1.3rem',paddingBottom:'0.5rem'}} fontWeight={"bold"}>Update Asset</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container className={classes.card} style={{height:'25.5vh'}}>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Asset Tag ID </Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("id")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.id?.message}</p>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={3.2}>
                <Typography>Assign To <span style={{color:'red'}}>*</span></Typography>
                </Grid>
                <Grid item xs={8.6}>
                <Autocomplete size="small" id="free-solo-demo" freeSolo options={Array.from(new Set(employeeData.map((option) => option.name)))}
                renderInput={(params) => <TextField {...params} {...register("name")}/>}/>
                <p className={classes.errormessage}>{errors.name?.message}</p>
                </Grid>
              </Grid> 
          </Grid>
          <Grid item xs={6}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Assign Date <span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>
                  <input type="date" id="assign" name="assign" style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}
                {...register("assigndate")}/>
                <p className={classes.errormessage}>{errors.assigndate?.message}</p>
                  </Grid>
                </Grid> 
          </Grid>
          <Grid item xs={6}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Site <span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>
                  {/* <TextField fullWidth {...register("site")} size="small" disabled/> */}
                  <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}} {...register("site")}>
                    <option>Select Type</option>
                    <option>Alchemy Internal</option>
                    <option>Alchemy External</option>
                  </select>
                  <p className={classes.errormessage}>{errors.site?.message}</p>
                  </Grid>
                </Grid> 
          </Grid>
          <Grid item xs={6}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Location <span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>
                  {/* <TextField fullWidth {...register("location")} size="small" disabled/> */}
                  <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}} {...register("location")}>
                    <option>Select Location</option>
                    <option>Banglore</option>
                    <option>Noida</option>
                    <option>Philippines</option>
                  </select>
                  <p className={classes.errormessage}>{errors.location?.message}</p>
                  </Grid>
                </Grid> 
          </Grid>
          <Grid item xs={6}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Department <span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>
                  {/* <TextField fullWidth {...register("department")} size="small"/> */}
                  {/* <Autocomplete size="small" id="free-solo-demo" freeSolo options={Array.from(new Set(employeeData.map((option) => option.department)))}
                  renderInput={(params) => <TextField {...params} label="Select Employee" {...register("department")}/>}/> */}
                    <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}  {...register("department")}>
                    <option>Select Department</option>
                    <option>Accounts</option>
                    <option>Admin</option>
                    <option>HR</option>
                    <option>Developer</option>
                    <option>Manager</option>
                    <option>Recruiter</option>
                  </select>
                  <p className={classes.errormessage}>{errors.department?.message}</p>
                  </Grid>
                </Grid> 
          </Grid>
        </Grid>

      <Grid container className={classes.card} style={{height:'55vh',marginTop:"1rem",paddingBottom:'3rem'}}>
          <Grid item xs={6}>
            <Grid container sx={{alignItems:'center'}}>
              <Grid item xs={3.2}>
              <Typography>Disk Type</Typography>
              </Grid>
              <Grid item xs={8.6}>
              <TextField fullWidth {...register("disktype")} size="small" disabled/>
              <p className={classes.errormessage}>{errors.disktype?.message}</p>
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
              {/* <p className={classes.errormessage}>{errors.description?.message}</p> */}
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
              {/* <p className={classes.errormessage}>{errors.brand?.message}</p> */}
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
          <Grid item xs={12} sm={12} md={12} lg={12} pl={1} pr={1} mt={2}>
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