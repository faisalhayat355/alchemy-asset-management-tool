import { Box } from '@mui/material';
import axios from 'axios';
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { useEffect, useMemo, useState } from 'react';
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


  const baseURL = 'http://127.0.0.1:8000/get-asset-posts/';
    
  const [imageList, setImageList] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: Post[] }>(baseURL);
        setImageList(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };  
    fetchData();
  }, []);

  


  const columns = useMemo<MRT_ColumnDef<Post>[]>(
    () => [
      {
        accessorKey: 's.no',
        header: 'S.No',
        size: 90,
        isResizable: true,
        Cell: ({ cell }) => cell.row.index + 1,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 130,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'assettagid',
        header: 'Asset Tag ID',
        size: 135,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'purchasefrom',
        header: 'Purchased From',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'brand',
        header: 'Brand',
        size: 125,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'model',
        header: 'Model',
        size: 130,
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
        size: 123,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'assignmode',
        header: 'Assign Mode',
        size: 123,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'remarks',
        header: 'Remarks.',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
      // {
      //   accessorKey: 'image',
      //   header: 'Image',
      //   size: 150,
      //   isResizable: true,
      //   enableSorting: true,
      // },
      // {
      //   accessorFn: (row) => `${row.image}`,
      //   id: 'image',
      //   header: 'Image',
      //   size: 250,
      //   Cell: ({ renderedCellValue, row }) => (
      //     <Box
      //       sx={{ display: 'flex', alignItems: 'center', gap: '1rem',}}>
      //       <img alt="avatar" height={30} src={row.original.image}
      //         loading="lazy"
      //         style={{ borderRadius: '50%' }}
      //       />
      //       <span>{renderedCellValue}</span>
      //     </Box>
      //   ),
      // },
      {
        accessorKey: 'actions',
        header: 'Action',
        size: 130,
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
               image={cell.row.original.image}
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
            {/* <Box>
              {imageList.map((post)=>{
                return(
                  <>
                  <ViewAssetImageComponent post={post} />
                  </>
                )
              })}
            </Box> */}
          </div>
        ),
      },



      
      // {
      //   accessorKey: 'remarks',
      //   header: 'Remarks.',
      //   size: 140,
      //   Cell: ({ cell }) => (
      //     <div style={{display:'flex'}}>
      //       <Box>
      //         {imageList.map((post)=>{
      //           return(
      //             <>
      //             <ViewAssetImageComponent post={post} />
      //             </>
      //           )
      //         })}
      //       </Box>
      //     </div>
      //   ),
      // },
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


// console.log("datadatadata>>>>",data)

const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true,
    enableGrouping: true,
    columnFilterDisplayMode: 'popover',
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
