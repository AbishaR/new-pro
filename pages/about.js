import { Stack, Typography } from "@mui/material";
import React from "react";

const about = () => {
  return (
    <div>
      <Stack mt={10} spacing={5} mb={20}>
        <Typography variant="h3">About</Typography>
        <Typography color="gray">
          The Typography component makes it easy to apply a default set of font
          weights and sizes in your application.
        </Typography>
      </Stack>
    </div>
  );
};
export default about;
