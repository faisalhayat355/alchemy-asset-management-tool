import React from 'react'
import { Typography } from '@mui/material';
import { download } from '../../pdf-util';
import { IAssets } from '../../../assets/listofassets/models/assets.model';

type AssetsProps = {
  users: Array<IAssets>;
};

const ClientReportPDFDownload = ({users}:AssetsProps) => {

  const exportPDF = async () => {
    const fileName = `client-report-list-${new Date().toISOString().slice(0, 10)}`;
    const headers = [["EMPLOYEE ID","EMPLOYEE NAME", "CLIENT NAME", "PROJECT NAME","LOCATION", "SBU HEAD","CLIENT LOB"]];
    const pdfSendData = users?.map((elt) => [
     
      elt.employeeId,
      elt.name,
      elt. clients,
      elt.projectName,
      elt.location,
      elt.sbuHead,
      elt.clientsLob,
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
