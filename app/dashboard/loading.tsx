"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
export default function Loading() {
  return (
    <h1>
      <Box sx={{ width: "100%"}}>
        <LinearProgress />
      </Box>
    </h1>
  );
}
