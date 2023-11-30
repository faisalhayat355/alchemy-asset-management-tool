import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { Box } from '@mui/material';

type Post = {
  id: number;
  description: string;
  brand: string;
};

const EmployeeListComponent = () => {
  const columns = useMemo<MRT_ColumnDef<Post>[]>(
    () => [

      {
        accessorKey: 'name',
        header: 'Name',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'employeeid',
        header: 'Employee ID',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'mobile',
        header: 'Contact',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'position',
        header: 'Position',
        size: 170,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'address',
        header: 'Address.',
        size: 150,
        isResizable: true,
        enableSorting: true,
      },

      {
        accessorKey: 'site',
        header: 'Site.',
        size: 150,
        isResizable: true,
        enableSorting: true,
      },

      {
        accessorKey: 'actions',
        header: 'Actions',
        size: 140,
        Cell: ({ cell }) => (
          <div>
            {cell.row.original && (
             <Box>
                <Tooltip title="View">
                <Link href={`/assets/viewemployee/${cell.row.original.id}`}>
                  <IconButton onClick={() => handleView(cell.row.original)}>
                    <VisibilityIcon style={{fontSize:'1rem'}}/>
                  </IconButton>
                  </Link>
                </Tooltip>
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
        const response = await axios.get<Post[]>('http://localhost:8000/employeemanagement');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
