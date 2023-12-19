import React from 'react'
import { Typography } from '@mui/material';
import { download } from '../../pdf-util';
import { IAssets } from '../../../assets/listofassets/models/assets.model';

type AssetsProps = {
  users: Array<IAssets>;
};

const AssetPDFDownload = ({users}:AssetsProps) => {

  const exportPDF = async () => {
    const fileName = `asset-list-${new Date().toISOString().slice(0, 10)}`;
    const headers = [["Asset Tag ID", "Name", "Assign Date","Purchased From", "Brand", "Model", "Serial No.","Ram","Processor"]];
    const pdfSendData = users?.map((elt) => [
      elt.assettagid,
      elt.name,
      elt. assigndate,
      elt.purchasefrom,
      elt.brand,
      elt.model,
      elt.serialno,
      elt.ram,
      elt.processor,
    ]);
    await download({
      headers,
      pdfSendData,
      fileName,
    });
  };
  return (
    <div>
        <Typography variant="subtitle1" onClick={() => exportPDF()}>
        PDF
      </Typography>
    </div>
  )
}

export default AssetPDFDownload
