import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import { setTimeout } from "timers";
const Pagenotfound = () => {
  const router = useRouter();
  useEffect(() => {
    const id = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => clearTimeout(id);
  }, []);
  return (
    <div>
      <Box sx={{ margin: 20 }}>
        <Typography variant="h5" color="gray">
          woooh!...page not found!
        </Typography>
        <Link href="/">
          <Button variant="text">Go to Home</Button>
        </Link>
      </Box>
    </div>
  );
};

export default Pagenotfound;
