import { Box, Button, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import Preloader from "./Preloader";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import obrazek from "../assets/obrazek.jpg";
export default function Login() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {/* <Preloader /> */}
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: theme.palette.background.default,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "40vw 1fr",
        }}
      >
        {/* Left panel */}
        <Box
          sx={{
            p: isMobile ? 3 : 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 4,
            marginLeft: isMobile ? 0 : 6,
            marginRight: isMobile ? 0 : 6,
          }}
        >
          <Box>
            {/* header, intro needs to be separated */}
            {/* Logo */}
            <Box
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
                  sx={{ m: 0 }}
                >
                  🚗logo
                </Typography>
              </Box>
              <Typography variant="h5" color="primary" fontWeight={650}>
                Witaj w Carsy
              </Typography>
            </Box>
            {/* Intro text */}
            <Box
              sx={{
                mt: 12,
                mx: isMobile ? 0 : -6, // negative margin to stretch past parent padding
                px: isMobile ? 0 : 6, // add padding back inside so text stays aligned
                py: 2,
                bgcolor: "background.paper",
                borderRadius: 0, // no rounding
                boxShadow: theme.shadows[8],
                position: "relative",
                zIndex: 10, // higher z-index to override margins inside parent
                transform: isMobile ? "none" : "translateY(-18px)",
                transition: "transform 200ms ease, box-shadow 200ms ease",
                width: isMobile ? "100%" : "calc(100% + 96px)", // account for negative margins (6 * 8px * 2)
              }}
            >
              <Typography
                variant="h4"
                color="primary"
                sx={{
                  maxWidth: 360,
                  mb: 1,
                  mt: 0, // remove large top margin so the box is wrapped tightly
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: -0.5,
                }}
              >
                Cyfrowy grafik dla prawdziwych fachowców
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  maxWidth: 360,
                  fontWeight: 500,
                  lineHeight: 1.6,
                  fontSize: "1rem",
                }}
              >
                Serwis auta, który szanuje Twój czas.
              </Typography>
            </Box>
        </Box>
          {/* Form */}
          <Box
            sx={{
              maxWidth: 420,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              p: 2,
              borderRadius: 2,
              boxShadow: `0 2px 8px rgba(0, 0, 0, 0.08)`,
            }}
          >
            <Button
              variant="contained"
              size="large"
              fullWidth
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
              }}
            >
              Zaloguj się
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              fullWidth
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
              }}
            >
              Załóż konto
            </Button>
          </Box>

          {/* Footer links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.25,
              alignItems: "flex-start",
            }}
          >
            <Link
              href="#"
              underline="none"
              color="text.secondary"
              variant="body2"
              sx={{
                position: "relative",
                py: 0.5,
                fontWeight: 500,
                letterSpacing: 0.3,
                transition: "color .18s ease",
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
              href="#"
              underline="none"
              color="text.secondary"
              variant="body2"
              sx={{
                position: "relative",
                py: 0.5,
                fontWeight: 500,
                letterSpacing: 0.3,
                transition: "color .18s ease",
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
              href="#"
              underline="none"
              color="text.secondary"
              variant="body2"
              sx={{
                position: "relative",
                py: 0.5,
                fontWeight: 500,
                letterSpacing: 0.3,
                transition: "color .18s ease",
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
                width: "80px", 
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
                background: `linear-gradient(to right, 
								rgba(0, 0, 0, 0.05) 0%, 
								rgba(0, 0, 0, 0.02) 20%,
								transparent 50%, 
								rgba(0, 0, 0, 0.02) 80%,
								rgba(0, 0, 0, 0.05) 100%)`,
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
                bgcolor: "grey.400",
                boxShadow: theme.shadows[12],
                opacity: imageLoaded ? 0 : 0.3,
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
              alt="Login background"
              style={{
                zIndex: 100,
                display: "none",
              }}
              onLoad={() => setImageLoaded(true)}
            />
          </Box>
        )}
      </Box>
    </>
  );
}
