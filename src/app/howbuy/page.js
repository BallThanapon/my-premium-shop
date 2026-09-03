"use client";

import { Container, Grid, Typography, Box } from "@mui/material";

import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Topbanner from "@/components/Topbanner";
import Image from "next/image";
// ข้อมูลจำลอง สินค้า
const products = [
  {
    id: 1,
    title: "Netflix 1 จอ 4K (30 วัน)",
    price: 99,
    stock: 15,
    category: "Streaming",
    image: "https://cdn.xdvz.shop/uploads/1784573919977.7773.webp",
  },
  {
    id: 2,
    title: "YouTube Premium (30 วัน)",
    price: 49,
    stock: 40,
    category: "Streaming",
    image: "https://cdn.xdvz.shop/uploads/1784574479652.021.webp",
  },
  {
    id: 3,
    title: "Canva Pro ส่วนตัว (1 ปี)",
    price: 159,
    stock: 8,
    category: "Design",
    image: "https://cdn.xdvz.shop/uploads/1784574711336.7664.webp",
  },
  {
    id: 4,
    title: "Viu Premium (30 วัน)",
    price: 39,
    stock: 0,
    category: "Streaming",
    image: "https://cdn.xdvz.shop/uploads/1784574767424.8792.webp",
  },
  {
    id: 5,
    title: "Disney+ Hotstar (30 วัน)",
    price: 89,
    stock: 22,
    category: "Streaming",
    image: "https://cdn.xdvz.shop/uploads/1784574876978.6287.webp",
  },
  {
    id: 6,
    title: "Spotify Premium (30 วัน)",
    price: 59,
    stock: 10,
    category: "Music",
    image: "https://cdn.xdvz.shop/uploads/1784912743151.907.webp",
  },
  {
    id: 1,
    title: "Netflix 1 จอ 4K (30 วัน)",
    price: 99,
    stock: 15,
    category: "Streaming",
    image: "https://cdn.xdvz.shop/uploads/1784573919977.7773.webp",
  },
  {
    id: 2,
    title: "YouTube Premium (30 วัน)",
    price: 49,
    stock: 40,
    category: "Streaming",
    image: "https://cdn.xdvz.shop/uploads/1784574479652.021.webp",
  },
  {
    id: 3,
    title: "Canva Pro ส่วนตัว (1 ปี)",
    price: 159,
    stock: 8,
    category: "Design",
    image: "https://cdn.xdvz.shop/uploads/1784574711336.7664.webp",
  },
  {
    id: 4,
    title: "Viu Premium (30 วัน)",
    price: 39,
    stock: 0,
    category: "Streaming",
    image: "https://cdn.xdvz.shop/uploads/1784574767424.8792.webp",
  },
  {
    id: 5,
    title: "Disney+ Hotstar (30 วัน)",
    price: 89,
    stock: 22,
    category: "Streaming",
    image: "https://cdn.xdvz.shop/uploads/1784574876978.6287.webp",
  },
  {
    id: 6,
    title: "Spotify Premium (30 วัน)",
    price: 59,
    stock: 10,
    category: "Music",
    image: "https://cdn.xdvz.shop/uploads/1784912743151.907.webp",
  },
  {
    id: 1,
    title: "Netflix 1 จอ 4K (30 วัน)",
    price: 99,
    stock: 15,
    category: "Streaming",
    image: "https://cdn.xdvz.shop/uploads/1784573919977.7773.webp",
  },
  {
    id: 2,
    title: "YouTube Premium (30 วัน)",
    price: 49,
    stock: 40,
    category: "Streaming",
    image: "https://cdn.xdvz.shop/uploads/1784574479652.021.webp",
  },
  {
    id: 3,
    title: "Canva Pro ส่วนตัว (1 ปี)",
    price: 159,
    stock: 8,
    category: "Design",
    image: "https://cdn.xdvz.shop/uploads/1784574711336.7664.webp",
  },
  {
    id: 4,
    title: "Viu Premium (30 วัน)",
    price: 39,
    stock: 0,
    category: "Streaming",
    image: "https://cdn.xdvz.shop/uploads/1784574767424.8792.webp",
  },
  {
    id: 5,
    title: "Disney+ Hotstar (30 วัน)",
    price: 89,
    stock: 22,
    category: "Streaming",
    image: "https://cdn.xdvz.shop/uploads/1784574876978.6287.webp",
  },
  {
    id: 6,
    title: "Spotify Premium (30 วัน)",
    price: 59,
    stock: 10,
    category: "Music",
    image: "https://cdn.xdvz.shop/uploads/1784912743151.907.webp",
  },
];

function Howbuyproducts() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Image
          alt="banner comunication logo"
          src={"/images/howbuybanner.jpg"}
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
            🛍️ ยังไม่ได้ทำ!!!
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Howbuyproducts;
