import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { useTheme, alpha } from "@mui/material/styles";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { testimonials } from "./data";

const TestimonialsSection = memo(function TestimonialsSection() {
  const theme = useTheme();
  const { t } = useTranslation(["loginTSX"]);
  const memoizedTestimonials = useMemo(() => testimonials, []);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: alpha(theme.palette.primary.main, 0.03),
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {t("testimonialsHeading", "Co mówią nasi użytkownicy")}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto", fontWeight: 400 }}
          >
            {t(
              "testimonialsSubheading",
              "Dołącz do setek zadowolonych klientów",
            )}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {memoizedTestimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      lineHeight: 1.8,
                      fontStyle: "italic",
                      color: "text.secondary",
                    }}
                  >
                    "{testimonial.content}"
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: "primary.main",
                        fontWeight: 600,
                      }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

export default TestimonialsSection;
