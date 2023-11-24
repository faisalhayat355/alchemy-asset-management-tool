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

const ActiveAssetList = () => {
  const columns = useMemo<MRT_ColumnDef<Post>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Asset Tag ID',
        size: 170,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'purchasefrom',
        header: 'Purchase From',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },

      {
        accessorKey: 'purchasedate',
        header: 'Purchase Date',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'department',
        header: 'Department',
        size: 170,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'ram',
        header: 'Ram',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'processor',
        header: 'Processor',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
      {
        accessorKey: 'location',
        header: 'Location.',
        size: 150,
        isResizable: true,
        enableSorting: true,
      },
     

      {
        accessorKey: 'category',
        header: 'Category',
        size: 140,
        isResizable: true,
        enableSorting: true,
      },
      
      
    ],
    [],
  );

  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:8000/activeAsset');
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

    <div >

  <MaterialReactTable table={table}/>
  </div>
    ) 
  ;
};

export default ActiveAssetList;
