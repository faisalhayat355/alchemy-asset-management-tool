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
  assignmode:string;
  image:string;
  assettagid:string;
  description:string;
  brand:string;
  serialno:string;
  model:string;
  cost:string;
  purchasedate:string;
  purchasefrom:string;
  ram:string;
  processor:string;
  assigndate:string;
  courierdate:string;
  disktype:string;
  remarks:string;
  courierid:string;
  returndate:string;
};

const data = Array<IDashboard>()

const DashboardHome = () => {
  const [data, setData] = useState<Post[]>([]);

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

export default DashboardHome