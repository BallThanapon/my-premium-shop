import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import Image from "next/image";
function Topbanner() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Image
        alt="banner comunication logo"
        src={"/images/topbanner.png"}
        width={1200}
        height={800}
        layout="responsive"
      ></Image>
    </Container>
  );
}

export default Topbanner;
