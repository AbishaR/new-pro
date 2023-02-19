import { AppBar, Toolbar, Typography, Stack, styled } from "@mui/material";
import Link from "next/link";
import React from "react";
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  background: "black",
});
export const Header = () => {
  return (
    <div>
      <AppBar position="sticky">
        <StyledToolBar>
          <Typography variant="h5">Next</Typography>
          <Stack direction="row" spacing={5}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/nested/contact">Contact</Link>
          </Stack>
        </StyledToolBar>
      </AppBar>
    </div>
  );
};
