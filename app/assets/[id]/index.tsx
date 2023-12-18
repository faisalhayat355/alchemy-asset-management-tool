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
import axios from "axios";



type Post = {
  id: string;
  id: string;
  employeeId: string;
  name: string;
  email: string;
  mobile: string;
  position: string;
  address: string;
  site: string;

};

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
  typography: {
    fontFamily:"cursive",
    fontSize:'1.3rem',
    paddingBottom:'0.5rem'
 },
});

type IUserProp = {
  user: IAssets | undefined;
  employeeManagement: IAssets | undefined;
}
const schema = yup .object({
    description: yup.string().required("First Name is required"),
    brand: yup.string().required("Last Name is required"),
  })
  .required();

const EditAssetComponent = ({ user }:IUserProp) => {
  const [employeeData, setEmployeeData] = useState <any[]>([]);
  const [selected,setSelected]=useState("")

  const handleChange=(e:any)=>{
    setSelected(e.target.value)
    // setSite(e.target.value)
  }

  async function fetchData() {
    const users = await fetch("http://127.0.0.1:8000/get-asset-posts");
    const result = await users.json();
    setEmployeeData(result);
  }
  useEffect(() => {
    fetchData();
  }, []);

// var [name,...remaining]=employeeData;


// console.log("name>>>>>>",name)

// console.log("remaining>>>>>>",remaining)
const [data, setData] = useState<Post[]>([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get<{ data: Post[] }>('http://127.0.0.1:8000/get-employee-posts');
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
      remarks:user?.remarks,
      status:user?.status,
      courierid:user?.courierid,
      courierdate:user?.courierdate,
      assignmode:user?.assignmode,
      returndate:user?.returndate,
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
          courierdate:data?.courierdate,
          disktype:data?.disktype,
          remarks:data?.remarks,
          courierid:data?.courierid,
          assignmode:data?.assignmode,
          returndate:data?.returndate,
        };

        await updateAsset(user.id, newUser); 
        router.push('/assets/listofassets');
      } catch (error) {
        console.error('Error updating asset:', error);
      }
    }
  }
  const Removefunction = (id:any) => {
    if (window.confirm('Do you want to remove?')) {
        fetch("http://localhost:8000/users/" + id, {
            method: "DELETE"
        }).then((res) => {
            alert('Removed successfully.')
            window.location.reload();
        }).catch((err) => {
            console.log(err.message)
        })
    }
  }
  return (
    <div className={classes.container}>
      <Typography style={{fontFamily:"cursive", fontSize:'1.3rem',paddingBottom:'0.5rem'}} fontWeight={"bold"}>Update Asset</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container className={classes.card} style={{height:'34vh',paddingBottom:'1.5rem'}}>
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
                <Autocomplete size="small" id="free-solo-demo" freeSolo options={Array.from(new Set(data.map((option) => option.name)))}
                renderInput={(params) => <TextField {...params} {...register("name")}/>}/>
                <p className={classes.errormessage}>{errors.name?.message}</p>
                </Grid>
              </Grid> 
            </Grid>
              <Grid item xs={6}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Status<span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>
                  <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}} {...register("site")}>
                    <option>Select Status</option>
                    <option>Active</option>
                    <option>InActive</option>
                    {/* <option>UnderMaintainance</option> */}
                  </select>
                  <p className={classes.errormessage}>{errors.site?.message}</p>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Assign Date <span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>
                  <input type="date" id="assign" style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}
                {...register("assigndate")}/>
                <p className={classes.errormessage}>{errors.assigndate?.message}</p>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Return Date <span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>
                  <input type="date" id="return" style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}
                {...register("returndate")}/>
                <p className={classes.errormessage}>{errors.returndate?.message}</p>
                  </Grid>
                </Grid> 
              </Grid>
              <Grid item xs={6}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Assign Mode <span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>
                  <select value={selected} onChange={(e)=>handleChange(e)} style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}>
                    <option>Select Mode</option>
                    <option >Office Pickup</option>
                    <option>Courier</option>
                    {/* <option>Under Maintainance</option> */}
                  </select>
                  <p className={classes.errormessage}>{errors.assignmode?.message}</p>
                  </Grid>
                </Grid> 
              </Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Courier ID <span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>      
                  {selected == "Courier"? <CourierID register={register} classes={classes} errors={errors}/>:<OfficePickup/> }
                  </Grid>
              </Grid> 
            </Grid>
            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Courier Date <span style={{color:'red'}}>*</span></Typography>
                  </Grid>
                  <Grid item xs={8.6}>      
                  {selected == "Courier"? <CourierDate register={register} classes={classes} errors={errors}/>:<OfficePickup /> }
                  </Grid>
              </Grid>
            </Grid>
        </Grid>
        <Grid container className={classes.card} style={{height:'50vh',marginTop:"0.4rem",paddingBottom:'3rem'}}>     
            <Grid item xs={6}>
                <Grid container sx={{alignItems:'center'}}>
                  <Grid item xs={3.2}>
                  <Typography>Remarks</Typography>
                  </Grid>
                  <Grid item xs={8.6}>
                    <TextField fullWidth {...register("remarks")} size="small" disabled/>
                    <p className={classes.errormessage}>{errors.remarks?.message}</p>
                  </Grid>
                </Grid> 
            </Grid>   
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
                <TextField fullWidth  {...register("cost")} size="small" disabled/>
                <p className={classes.errormessage}>{errors.cost?.message}</p>
                </Grid>
              </Grid> 
            </Grid>

            <Grid item xs={6}>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item xs={5.4}>
                </Grid>
                <Grid item xs={6.6}>
                <Link href={"/assets/listofassets"} style={{ textDecoration: "none" }}>
               <Button variant="contained" style={{background:'#1F7DA9',width:'42%'}}>Cancel</Button>
               </Link>
               <Button type="submit" variant="contained" style={{background:'#1F7DA9',width:'42%',marginLeft:'2.5rem'}}>Save</Button>
                </Grid>
              </Grid> 
            </Grid>
            {/* <Grid item xs={12} sm={12} md={12} lg={12} pl={1} pr={1} mt={2}>
              <Grid container>
                <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Link href={"/assets/listofassets"} style={{ textDecoration: "none" }}>
                    <Button variant="contained" style={{ marginRight:'2rem',textTransform: "capitalize",background:'#1F7DA9',color:'white',width:'110%' }}>
                      Close
                    </Button>
                  </Link>
                  <Button type="submit" variant="contained" style={{ marginLeft: "2rem",textTransform: "capitalize",background:'#1F7DA9',color:'white',width:'11%'}} >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid> */}
        </Grid>
      </form>
    </div>
  );
};

const OfficePickup =()=>{
  return(
    <>
    <TextField size="small" fullWidth disabled />
    </>
  )
}

const CourierID =({register,classes,errors}:any)=>{
  return(
    <>
        <Grid container sx={{alignItems:'center'}}>
          <TextField size="small" fullWidth {...register("courierid")}/>
          <p className={classes.errormessage}>{errors.courierid?.message}</p>
        </Grid> 
    </>
  )
}

const CourierDate =({register,classes,errors}:any)=>{
  return(
    <>
        <Grid container sx={{alignItems:'center'}}>
          <input type="date" id="assign" name="assign" style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}
          {...register("courierdate")}/>
          <p className={classes.errormessage}>{errors.courierdate?.message}</p>
        </Grid> 
    </>
  )
}

export default EditAssetComponent;