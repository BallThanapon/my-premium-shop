'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        {/* SEO Meta Tags สำหรับ Next.js Client Component */}
        <title>Neko Premium Shop - จำหน่ายแอปพรีเมียม สตรีมมิ่ง ราคาถูก</title>
        <meta
          name="description"
          content="ศูนย์รวมบริการแอปพรีเมียม Netflix, YouTube Premium, Spotify, Disney+ ราคาประหยัด ปลอดภัย ส่งไว 24 ชม."
        />
        <meta
          name="keywords"
          content="แอปพรีเมียม, Netflix ราคาถูก, YouTube Premium, Disney+, Neko Shop"
        />
        <meta property="og:title" content="Neko Premium Shop - จำหน่ายแอปพรีเมียม" />
        <meta
          property="og:description"
          content="ศูนย์รวมบริการแอปพรีเมียม ราคาประหยัด ปลอดภัย ส่งไว 24 ชม."
        />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          {/* CssBaseline ช่วย reset CSS ให้สอดคล้องกับธีมของ MUI */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}