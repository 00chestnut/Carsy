import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { useTheme, alpha } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const HeroSection = memo(function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  const { t } = useTranslation(["loginTSX"]);

  return (
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
                  {t(
                    "rozpocznijDarmowyOkresProbny",
                    "Rozpocznij darmowy okres próbny",
                  )}
                </Button>
              </Stack>
              <Typography variant="body2" color="text.secondary">
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
                {/* APP HEADER */}
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
                      {t("WierszeNaStrone", "Wiersze na stronę: 5")}
                    </Typography>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <Typography
                        sx={{ fontSize: "0.65rem", color: "text.secondary" }}
                      >
                        {t("1-5z15", "1–5 z 15")}
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
  );
});

export default HeroSection;
