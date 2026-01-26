import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Fade,
  Chip,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { memo, useState, useEffect } from "react";
import carsylogo from "../assets/carsylogo.svg";
import { useTranslation } from "react-i18next";

// Icons as simple components
const CalendarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const WrenchIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);

const features = [
  {
    icon: CalendarIcon,
    title: "Feature One",
    description: "Describe the first key feature of your product here. What problem does it solve?",
  },
  {
    icon: UsersIcon,
    title: "Feature Two",
    description: "Describe the second key feature. How does it help your users?",
  },
  {
    icon: ClockIcon,
    title: "Feature Three",
    description: "Describe the third feature. What makes it valuable?",
  },
  {
    icon: ChartIcon,
    title: "Feature Four",
    description: "Describe the fourth feature. Include specific benefits.",
  },
  {
    icon: WrenchIcon,
    title: "Feature Five",
    description: "Describe the fifth feature. Be specific and compelling.",
  },
  {
    icon: PhoneIcon,
    title: "Feature Six",
    description: "Describe the sixth feature. End with a strong point.",
  },
];

const testimonials = [
  {
    name: "Customer Name",
    role: "Role, Company",
    avatar: "C",
    content: "Add a testimonial quote here. What did this customer love about your product?",
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation(["loginTSX"]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

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
          backdropFilter: "blur(10px)",
          backgroundColor: alpha(theme.palette.background.default, 0.8),
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
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
              <Box
                component="img"
                src={carsylogo}
                alt="Carsy logo"
                sx={{ height: { xs: 36, md: 48 } }}
              />
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
                  Primary CTA
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
          <Fade in={visible} timeout={800}>
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                  <Chip
                    label="{/* TODO: Badge text e.g. ✨ New version available */}"
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
                    Your Main Headline Here
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
                    A brief description of what your product does and why it matters to your target audience.
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 4 }}>
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
                      Get Started Free →
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        borderRadius: 999,
                        px: 4,
                        py: 1.5,
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        borderColor: alpha(theme.palette.text.primary, 0.2),
                        color: "text.primary",
                        "&:hover": {
                          borderColor: "primary.main",
                          backgroundColor: alpha(theme.palette.primary.main, 0.04),
                        },
                      }}
                    >
                      {/* TODO: Secondary CTA */}
                      See Demo
                    </Button>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {/* TODO: Trust signals */}
                    ✓ Free trial &nbsp; ✓ No credit card &nbsp; ✓ Cancel anytime
                  </Typography>
                </Box>
              </Grid>

              {/* Hero Image / Mockup */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Fade in={visible} timeout={1200}>
                  <Box
                    sx={{
                      position: "relative",
                      perspective: "1000px",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "background.paper",
                        borderRadius: 4,
                        boxShadow: `0 25px 50px -12px ${alpha("#000", 0.25)}`,
                        overflow: "hidden",
                        transform: isMobile ? "none" : "rotateY(-5deg) rotateX(5deg)",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "rotateY(0) rotateX(0)",
                        },
                      }}
                    >
                      {/* Mock app header */}
                      <Box
                        sx={{
                          bgcolor: "primary.main",
                          px: 3,
                          py: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Box sx={{ display: "flex", gap: 0.75 }}>
                          <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f57" }} />
                          <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
                          <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#28c840" }} />
                        </Box>
                        <Typography variant="body2" sx={{ color: "white", ml: 2, fontWeight: 600 }}>
                          {/* TODO: App name */}
                          Your App Name
                        </Typography>
                      </Box>
                      {/* Mock calendar content */}
                      <Box sx={{ p: 3 }}>
                        <Grid container spacing={1}>
                          {["Pon", "Wto", "Śro", "Czw", "Pią"].map((day) => (
                            <Grid size={2.4} key={day}>
                              <Typography
                                variant="caption"
                                sx={{
                                  display: "block",
                                  textAlign: "center",
                                  fontWeight: 600,
                                  color: "text.secondary",
                                  mb: 1,
                                }}
                              >
                                {day}
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>
                        <Grid container spacing={1} sx={{ mt: 1 }}>
                          {[...Array(10)].map((_, i) => (
                            <Grid size={2.4} key={i}>
                              <Box
                                sx={{
                                  height: 60,
                                  borderRadius: 1,
                                  bgcolor: i % 3 === 0 
                                    ? alpha(theme.palette.primary.main, 0.15)
                                    : i % 3 === 1
                                    ? alpha(theme.palette.warning.main, 0.15)
                                    : alpha(theme.palette.success.main, 0.15),
                                  border: `1px solid ${
                                    i % 3 === 0 
                                      ? alpha(theme.palette.primary.main, 0.3)
                                      : i % 3 === 1
                                      ? alpha(theme.palette.warning.main, 0.3)
                                      : alpha(theme.palette.success.main, 0.3)
                                  }`,
                                  p: 0.5,
                                }}
                              >
                                <Typography
                                  variant="caption"
                                  sx={{
                                    fontSize: "0.65rem",
                                    fontWeight: 600,
                                    color: i % 3 === 0 
                                      ? "primary.main"
                                      : i % 3 === 1
                                      ? "warning.dark"
                                      : "success.dark",
                                  }}
                                >
                                  {i % 3 === 0 ? "Wymiana oleju" : i % 3 === 1 ? "Przegląd" : "Hamulce"}
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                </Fade>
              </Grid>
            </Grid>
          </Fade>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 6, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
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
                  <Typography variant="body2" color="text.secondary" fontWeight={500}>
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
              Everything You Need
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto", fontWeight: 400 }}
            >
              {/* TODO: Features section subheading */}
              A comprehensive tool built for your needs
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
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
                    <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
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
              What Our Users Say
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto", fontWeight: 400 }}
            >
              {/* TODO: Testimonials subheading */}
              Join hundreds of happy customers
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
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
            Ready to Get Started?
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
            Start today and see how much you can achieve. Free trial included.
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
              Create Free Account
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: 999,
                px: 5,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderColor: "white",
                color: "white",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: alpha("#fff", 0.1),
                },
              }}
            >
              {/* TODO: CTA secondary button */}
              Schedule Demo
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
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Box
                  component="img"
                  src={carsylogo}
                  alt="Carsy"
                  sx={{ height: 40, filter: "brightness(0) invert(1)" }}
                />
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.7, maxWidth: 280 }}>
                {/* TODO: Footer description */}
                Brief description of your product or company. What makes you special?
              </Typography>
            </Grid>
            <Grid size={{ xs: 6, md: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "white", mb: 2, fontWeight: 600 }}>
                {/* TODO: Column 1 title */}
                Product
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { color: "white" } }}>
                  Features
                </Typography>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { color: "white" } }}>
                  Pricing
                </Typography>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { color: "white" } }}>
                  Integrations
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 6, md: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "white", mb: 2, fontWeight: 600 }}>
                {/* TODO: Column 2 title */}
                Company
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { color: "white" } }}>
                  About
                </Typography>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { color: "white" } }}>
                  Blog
                </Typography>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { color: "white" } }}>
                  Careers
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 6, md: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "white", mb: 2, fontWeight: 600 }}>
                {/* TODO: Column 3 title */}
                Support
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { color: "white" } }}>
                  Help
                </Typography>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { color: "white" } }}>
                  Contact
                </Typography>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { color: "white" } }}>
                  Status
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 6, md: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "white", mb: 2, fontWeight: 600 }}>
                {/* TODO: Column 4 title */}
                Legal
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { color: "white" } }}>
                  Terms
                </Typography>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { color: "white" } }}>
                  Privacy
                </Typography>
                <Typography variant="body2" sx={{ cursor: "pointer", "&:hover": { color: "white" } }}>
                  Cookies
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
              {/* TODO: Copyright */}
              © 2026 Your Company. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.5 }}>
              {/* TODO: Tagline */}
              Made with ❤️
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
});

export default LandingPage;
