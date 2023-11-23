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

const ListItemComponent = () => {
  const columns = useMemo<MRT_ColumnDef<Post>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 100,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 160,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'department',
        header: 'Department',
        size: 160,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'brand',
        header: 'Brand',
        size: 150,
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
        header: 'Serial No.',
        size: 150,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'location',
        header: 'Location',
        size: 140,
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
                  <IconButton onClick={() => handleView(cell.row.original)}>
                    <VisibilityIcon style={{fontSize:'1rem'}}/>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                  <Link href={`/assets/${cell.row.original.id}`}>
                      <IconButton onClick={() => handleEdit(cell.row.original)}>
                        <EditIcon style={{fontSize:'1rem'}}/>
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:8000/users');
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
    enableRowSelection: true,
  });

  const handleView = (rowData: Post) => {
    console.log('View post:', rowData);
  };

  const handleEdit = (rowData: Post) => {
    console.log('Edit post:', rowData);
  };

  return(

    <div >

  <MaterialReactTable table={table}/>
  </div>
    ) 
  ;
};

export default ListItemComponent;
