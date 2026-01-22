import { ThemeProvider } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import React, { Suspense, lazy } from "react";
import theme from "./styles/theme.ts";
import ForgotPassword from "./comp/forgotPassword.tsx"; 
import { useTranslation } from "react-i18next";

// Lazy load heavy components for better performance
// const MojWarsztat = lazy(() => import("./comp/mojWarsztat"));
const Login = lazy(() => import("./comp/login.tsx"));
// const Zlecenia = lazy(() => import("./comp/zlecenia.tsx"));

// Simple loading fallback that matches the theme
const LoadingFallback = () => (
  <Box
    sx={{
      minWidth: "100vw",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.palette.background.default,
    }}
    role="status"
    aria-label="Ładowanie..."
  />
);

export default function App() {
  const [showWarsztat, setShowWarsztat] = React.useState(false);
  const { t } = useTranslation(["appTSX"]);

  return (
    <ThemeProvider theme={theme}>
      {/* Skip link for keyboard navigation */}
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          "&:focus": {
            position: "fixed",
            top: 16,
            left: 16,
            width: "auto",
            height: "auto",
            padding: 2,
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            zIndex: 10001,
            borderRadius: 1,
            textDecoration: "none",
            fontWeight: 600,
          },
        }}
      >
        {t("PrzejdzDoGlownejTresci", "Przejdź do głównej treści")}
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowWarsztat(!showWarsztat)}
        aria-label={t("PrzelaczWidok", `Przełącz widok na ${showWarsztat ? "Zlecenia" : "Warsztat"}`)}
        aria-pressed={showWarsztat}
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 10000,
          opacity: 0.15,
          transition: "opacity 0.3s, transform 0.25s",
          ":hover": { opacity: 0.6, transform: "rotateZ(360deg)" },
          ":focus-visible": {
            opacity: 1,
            outline: "3px solid",
            outlineColor: "primary.dark",
            outlineOffset: 2,
          },
          ":before": {
            content: '""',
            position: "absolute",
            top: -25,
            left: -25,
            right: -25,
            bottom: -25,
          }
        }}
      >
        {t("PrzelaczWidok", `Przełącz widok na ${showWarsztat ? "Zlecenia" : "Warsztat"}`)}
      </Button>

      <Suspense fallback={<LoadingFallback />}>
        <Box id="main-content">
          {showWarsztat ? (
            // Workshop form - centered with white box
            <Box
              sx={{
                minWidth: "100vw",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#e8f5e9",
                padding: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: 3,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ForgotPassword />
                {/* <Zlecenia /> */}
              </Box>
            </Box>
          ) : (
            <Login /> // Sign-in form
          )}
        </Box>
      </Suspense>
    </ThemeProvider>
  );
}