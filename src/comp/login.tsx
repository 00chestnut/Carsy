import { Box, Button, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useState, memo } from "react";
import obrazek from "../assets/obrazek.jpg";
import carsylogo from "../assets/carsylogo.svg";

const Login = memo(function Login() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box
      component="main"
      role="main"
      aria-label="Strona logowania"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.background.default,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "40vw 1fr" },
      }}
    >
        {/* Left panel */}
        <Box
          sx={{
            px: { xs: theme.spacing(3), md: theme.spacing(5) },
            py: { xs: theme.spacing(3), md: theme.spacing(5) },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: theme.spacing(4),
            marginLeft: { xs: 0, md: theme.spacing(6) },
            marginRight: { xs: 0, md: theme.spacing(6) },
          }}
        >
          <Box>
            {/* header, intro needs to be separated */}
            {/* Logo */}
            <Box
              component="header"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                mb: 4,
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  color="primary"
                  fontWeight={700}
                  component="div"
                  sx={{ m: 0, display: 'flex', alignItems: 'center', gap: 1 }}
                >
                    <Box
                      component="img"
                      src={carsylogo}
                      alt="Carsy - logo systemu zarządzania warsztatem"
                      loading="eager"
                      decoding="async"
                      sx={{
                        height: { xs: 36, md: 64 },
                        width: "auto",
                        display: "block",
                        flexShrink: 0,
                      }}
                    />
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                <Typography
                  component="h1"
                  variant="h5"
                  color="primary"
                  fontWeight={700}
                  sx={{ fontSize: { xs: "1.125rem", md: "1.5rem" } }}
                >
                  Witaj w Carsy
                </Typography>
              </Box>
            </Box>
            {/* Intro text */}
            <Box
              component="section"
              aria-labelledby="intro-heading"
              sx={{
                mt: { xs: 6, md: 12 },
                ml: { xs: -3, md: -12 }, // always touches left edge
                px: { xs: 3, md: 6 },
                py: 3,
                bgcolor: "background.paper",
                boxShadow: theme.shadows[4],
                position: "relative",
                zIndex: 10,
                transform: { xs: "none", md: "translateY(-18px)" },
                transition: theme.transitions.create(['transform', 'box-shadow'], {
                  duration: theme.transitions.duration.standard,
                  easing: theme.transitions.easing.easeOut,
                }),
                width: { xs: "calc(100% + 24px)", md: "calc(100% + 96px)" }, // stretches to edge
                '&:hover': {
                  boxShadow: theme.shadows[8],
                  transform: { xs: "none", md: "translateY(-20px)" },
                },
              }}
            >
              <Typography
                id="intro-heading"
                component="h2"
                variant="h4"
                color="primary"
                sx={{
                  maxWidth: 360,
                  mb: theme.spacing(1),
                  mt: 0,
                  fontWeight: theme.typography.fontWeightBold,
                  lineHeight: theme.typography.h4.lineHeight,
                  letterSpacing: theme.typography.h4.letterSpacing,
                  fontSize: { xs: '1.75rem', sm: '2.125rem' },
                }}
              >
                Cyfrowy grafik dla prawdziwych fachowców
              </Typography>
              <Typography
                component="p"
                variant="h6"
                color="text.secondary"
                sx={{
                  maxWidth: 360,
                  fontWeight: theme.typography.fontWeightRegular,
                  lineHeight: theme.typography.h6.lineHeight,
                  letterSpacing: theme.typography.h6.letterSpacing,
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                }}
              >
                Serwis auta, który szanuje Twój czas.
              </Typography>
            </Box>
        </Box>
          {/* Form */}
        <Box
            component="section"
            aria-label="Opcje logowania"
            sx={{
                bgcolor: "background.paper",
                boxShadow: theme.shadows[4],
                borderRadius: theme.shape.borderRadius,
                maxWidth: 420,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(3),
                justifyContent: "center",
                alignItems: "stretch",
                alignSelf: "center",
                flexShrink: 0,
                p: { xs: theme.spacing(2), md: theme.spacing(3) },
            }}
        >
            <Button
              variant="contained"
              size="large"
              fullWidth
              type="button"
              aria-label="Zaloguj się do swojego konta"
              sx={{
                borderRadius: 999,
                py: 1.3,
                fontWeight: 600,
                letterSpacing: 0.5,
                boxShadow: theme.shadows[2],
                transition: "all 0.2s ease",
                "&:hover": {
                  boxShadow: theme.shadows[8],
                  transform: "translateY(-2px)",
                },
                "&:focus-visible": {
                  outline: `3px solid ${theme.palette.primary.main}`,
                  outlineOffset: 2,
                },
              }}
            >
              Zaloguj się
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              fullWidth
              type="button"
              aria-label="Załóż nowe konto w systemie Carsy"
              sx={{
                borderRadius: 999,
                py: 1.3,
                fontWeight: 600,
                letterSpacing: 0.5,
                backgroundColor: "secondary.main",
                boxShadow: theme.shadows[2],
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "primary.main",
                  boxShadow: theme.shadows[8],
                  transform: "translateY(-2px)",
                },
                "&:focus-visible": {
                  outline: `3px solid ${theme.palette.secondary.main}`,
                  outlineOffset: 2,
                },
              }}
            >
              Załóż konto
            </Button>
          </Box>

          {/* Footer links */}
          <Box
            component="nav"
            aria-label="Linki pomocnicze"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.25,
              alignItems: "flex-start",
              flexShrink: 0,
            }}
          >
            <Link
              component="button"
              type="button"
              underline="none"
              color="text.secondary"
              variant="body2"
              sx={{
                position: "relative",
                py: 0.5,
                fontWeight: 500,
                letterSpacing: 0.3,
                transition: "color .18s ease",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                "&:hover": { color: "primary.main" },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  height: 2,
                  width: 0,
                  bgcolor: "primary.main",
                  transition: "width .18s ease",
                },
                "&:hover:after": { width: "100%" },
              }}
            >
              Nie pamiętam hasła
            </Link>
            <Link
              component="button"
              type="button"
              underline="none"
              color="text.secondary"
              variant="body2"
              sx={{
                position: "relative",
                py: 0.5,
                fontWeight: 500,
                letterSpacing: 0.3,
                transition: "color .18s ease",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                "&:hover": { color: "primary.main" },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  height: 2,
                  width: 0,
                  bgcolor: "primary.main",
                  transition: "width .18s ease",
                },
                "&:hover:after": { width: "100%" },
              }}
            >
              Problem z aplikacją?
            </Link>
            <Link
              component="button"
              type="button"
              underline="none"
              color="text.secondary"
              variant="body2"
              sx={{
                position: "relative",
                py: 0.5,
                fontWeight: 500,
                letterSpacing: 0.3,
                transition: "color .18s ease",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                "&:hover": { color: "primary.main" },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  height: 2,
                  width: 0,
                  bgcolor: "primary.main",
                  transition: "width .18s ease",
                },
                "&:hover:after": { width: "100%" },
              }}
            >
              Kontakt
            </Link>
          </Box>
        </Box>

        {/* Right panel (lazy loaded background image) */}
        {!isMobile && (
          <Box
            sx={{
              position: "relative",
              bgcolor: "grey.200",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* Blur placeholder (visible until image loads) */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%23e0e0e0' width='1200' height='800'/%3E%3C/svg%3E")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(10px)",
                opacity: imageLoaded ? 0 : 1,
                transition: "opacity 0.6s ease-out",
                zIndex: 1,
              }}
            />

            {/* Main image container */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage: imageLoaded ? `url("${obrazek}")` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: imageLoaded ? 1 : 0,
                transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: 10,
                filter: imageLoaded ? "blur(0px)" : "blur(5px)",
              }}
              onLoad={() => setImageLoaded(true)}
            />

            {/* Left edge blur gradient for smooth transition */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: "5px", 
                background: `linear-gradient(to right, ${theme.palette.background.default} 0%, transparent 100%)`,
                zIndex: 100,
                pointerEvents: "none",
              }}
            />

            {/* Smooth blur gradient transition overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: (theme as any).overlayGradient,
                backdropFilter: imageLoaded ? "blur(0px)" : "blur(3px)",
                opacity: imageLoaded ? 0 : 0.6,
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: 25,
                pointerEvents: "none",
              }}
            />

            {/* Fallback content (visible if image fails to load) */}
            <Box
              sx={{
                position: "relative",
                zIndex: 3,
                width: "75%",
                height: "70%",
                borderRadius: 3,
                bgcolor: "background.paper",
                boxShadow: theme.shadows[8],
                opacity: imageLoaded ? 0 : 0.28,
                transition: "opacity 0.6s ease-out",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "text.secondary",
              }}
            >
              {" "}
            </Box>

            {/* Preload image element */}
            <img
              src={obrazek}
              alt=""
              role="presentation"
              decoding="async"
              loading="lazy"
              style={{
                position: "absolute",
                width: 1,
                height: 1,
                opacity: 0,
                pointerEvents: "none",
              }}
              onLoad={() => setImageLoaded(true)}
            />
          </Box>
        )}
    </Box>
  );
});

export default Login;
