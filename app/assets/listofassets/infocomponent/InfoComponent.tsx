"use client"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

const AssetsInfoComponent = ({items}:any) => {

const Removefunction = (id) => {
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
    <>
     <Grid container mt={0.4}>
        <Grid container  sx={{border:'1px solid #fecaca',width:'98.5%',borderRadius:'5px',alignItems:'center'}}>
        <Grid item xs={1.55}>
            <Typography fontSize={"0.75rem"} ml={2} noWrap>{items.id}</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography fontSize={"0.75rem"} noWrap>{items.department}</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography fontSize={"0.75rem"} noWrap>{items.brand}</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography fontSize={"0.75rem"} noWrap>{items.model}</Typography>
        </Grid>
        <Grid item xs={2.2}>
            <Typography fontSize={"0.75rem"} noWrap>{items.serialno}</Typography>
        </Grid>
        <Grid item xs={1.25}>
            <Typography fontSize={"0.75rem"} noWrap>{items.serialno}</Typography>
        </Grid>
        <Grid item xs={1}>
            <Grid container>
              <Grid item xs={7} sx={{display:'flex',justifyContent:'center'}}>
              <Link href={`/assets/${items.id}`}>
              <IconButton>
                <RemoveRedEyeIcon style={{fontSize:'1.1rem'}} 
                // onClick={() => { LoadDetail(items.id) }}
                />
                </IconButton>
                </Link>
              </Grid>
              <Grid item xs={4}>
              <Link href={`/assets/${items.id}`}>
              <IconButton>
                <EditIcon style={{fontSize:'1.1rem'}}/>
                </IconButton>
                </Link>
              </Grid>
              {/* <Grid item xs={3}>
                <IconButton>
                <DeleteOutlineIcon style={{fontSize:'1.1rem'}}
                onClick={() => { Removefunction(items.id) }}/>
                </IconButton>
              </Grid> */}
            </Grid>
        </Grid>
        </Grid>
     </Grid>     
   </>
  )
}

export default AssetsInfoComponent
