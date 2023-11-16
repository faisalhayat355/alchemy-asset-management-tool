"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Box, Grid } from '@mui/material';

const ViewAssetComponent = () => {
  const [assets, setAssets] = useState ([]);
  const [error, setError] = useState ([]);
  const {id} = useParams()

  useEffect(() => {
    axios .get("http://localhost:8000/users/" + id,)
      .then((res) => setAssets(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  // console.log("assets ID", assets);
  
  const convertObj = (assets) => {
    const keys = Object.keys(assets);
    const arr = [];
    for (let i = 0; i < keys.length; i++) {
      arr.push(assets[keys[i]]);
    }
    console.log(arr);
  
    return arr;
  };
  convertObj(assets);

  console.log("convertObjconvertObjconvertObj",convertObj);
  


  return (
    <div>

         {/* {convertObj?.map((data)=>{
            return(
               <div key={data.id}>
                {data.id}
               </div>
            )
        })} */}

    </div>
  )
}

export default ViewAssetComponent
