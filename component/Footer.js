import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <div>
      <Box sx={{ textAlign: "center" }}>
        <Typography color="black" variant="caption">
          @copyright 2023-2024
        </Typography>
      </Box>
    </div>
  );
};
