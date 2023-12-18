import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import {MaterialReactTable, useMaterialReactTable,type MRT_ColumnDef,} from 'material-react-table';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

import Link from 'next/link';
import { Box } from '@mui/material';
import UpdateAssetComponent from '../../addassets/updateAsset';
import ViewAssetComponent from '../../addassets/viewAsset';

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

const EmployeeListComponent = () => {
  const columns = useMemo<MRT_ColumnDef<Post>[]>(
    () => [
      {
        accessorKey: 's.no',
        header: 'S.No',
        size: 100,
        isResizable: true,
        Cell: ({ cell }) => cell.row.index + 1,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'assettagid',
        header: 'Asset Tag ID',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
     
      {
        accessorKey: 'description',
        header: 'Description',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'brand',
        header: 'Brand',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'serialno',
        header: 'Serial No',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 170,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'model',
        header: 'Model',
        size: 150,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'remarks',
        header: 'Remarks.',
        size: 150,
        isResizable: true,
        enableSorting: true,
      },
      // {
      //   accessorKey: 'image',
      //   header: 'Image',
      //   size: 150,
      //   isResizable: true,
      //   enableSorting: true,
      //   Cell: ({ cell }) => <img src={'http://127.0.0.1:8000/postImages/'+cell.row.original.image} style={{width:'120px', height:'100px'}}/>,
      // },
      {
        accessorKey: 'actions',
        header: 'Actions',
        size: 140,
        Cell: ({ cell }) => (
          <div style={{display:'flex'}}>
            {cell.row.original && (
             <Box sx={{display:'flex'}}>
               <UpdateAssetComponent id={cell.row.original._id} assettagid={cell.row.original.assettagid} 
               name={cell.row.original.name} status={cell.row.original.status} 
               assignmode={cell.row.original.assignmode}
               description={cell.row.original.description}
               brand={cell.row.original.brand}
               serialno={cell.row.original.serialno}
               model={cell.row.original.model} 
               cost={cell.row.original.cost}
               purchasedate={cell.row.original.purchasedate}
               purchasefrom={cell.row.original.purchasefrom}
               ram={cell.row.original.ram}
               processor={cell.row.original.processor}
               assigndate={cell.row.original.assigndate}
               courierdate={cell.row.original.courierdate}
               disktype={cell.row.original.disktype}
               remarks={cell.row.original.remarks}
               courierid={cell.row.original.courierid}
               returndate={cell.row.original.returndate}
               
               />
              </Box>
            )}

            {cell.row.original && (
             <Box sx={{display:'flex'}}>
               <ViewAssetComponent id={cell.row.original._id} assettagid={cell.row.original.assettagid} 
               name={cell.row.original.name} status={cell.row.original.status}
               assignmode={cell.row.original.assignmode} 
               description={cell.row.original.description}
               brand={cell.row.original.brand}
               serialno={cell.row.original.serialno}
               model={cell.row.original.model} 
               cost={cell.row.original.cost}
               purchasedate={cell.row.original.purchasedate}
               purchasefrom={cell.row.original.purchasefrom}
               ram={cell.row.original.ram}
               processor={cell.row.original.processor}
               assigndate={cell.row.original.assigndate}
               courierdate={cell.row.original.courierdate}
               disktype={cell.row.original.disktype}
               remarks={cell.row.original.remarks}
               courierid={cell.row.original.courierid}
               returndate={cell.row.original.returndate}
               image={cell.row.original.image}
               />
              </Box>
            )}
          </div>
        ),
      },
    ],
    [],
  );

  const [data, setData] = useState<Post[]>([]);
  const items= data.reverse()
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
  }, []);

// console.log("datatatatatata",data)

const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true,
    enableColumnFilterModes: true,
    // enableRowOrdering: true,
    autoResetPageIndex: true,
    enableSorting: true,
    enableColumnResizing: true,
    enableGrouping: true,
    enableStickyHeader: true,
    enableStickyFooter: true,
    manualFiltering: true,
    // enableRowSelection: true,
    
  });

  const handleView = (rowData: Post) => {
    console.log('View post:', rowData);
  };

  const handleEdit = (rowData: Post) => {
    console.log('Edit post:', rowData);
  };

  return(

    <div style={{paddingBottom:'5vh'}} >
      <MaterialReactTable table={table}/>
    </div>
    ) 
  ;
};

export default EmployeeListComponent;
