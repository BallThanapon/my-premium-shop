"use client";

import { Container, Grid, Typography, Box } from "@mui/material";

import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Topbanner from "@/components/Topbanner";
import Image from "next/image";

function Contact
() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
      <Image
        alt="banner comunication logo"
        src={"/images/contactbanner.jpg"}
        width={1200}
        height={800}
        layout="responsive"
      ></Image>

        {/* ส่วนรายการสินค้า */}
        <Box sx={{ borderTop: "2px dashed #ffb3d9", pt: 3, mt: 2 }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ fontWeight: "bold", mb: 3, color: "primary.dark" }}
          >
            🛍️ ขี้เกียจแล้วไปกินเบียร์ก่อน!!!
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Contact
;
