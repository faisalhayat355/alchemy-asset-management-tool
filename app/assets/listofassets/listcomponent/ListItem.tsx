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
        header: 'User ID',
        size: 150,
      },
      {
        accessorKey: 'brand',
        header: 'ID',
        size: 150,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'description',
        header: 'Body',
        size: 400,
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        size: 200,
        Cell: ({ cell }) => (
          <div>
            {cell.row.original && (
             <Box>
                <Tooltip title="View">
                  <IconButton onClick={() => handleView(cell.row.original)}>
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                  <Link href={`/assets/${cell.row.original.id}`}>
                      <IconButton onClick={() => handleEdit(cell.row.original)}>
                        <EditIcon />
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
    enableRowOrdering: true,
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

  return <MaterialReactTable table={table} />;
};

export default ListItemComponent;
