import React from "react";
import { Stack, Typography } from "@mui/material";
const contact = () => {
  return (
    <div>
      <Stack mt={10} spacing={5} mb={20}>
        <Typography variant="h3">Contact</Typography>
        <Typography color="gray">
          The Typography component makes it easy to apply a default set of font
          weights and sizes in your application.
        </Typography>
      </Stack>
    </div>
  );
};

export default contact;
