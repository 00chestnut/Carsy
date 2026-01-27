import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme, alpha } from "@mui/material/styles";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { features } from "./data";

const FeaturesSection = memo(function FeaturesSection() {
  const theme = useTheme();
  const { t } = useTranslation(["loginTSX"]);
  const memoizedFeatures = useMemo(() => features, []);

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
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
            {t(
              "featuresSectionHeading",
              "Wszystko czego potrzebujesz w jednym miejscu",
            )}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto", fontWeight: 400 }}
          >
            {t(
              "featuresSectionSubheading",
              "Inteligentne narzędzia zbudowane na miarę twoich potrzeb",
            )}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {memoizedFeatures.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  p: 1,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.1)}`,
                    borderColor: alpha(theme.palette.primary.main, 0.2),
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "primary.main",
                      mb: 2,
                    }}
                  >
                    <feature.icon />
                  </Box>
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    lineHeight={1.7}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

export default FeaturesSection;
