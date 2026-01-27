import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { memo, useMemo } from "react";
import { stats } from "./data";

const StatsSection = memo(function StatsSection() {
  const memoizedStats = useMemo(() => stats, []);

  return (
    <Box sx={{ py: 6, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {memoizedStats.map((stat, index) => (
            <Grid size={{ xs: 6, sm: 3 }} key={index}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: "primary.main",
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight={500}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

export default StatsSection;
