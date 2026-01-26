import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { useTheme, alpha } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { memo, useMemo } from "react";
import carsylogo from "../assets/carsylogo.svg";
import { useTranslation } from "react-i18next";

// Icons as memoized components to prevent re-renders
const CalendarIcon = memo(() => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
));

const UsersIcon = memo(() => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
));

const ClockIcon = memo(() => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
));

const ChartIcon = memo(() => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
));

const WrenchIcon = memo(() => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
));

const PhoneIcon = memo(() => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
));

const features = [
  {
    icon: CalendarIcon,
    title: "Feature One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: UsersIcon,
    title: "Feature Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: ClockIcon,
    title: "Feature Three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: ChartIcon,
    title: "Feature Four",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: WrenchIcon,
    title: "Feature Five",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: PhoneIcon,
    title: "Feature Six",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const testimonials = [
  {
    name: "Customer Name",
    role: "Role, Company",
    avatar: "C",
    content:
      "Add a testimonial quote here. What did this customer love about your product?",
  },
  {
    name: "Customer Name",
    role: "Role, Company",
    avatar: "C",
    content: "Add another testimonial. Focus on specific results or feelings.",
  },
  {
    name: "Customer Name",
    role: "Role, Company",
    avatar: "C",
    content: "Third testimonial. Variety in perspectives helps build trust.",
  },
];

const stats = [
  { value: "000+", label: "Stat Label" },
  { value: "000+", label: "Stat Label" },
  { value: "00%", label: "Stat Label" },
  { value: "00%", label: "Stat Label" },
];

const LandingPage = memo(function LandingPage() {
  const theme = useTheme();
  // Use noSsr to avoid hydration mismatch and reduce CLS
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
  const { t } = useTranslation(["loginTSX"]);

  // Memoize static data to prevent re-renders
  const memoizedFeatures = useMemo(() => features, []);
  const memoizedTestimonials = useMemo(() => testimonials, []);
  const memoizedStats = useMemo(() => stats, []);

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        overflowX: "hidden",
      }}
    >
      {/* Navigation */}
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
          // Use will-change for better GPU compositing
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
                  {/* TODO: Nav CTA text */}
                  {t("zalozKonto", "Załóż konto")}
                </Button>
              )}
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 14, md: 18 },
          pb: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.primary.main, 0.08)} 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <Box
          sx={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(theme.palette.success.main, 0.06)} 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg">
          <Grid
            container
            spacing={6}
            alignItems="center"
            sx={{
              "@keyframes fadeSlideIn": {
                from: { opacity: 0, transform: "translateY(20px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
              animation: "fadeSlideIn 0.6s ease-out forwards",
            }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Chip
                  label={t("badgeText", "✨ Pop up")}
                  sx={{
                    mb: 3,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: "primary.main",
                    fontWeight: 600,
                    "& .MuiChip-label": { px: 2 },
                  }}
                />
                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    mb: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {/* TODO: Main headline */}
                  {t(
                    "mainHeadline",
                    "Carsy - Cyfrowy grafik który szanuje twój czas",
                  )}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    mb: 4,
                    maxWidth: 480,
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  {/* TODO: Subheadline - describe your value proposition */}
                  {t(
                    "subHeadline",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
                  )}
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mb: 4 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      borderRadius: 999,
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.5)}`,
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    {/* TODO: Primary CTA */}
                    {t(
                      "rozpocznijDarmowyOkresProbny",
                      "Rozpocznij darmowy okres próbny",
                    )}
                  </Button>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {/* TODO: Trust signals */}
                  {t(
                    "darmowyOkresProbny",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  )}
                </Typography>
              </Box>
            </Grid>

            {/* Hero Image / Mockup */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  perspective: "1000px",
                  "@keyframes fadeSlideInDelayed": {
                    from: { opacity: 0, transform: "translateY(30px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                  animation: "fadeSlideInDelayed 0.8s ease-out 0.2s forwards",
                  opacity: 0,
                }}
              >
                <Card
                  sx={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: `0 25px 50px -12px ${alpha("#000", 0.25)}`,
                    transform: isMobile
                      ? "none"
                      : "rotateY(-5deg) rotateX(5deg)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "rotateY(0) rotateX(0)",
                    },
                    border: `1px solid ${theme.palette.divider}`,
                    bgcolor: "#eef6f0",
                  }}
                >
                  {/* APP HEADER - matches zlecenia.tsx */}
                  <Box
                    sx={{
                      px: 2,
                      py: 1.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: theme.palette.background.paper,
                      borderRadius: "8px 8px 0 0",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                    }}
                  >
                    {/* Left: burger + title */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        sx={{
                          color: "primary.main",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <rect
                            x={3}
                            y={6}
                            width={18}
                            height={2}
                            rx={1}
                            fill={theme.palette.primary.main}
                          />
                          <rect
                            x={3}
                            y={11}
                            width={18}
                            height={2}
                            rx={1}
                            fill={theme.palette.primary.main}
                          />
                          <rect
                            x={3}
                            y={16}
                            width={18}
                            height={2}
                            rx={1}
                            fill={theme.palette.primary.main}
                          />
                        </svg>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: 22,
                          fontWeight: 700,
                          color: "primary.main",
                        }}
                      >
                        Zlecenia (Placeholder)
                      </Typography>
                    </Box>

                    {/* Right: search + settings */}
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.75 }}
                    >
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: 1,
                          bgcolor: "#f4faf6",
                          border: `1px solid ${theme.palette.divider}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={theme.palette.primary.main}
                          strokeWidth="2"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.35-4.35" />
                        </svg>
                      </Box>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: 1,
                          bgcolor: "#f4faf6",
                          border: `1px solid ${theme.palette.divider}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={theme.palette.primary.main}
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                      </Box>
                    </Box>
                  </Box>

                  {/* Header divider */}
                  <Box
                    sx={{ height: 4, backgroundColor: theme.palette.divider }}
                  />

                  {/* Main content card */}
                  <CardContent
                    sx={{
                      p: 0,
                      bgcolor: theme.palette.background.paper,
                      "&:last-child": { pb: 0 },
                    }}
                  >
                    {/* DataGrid Header Row */}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns:
                          "0.5fr 1.2fr 1.6fr 1fr 1.4fr 0.8fr",
                        gap: 1,
                        px: 1.5,
                        py: 1,
                        bgcolor: theme.palette.background.paper,
                        borderBottom: `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      {["", "Nr rej.", "Pojazd", "Status", "Klient", ""].map(
                        (header, idx) => (
                          <Typography
                            key={idx}
                            sx={{
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              color: "text.secondary",
                            }}
                          >
                            {header}
                          </Typography>
                        ),
                      )}
                    </Box>

                    {/* DataGrid Rows */}
                    {[
                      {
                        reg: "SCI WW75",
                        vehicle: "Ferrari 812 Competizione",
                        status: "Zaplanowane",
                        statusColor: "warning",
                        client: "Adam Nowak",
                        online: true,
                      },
                      {
                        reg: "SB 4JX22",
                        vehicle: "BMW M4 G82 Competition",
                        status: "W trakcie",
                        statusColor: "info",
                        client: "Piotr Wiśniewski",
                        online: false,
                      },
                      {
                        reg: "PO 8XK91",
                        vehicle: "Lotus Exige Sport 410",
                        status: "Gotowe do wydania",
                        statusColor: "success",
                        client: "Anna Kaczmarek",
                        online: true,
                      },
                      {
                        reg: "SCI KR25F",
                        vehicle: "Porsche 911 GT3 RS 992.2",
                        status: "Gotowe do wydania",
                        statusColor: "success",
                        client: "Milena Witoszek",
                        online: true,
                      },
                      {
                        reg: "WX 2R5T8",
                        vehicle: "Volkswagen Passat B5",
                        status: "Odebrane",
                        statusColor: "default",
                        client: "Marcin Zieliński",
                        online: false,
                      },
                    ].map((row, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: "grid",
                          gridTemplateColumns:
                            "0.5fr 1.2fr 1.6fr 1fr 1.4fr 0.8fr",
                          gap: 1,
                          px: 1.5,
                          py: 1,
                          alignItems: "center",
                          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                          bgcolor: theme.palette.background.paper,
                          "&:hover": {
                            bgcolor: alpha(theme.palette.primary.main, 0.02),
                          },
                        }}
                      >
                        {/* 3-dot menu */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill={theme.palette.text.secondary}
                          >
                            <circle cx="12" cy="5" r="2" />
                            <circle cx="12" cy="12" r="2" />
                            <circle cx="12" cy="19" r="2" />
                          </svg>
                        </Box>

                        {/* Registration */}
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            color: "text.secondary",
                          }}
                        >
                          {row.reg}
                        </Typography>

                        {/* Vehicle */}
                        <Typography
                          sx={{ fontSize: "0.75rem", color: "text.secondary" }}
                        >
                          {row.vehicle}
                        </Typography>

                        {/* Status Chip */}
                        <Chip
                          size="small"
                          label={row.status}
                          color={row.statusColor as any}
                          variant="outlined"
                          sx={{
                            height: 22,
                            fontSize: "0.6rem",
                            borderWidth: 2,
                            "& .MuiChip-label": { px: 0.75 },
                          }}
                        />

                        {/* Client with online dot */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.75,
                          }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              bgcolor: row.online ? "success.main" : "grey.400",
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: "0.75rem",
                              color: "text.secondary",
                            }}
                          >
                            {row.client}
                          </Typography>
                        </Box>

                        {/* Action buttons */}
                        <Box sx={{ display: "flex", gap: 0.5 }}>
                          <Box
                            sx={{
                              width: 26,
                              height: 26,
                              borderRadius: 1,
                              bgcolor: "#f4faf6",
                              border: `1px solid ${theme.palette.divider}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke={
                                row.online
                                  ? theme.palette.success.main
                                  : theme.palette.grey[400]
                              }
                              strokeWidth="2"
                            >
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                          </Box>
                          <Box
                            sx={{
                              width: 26,
                              height: 26,
                              borderRadius: 1,
                              bgcolor: "#f4faf6",
                              border: `1px solid ${theme.palette.divider}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke={
                                row.online
                                  ? theme.palette.success.main
                                  : theme.palette.grey[400]
                              }
                              strokeWidth="2"
                            >
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                          </Box>
                        </Box>
                      </Box>
                    ))}

                    {/* Pagination footer */}
                    <Box
                      sx={{
                        px: 1.5,
                        py: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTop: `1px solid ${theme.palette.divider}`,
                        bgcolor: theme.palette.background.paper,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "0.65rem", color: "text.secondary" }}
                      >
                        {t("WierszeNaStrone","Wiersze na stronę: 5")}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Typography
                          sx={{ fontSize: "0.65rem", color: "text.secondary" }}
                        >
                          {t("1-5z15","1–5 z 15")}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 0.25 }}>
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              borderRadius: 0.5,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Typography
                              sx={{ fontSize: 10, color: "text.disabled" }}
                            >
                              {"<"}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              borderRadius: 0.5,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Typography
                              sx={{ fontSize: 10, color: "text.secondary" }}
                            >
                              {">"}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
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

      {/* Features Section */}
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
              {/* TODO: Features section heading */}
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
              {/* TODO: Features section subheading */}
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

      {/* Testimonials Section */}
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
              {/* TODO: Testimonials heading */}
              {t("testimonialsHeading", "Co mówią nasi użytkownicy")}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto", fontWeight: 400 }}
            >
              {/* TODO: Testimonials subheading */}
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

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {/* TODO: CTA headline */}
            {t("ctaHeadline", "Gotowy rozpocząć?")}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              fontWeight: 400,
              maxWidth: 500,
              mx: "auto",
            }}
          >
            {/* TODO: CTA subtext */}
            {t(
              "startToday",
              "Rozpocznij już dziś i zobacz, ile możesz osiągnąć.",
            )}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: 999,
                px: 5,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                bgcolor: "white",
                color: "primary.main",
                "&:hover": {
                  bgcolor: alpha("#fff", 0.9),
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              {/* TODO: CTA primary button */}
              {t(
                "rozpocznijDarmowyOkresProby",
                "Rozpocznij darmowy okres próby",
              )}
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
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
                {/* TODO: Footer description */}
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
                {/* TODO: Column 1 title */}
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
                {/* TODO: Column 2 title */}
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
                {/* TODO: Column 3 title */}
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
                {/* TODO: Column 4 title */}
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
              {/* TODO: Copyright */}© {new Date().getFullYear()}{" "}
              <a href="https://www.gearcode.eu/">GearCode</a>. All rights
              reserved.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.5 }}>
              {/* TODO: Tagline */}
              tu był maks
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
});

export default LandingPage;
