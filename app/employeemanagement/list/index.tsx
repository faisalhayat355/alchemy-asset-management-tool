import { Box } from '@mui/material';
import axios from 'axios';
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { useEffect, useMemo, useState } from 'react';
import ViewEmployeeComponent from '../viewEmployee';

type Post = {
  _id: string;id: string;employeeId: string;name: string;email: string;mobile: string;
  position: string;address: string;site: string;clients:string;department:string;
  projectName:string;location:string;sbuHead:string;clientsLob:string;workLocation:string;
};

const EmployeeListComponent = () => {
  const columns = useMemo<MRT_ColumnDef<Post>[]>(
    () => [
      {
        accessorKey: 's.no',header: 'S.No',size: 100,isResizable: true,
        Cell: ({ cell }) => cell.row.index + 1,
      },
      {
        accessorKey: 'employeeId',header: 'Employee ID',size: 140,isResizable: true,enableSorting: true,
      },
      {
        accessorKey: 'name',header: 'Name',size: 140,isResizable: true,enableSorting: true,
      },
      {
        accessorKey: 'email',header: 'Email',size: 140,isResizable: true,enableSorting: true,
      },
      {
        accessorKey: 'mobile',header: 'Contact',size: 140,isResizable: true,enableSorting: true,
      },
      {
        accessorKey: 'position',header: 'Position',size: 170,isResizable: true,enableSorting: true,
      },
      {
        accessorKey: 'address',header: 'Address.',size: 150,isResizable: true,enableSorting: true,
      },
      {
        accessorKey: 'site',header: 'Site.',size: 150,isResizable: true,enableSorting: true,
      },
      {
        accessorKey: 'actions',header: 'Actions',size: 140,
        Cell: ({ cell }) => (
          <div style={{display:'flex'}}>
          {cell.row.original && (
           <Box sx={{display:'flex'}}>
             <ViewEmployeeComponent id={cell.row.original._id}
             employeeId={cell.row.original.employeeId} name={cell.row.original.name}
             email={cell.row.original.email}mobile={cell.row.original.mobile}
             position={cell.row.original.position}department={cell.row.original.department} 
             site={cell.row.original.site}projectName={cell.row.original.projectName}
             clients={cell.row.original.clients}location={cell.row.original.location}
             sbuHead={cell.row.original.sbuHead}clientsLob={cell.row.original.clientsLob}
             workLocation={cell.row.original.workLocation}address={cell.row.original.address}/>
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
        const response = await axios.get<{ data: Post[] }>('http://127.0.0.1:8000/get-employee-posts');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

const table = useMaterialReactTable({columns,data,enableColumnOrdering: true,enableGrouping: true,columnFilterDisplayMode: 'popover',});
  
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
