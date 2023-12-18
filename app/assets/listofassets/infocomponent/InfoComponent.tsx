"use client"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';


const AssetsInfoComponent = ({post}:any) => {

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
     <Box >
        <Paper elevation={0}>
          <Grid container ml={1}>
            <Grid item xs={1.5}>
              <Typography variant="subtitle1"></Typography>
            </Grid>
            <Grid item xs={1.3}>
              <Typography variant="subtitle1">  </Typography>
            </Grid>
            <Grid item xs={1.7}>
              <Typography variant="subtitle1">  </Typography>
            </Grid>
            <Grid item xs={1.2}>
              <Typography variant="subtitle1"> </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography variant="subtitle1"> </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1"> </Typography>
            </Grid>
            <Grid item xs={1.85}>
              <Typography variant="subtitle1"></Typography>
            </Grid>
            <Grid item xs={0.8} style={{display:'flex'}}>
            {/* <Link href={`/assets/${post._id}`}> */}
              <IconButton>
                <EditIcon style={{fontSize:'1.1rem'}}/>
                </IconButton>
                {/* </Link> */}
                {/* <Link href={`/assets/viewassets/${post._id}`}> */}
                <IconButton>
                <RemoveRedEyeIcon style={{fontSize:'1.1rem'}}/>
                </IconButton>
                {/* </Link> */}
                
            </Grid>
          </Grid>
        </Paper>
        <Divider style={{width:'100%'}}/>
      </Box>
   </>
  )
}

export default AssetsInfoComponent
