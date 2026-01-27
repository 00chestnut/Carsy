import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useTheme, alpha } from "@mui/material/styles";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const CTASection = memo(function CTASection() {
  const theme = useTheme();
  const { t } = useTranslation(["loginTSX"]);

  return (
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
            {t(
              "rozpocznijDarmowyOkresProby",
              "Rozpocznij darmowy okres próby",
            )}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
});

export default CTASection;
