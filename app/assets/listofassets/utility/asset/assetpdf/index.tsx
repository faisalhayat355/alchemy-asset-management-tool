import React from 'react'
import { IAssets } from '../../../models/assets.model';
import { Typography } from '@mui/material';
import { download } from '../../pdf-util';

type AssetsProps = {
  users: Array<IAssets>;
};

const AssetPDFDownload = ({users}:AssetsProps) => {

  const exportPDF = async () => {
    const fileName = `asset-list-${new Date().toISOString().slice(0, 10)}`;
    const headers = [["Asset Tag ID", "Purchased From", "Brand", "Model", "Serial No.", "Location","Ram","Processor"]];
    const pdfSendData = users?.map((elt) => [
      elt.assettagid,
      elt.purchasefrom,
      elt.brand,
      elt.model,
      elt.serialno,
      elt.location,
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
