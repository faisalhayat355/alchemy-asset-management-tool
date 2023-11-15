"use client"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';


const AssetsInfoComponent = ({items}:any) => {
  return (
    <>
   
     <Grid container mt={0.4}>
        <Grid container  sx={{border:'1px solid #e2e8f0',width:'98.5%',borderRadius:'5px',alignItems:'center'}}>
        <Grid item xs={2.5}>
            <Typography fontSize={"0.8rem"} ml={2} noWrap>{items.assettagid}</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography fontSize={"0.8rem"} noWrap>{items.department}</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography fontSize={"0.8rem"} noWrap>{items.brand}</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography fontSize={"0.8rem"} noWrap>{items.model}</Typography>
        </Grid>
        <Grid item xs={2.2}>
            <Typography fontSize={"0.8rem"} noWrap>{items.serialno}</Typography>
        </Grid>
        <Grid item xs={1}>
            <Grid container>
              <Grid item xs={4}>
              <IconButton>
                <RemoveRedEyeIcon style={{fontSize:'1.1rem'}}/>
                </IconButton>
              </Grid>
              <Grid item xs={4}>
              <IconButton>
                <EditIcon style={{fontSize:'1.1rem'}}/>
                </IconButton>
              </Grid>
              <Grid item xs={3}>
                <IconButton>
                <DeleteOutlineIcon style={{fontSize:'1.1rem'}}/>
                </IconButton>
              </Grid>
            </Grid>
        </Grid>
        </Grid>
     </Grid>     

   </>
  )
}

export default AssetsInfoComponent
