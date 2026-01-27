import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useTheme, alpha } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import carsylogo from "../../assets/carsylogo.svg";

const Navbar = memo(function Navbar() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
  const { t } = useTranslation(["loginTSX"]);

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: alpha(theme.palette.background.default, 0.95),
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        willChange: "transform",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <a href="/">
              <Box
                component="img"
                src={carsylogo}
                alt="Carsy logo"
                sx={{ height: { xs: 36, md: 48 } }}
              />
            </a>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 999,
                px: 3,
                borderColor: "primary.main",
                color: "primary.main",
                fontWeight: 600,
                "&:hover": {
                  borderColor: "primary.dark",
                  backgroundColor: alpha(theme.palette.primary.main, 0.04),
                },
              }}
            >
              {t("zalogujSie", "Zaloguj się")}
            </Button>
            {!isSmall && (
              <Button
                variant="contained"
                sx={{
                  borderRadius: 999,
                  px: 3,
                  fontWeight: 600,
                  boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.5)}`,
                  },
                  transition: "all 0.2s ease",
                }}
              >
                {t("zalozKonto", "Załóż konto")}
              </Button>
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
});

export default Navbar;
