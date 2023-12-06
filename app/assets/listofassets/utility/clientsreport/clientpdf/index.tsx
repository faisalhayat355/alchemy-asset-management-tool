import React from 'react'
import { IAssets } from '../../../models/assets.model';
import { Typography } from '@mui/material';
import { download } from '../../pdf-util';

type AssetsProps = {
  users: Array<IAssets>;
};

const ClientReportPDFDownload = ({users}:AssetsProps) => {

  const exportPDF = async () => {
    const fileName = `asset-report-list-${new Date().toISOString().slice(0, 10)}`;
    const headers = [["Employee ID", "Client", "Project Name","Location", "Contact"]];
    const pdfSendData = users?.map((elt) => [
     
      elt.employeeid,
      elt. client,
      elt.projectName,
      elt.location,
      elt.mobile,
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

export default ClientReportPDFDownload
