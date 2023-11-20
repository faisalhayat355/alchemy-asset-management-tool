import { Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ActiveStatus = () => {
  return (
    <div>
      <Grid container sx={{display:'flex',justifyContent:'flex-end',marginTop:'0.7rem'}}>
        <Grid item xs={2.5} mt={1} >
          <Grid container sx={{alignItems:'center'}}>
            <Grid item xs={5.2}>
            <Link href="/assets/listofassets" passHref style={{ textDecoration: "none" }}>
            <button style={{cursor:'pointer',background:'#f87171',color:'white',width:'90%',border:'none',height:'5vh',borderRadius:'5px'}}> Cancel</button>
            </Link>
            </Grid>
            <Grid item xs={3.7}>
            <button style={{background:'#f87171',color:'white',width:'130%',border:'none',height:'5vh',borderRadius:'5px'}}> Save</button>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
    </div>
  )
}

export default ActiveStatus
