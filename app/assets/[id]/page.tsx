"use client"
import { LinearProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import EditAssetComponent from ".";
import { IAssets } from "../listofassets/models/assets.model";

const fetchData = async (_id: string) => {
  const res = await axios.get<IAssets>(`http://127.0.0.1:8000/get-asset-posts/${_id}`)
  return res.data 
} 

export default function Page({ params, searchParams }: {
  params: { _id: string },
  searchParams: { _id: string },
}) {

  const { data , error, isError, isLoading } = useQuery([`assets-${params?._id}`], async() => await fetchData(params?._id))

  // console.log("Assetdata",data);
  
  // if (isLoading) { 
  //  return (
  //  <>
  //  <LinearProgress color="secondary"/>
  //   Data is already Submitted...
  //  </>
  //  )
  // }
  // if (isError) { 
  //   return (<>Please Go Back Employee Management List...</>)
  // }
  // if (data) {
  // }
  
  return <EditAssetComponent user={data} />

}