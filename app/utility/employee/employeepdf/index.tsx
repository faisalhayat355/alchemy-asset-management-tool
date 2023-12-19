import React from 'react'

import { Typography } from '@mui/material';
import { download } from '../../pdf-util';
import { IAssets } from '../../../assets/listofassets/models/assets.model';

type AssetsProps = {
  users: Array<IAssets>;
};

const EmployeePDFDownload = ({users}:AssetsProps) => {

  const exportPDF = async () => {
    const fileName = `employee-list-${new Date().toISOString().slice(0, 10)}`;
    const headers = [["Employee ID", "Name", "Email","Contact", "Position", "Department", "Work Location","Location","Address"]];
    const pdfSendData = users?.map((elt) => [
      elt.employeeId,
      elt.name,
      elt. email,
      elt.mobile,
      elt.position,
      elt.department,
      elt.workLocation,
      elt.location,
      elt.address,
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

export default EmployeePDFDownload
