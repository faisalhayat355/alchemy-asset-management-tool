"use client"
import { LinearProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import EditAssetComponent from ".";
import { IAssets } from "../listofassets/models/assets.model";

const fetchData = async (id: string) => {
  const res = await axios.get<IAssets>(`http://localhost:8000/users/${id}`)
  return res.data 
} 
export default function Page({ params, searchParams }: {
  params: { id: string },
  searchParams: { _id: string },
}) {

  const { data , error, isError, isLoading } = useQuery([`user-${params?.id}`], async() => await fetchData(params?.id))

  if (isLoading) { 
   return (
   <>
   <LinearProgress color="secondary"/>
    Data is already Submitted...
   </>
   )
  }
  if (isError) { 
    return (<>Please Go Back Employee Management List...</>)
  }
  if (data) {
  }
  
  return <EditAssetComponent user={data} />

}