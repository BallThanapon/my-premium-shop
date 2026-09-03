'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff80ab', // สีชมพูพาสเทลหลัก
      light: '#ffb3d9',
      dark: '#c94f7c',
      contrastText: '#fff',
    },
    secondary: {
      main: '#80d8ff', // สีฟ้าพาสเทลเสริม
    },
    background: {
      default: '#fff5f8', // สีพื้นหลังชมพูอ่อนมาก
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Kanit, Prompt, sans-serif',
  },
  shape: {
    borderRadius: 16, // ขอบมนสไตล์น่ารัก
  },
});

export default theme;