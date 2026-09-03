'use client';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Chip, Box } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function ProductCard({ title, price, stock, image, category }) {
  const isOutOfStock = stock <= 0;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-4px)' } }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="160"
          image={image || 'https://via.placeholder.com/300x160?text=Premium+App'}
          alt={title}
        />
        {category && (
          <Chip
            label={category}
            size="small"
            color="primary"
            sx={{ position: 'absolute', top: 8, right: 8 }}
          />
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
          {title}
        </Typography>

        <Box  mt={2}>
          <Typography variant="h6" color="secondary.dark" sx={{ fontWeight: 'bold' }}>
            ฿{price}
          </Typography>
          
          <Typography variant="body2" color={isOutOfStock ? 'error.main' : 'text.secondary'}>
            {isOutOfStock ? 'สินค้าหมด' : `คงเหลือ: ${stock}`}
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          disabled={isOutOfStock}
          startIcon={<ShoppingBagIcon />}
          sx={{ borderRadius: '10px' }}
        >
          {isOutOfStock ? 'สินค้าหมด' : 'สั่งซื้อทันที'}
        </Button>
      </CardActions>
    </Card>
  );
}