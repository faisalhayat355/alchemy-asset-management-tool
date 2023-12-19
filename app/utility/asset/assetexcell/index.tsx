import React from 'react'
import { Typography } from "@mui/material";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { IAssets } from '../../../assets/listofassets/models/assets.model';

type AssetsProps = {
  users: Array<IAssets>;
};

const AssetExcellDownload = ({users}:AssetsProps) => {

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const fileName = `asset-list-${new Date().toISOString().slice(0, 10)}`;
  const exportToCSV = (customerInfo: AssetsProps, fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(customerInfo);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Typography variant="subtitle1" onClick={(e) => exportToCSV(users, fileName)}>
    Excell
  </Typography>
  )
}

export default AssetExcellDownload
