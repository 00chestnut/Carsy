import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import carsylogo from "../../assets/carsylogo.svg";

const Footer = memo(function Footer() {
  const { t } = useTranslation(["loginTSX"]);

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: "#1a1a1a",
        color: alpha("#fff", 0.7),
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
            >
              <Box
                component="img"
                src={carsylogo}
                alt="Carsy"
                sx={{ height: 40, filter: "brightness(0) invert(1)" }}
              />
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.7, maxWidth: 280 }}>
              {t(
                "footerDescription",
                "Inteligentne rozwiązania dla Twojego warsztatu. Zarządzaj łatwo i efektywnie.",
              )}
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: "white", mb: 2, fontWeight: 600 }}
            >
              {t("productColumnTitle", "Product")}
            </Typography>
            <Stack spacing={1}>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
              >
                {t("features", "Features")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
              >
                {t("pricing", "Pricing")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
              >
                {t("integrations", "Integrations")}
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: "white", mb: 2, fontWeight: 600 }}
            >
              Company
            </Typography>
            <Stack spacing={1}>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
              >
                About
              </Typography>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
              >
                Blog
              </Typography>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
              >
                Careers
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: "white", mb: 2, fontWeight: 600 }}
            >
              Support
            </Typography>
            <Stack spacing={1}>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
              >
                Help
              </Typography>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
              >
                Contact
              </Typography>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
              >
                Status
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: "white", mb: 2, fontWeight: 600 }}
            >
              {t("legalColumnTitle", "Legal")}
            </Typography>
            <Stack spacing={1}>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
              >
                {t("terms", "Terms")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
              >
                {t("privacy", "Privacy")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", "&:hover": { color: "white" } }}
              >
                {t("cookies", "Cookies")}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 6,
            pt: 4,
            borderTop: `1px solid ${alpha("#fff", 0.1)}`,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.5 }}>
            © {new Date().getFullYear()}{" "}
            <a href="https://www.gearcode.eu/">GearCode</a>. All rights
            reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.5 }}>
            tu był maks
          </Typography>
        </Box>
      </Container>
    </Box>
  );
});

export default Footer;
