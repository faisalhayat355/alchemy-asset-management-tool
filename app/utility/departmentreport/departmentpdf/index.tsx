import React from 'react'
import { Typography } from '@mui/material';
import { download } from '../../pdf-util';
import { IAssets } from '../../../assets/listofassets/models/assets.model';

type AssetsProps = {
  users: Array<IAssets>;
};

const DepartmentReportPDFDownload = ({users}:AssetsProps) => {

    const exportPDF = async () => {
    const fileName = `departmentwise-report-list-${new Date().toISOString().slice(0, 10)}`;
    const headers = [["EMPLOYEE ID", "EMPLOYEE NAME", "CONTACT NO.", "DEPARTMENT", "DESIGNATION","EMAIL", "WORK LOCATION", "ADDRESS"]];
    const pdfSendData = users?.map((elt) => [
     
      elt.employeeId,
      elt. name,
      elt.mobile,
      elt.department,
      elt.position,
      elt.email,
      elt.workLocation,
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

export default DepartmentReportPDFDownload
