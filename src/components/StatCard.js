"use client";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "primary.main",
}) {
  return (
    <Card
      sx={{
        borderLeft: 6,
        borderColor: color,
        transition: "transform 0.3s ease, background-color 0.3s ease",
        "&:hover": {
          transform: "translateY(4px)",
        },
      }}
    >
      <CardContent>
        <Box sx={{ textAlign: "center" }}>
          <Box>
            <Typography color="text.secondary" variant="subtitle2" gutterBottom>
              {title}
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: "bold", color }}>
              {value}
            </Typography>
          </Box>
          {Icon && (
            <Box
              sx={{
                p: 1.5,
                borderRadius: "50%",
                bgcolor: "background.default",
              }}
            >
              <Icon sx={{ fontSize: 36, color }} />
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
