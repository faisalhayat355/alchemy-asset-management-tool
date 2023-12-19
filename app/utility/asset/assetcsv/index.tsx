import React from 'react'
import Typography from "@mui/material/Typography";
import { CSVLink } from "react-csv";
import { IAssets } from '../../../models/assets.model';

type AssetsProps = {
  users: Array<IAssets>;
};

const AssetCSVDownload = ({users}:AssetsProps) => {
  return (
    <>
      <Typography variant="subtitle1">
      <CSVLink
        data={users}
        filename={`asset-list-${new Date().toISOString().slice(0, 10)}`}
      style={{color:'black',textDecoration:'none'}}>
        CSV
      </CSVLink>
    </Typography>
    </>
  )
}

export default AssetCSVDownload
