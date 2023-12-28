"use client";
import axios from "axios";
import { useEffect, useState } from 'react';
import AssetDashboardPage from '.';
import IDashboard from './dashboard.model';

type Post = {
  _id: string;
  id: string;
  employeeId: string;
  name: string;
  email: string;
  mobile: string;
  position: string;
  address: string;
  status: string;
  assettagid:string;

};

const data = Array<IDashboard>()

const Home = () => {
  const[data,setData]=useState([])

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get<{ data: Post[] }>('http://127.0.0.1:8000/get-asset-posts');
          setData(response.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    fetchData();
},[]);
  
  return (
    <>

    <AssetDashboardPage items={data} ></AssetDashboardPage>
    </>
  )
}

export default Home