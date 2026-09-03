"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

const navItems = ["หน้าแรก", "สินค้าทั้งหมด", "วิธีสั่งซื้อ", "ติดต่อเรา"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" color="primary" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters justifycontent="space-between">
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            ✨ Bally Premium Shop
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Link href={"/"}>
              <Button key={1} sx={{ color: "#fff", mx: 1 }}>
                หน้าแรก
              </Button>
            </Link>
            <Link href={"/product"}>
              <Button key={2} sx={{ color: "#fff", mx: 1 }}>
                สินค้าทั้งหมด
              </Button>
            </Link>
            <Link href={"/howbuy"}>
              <Button key={3} sx={{ color: "#fff", mx: 1 }}>
                วิธีสั่งซื้อ
              </Button>
            </Link>

            <Link href={"/contact"}>
              <Button key={4} sx={{ color: "#fff", mx: 1 }}>
                ติดต่อเรา
              </Button>
            </Link>

            <Button
              variant="contained"
              color="secondary"
              startIcon={<ShoppingCartIcon />}
              sx={{ ml: 2, borderRadius: "20px", color: "#fff" }}
            >
              เข้าสู่ระบบ
            </Button>
          </Box>

          {/* Mobile Hamburger Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        <Box onClick={handleDrawerToggle} sx={{ width: 250, pt: 2 }}>
          <List>
            <Link href={"/"}>
              {" "}
              <ListItem key={1}>
                <ListItemText primary={"หน้าแรก"} />
              </ListItem>
            </Link>

            <Link href={"/product"}>
              <ListItem key={2}>
                <ListItemText primary={"สินค้าทั้งหมด"} />
              </ListItem>
            </Link>

            <Link href={"/howbuy"}>
              <ListItem key={3}>
                <ListItemText primary={"วิธีสั่งซื้อ"} />
              </ListItem>
            </Link>

            <Link href={"/contact"}>
              <ListItem key={4}>
                <ListItemText primary={"ติดต่อเรา"} />
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
