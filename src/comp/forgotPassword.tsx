import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  InputAdornment,
  Alert,
  Stack,
  useTheme,
} from "@mui/material";
import { Visibility, VisibilityOff, LockReset } from "@mui/icons-material";
export default function ForgotPassword() {
  const theme = useTheme();
  const { t } = useTranslation(["forgotPassword"]);
  const [mode, setMode] = useState<"request" | "reset">("request");
  const [form, setForm] = useState({
    email: "",
    code: "",
    password: "",
    confirm: "",
  });
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [field]: e.target.value });
      setErrors((prev) => ({ ...prev, [field]: "" }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setErrors({});

    const nextErrors: Record<string, string> = {};

    if (mode === "request" && !/\S+@\S+\.\S+/.test(form.email)) {
    nextErrors.email = t("WprowadzPoprawnyEmail", "Wprowadź poprawny adres email.");
    }

    if (mode === "reset") {
      if (!form.code) {
        nextErrors.code = t("WprowadzKodResetowania", "Wprowadź kod resetowania.");
      }
      if (form.password.length < 8) {
        nextErrors.password = t("HasloMin8Znakow", "Hasło musi mieć co najmniej 8 znaków.");
      }
      if (form.password !== form.confirm) {
        nextErrors.confirm = t("HaslaNieSaIdentyczne", "Hasła nie są identyczne.");
      }
    }

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 900)); // TODO: replace with real API call
      setMessage({
        type: "success",
        text:
          mode === "request"
            ? t("KodWyslany", "Jeśli konto istnieje, kod został wysłany na podany email.")
            : t("HasloZaktualizowane", "Hasło zaktualizowane. Możesz się zalogować."),
      });
      if (mode === "reset") {
        setForm({ email: "", code: "", password: "", confirm: "" });
        setTimeout(() => setMode("request"), 2000);
      }
    } catch {
      setMessage({ type: "error", text: t("BladSprobujPonownie", "Wystąpił błąd. Spróbuj ponownie.") });
    } finally {
      setLoading(false);
    }
  };

  const btnSx = {
    py: { xs: 1.25, sm: 1.5 },
    borderRadius: 2,
    textTransform: "none",
    fontWeight: 600,
    fontSize: { xs: "0.95rem", sm: "1rem" },
    transition: "all 0.2s",
    "&:hover": { transform: "translateY(-2px)" },
  };

  const emailValid =
    mode === "reset" ? true : /\S+@\S+\.\S+/.test(form.email);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
        p: 2,
      }}
    >
      <Card
        elevation={8}
        sx={{
          width: { xs: "100%", sm: 500 },
          maxWidth: 520,
          borderRadius: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            color: "common.white",
            px: { xs: 3, sm: 4 },
            py: { xs: 3, sm: 4 },
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            gap: { sm: 2.5 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
              width: { xs: "100%", sm: "auto" },
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                width: { xs: 56, sm: 64 },
                height: { xs: 56, sm: 64 },
                borderRadius: 2,
                bgcolor: "rgba(255,255,255,0.15)",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <LockReset sx={{ fontSize: { xs: 28, sm: 32 } }} />
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
                lineHeight: 1.2,
              }}
            >
              {mode === "request" ? t("OdzyskajHaslo", "Odzyskaj hasło") : t("UstawNoweHaslo", "Ustaw nowe hasło")}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mt: 0.75,
                opacity: 0.95,
                fontSize: { xs: "0.8rem", sm: "0.875rem" },
              }}
            >
              {mode === "request"
                ? t("WprowadzEmailInstrukcjeKod", "Wprowadź adres e-mail powiązany z kontem - wyślemy instrukcje i jednorazowy kod.")
                : t("WprowadzKodNoweHaslo", "Wprowadź kod otrzymany e‑mailem oraz nowe, bezpieczne hasło.")}
            </Typography>
          </Box>
        </Box>

        <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
          {message && (
            <Alert
              severity={message.type}
              sx={{
                mb: 2.5,
                borderRadius: 2,
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
              role="status"
              aria-live={message.type === "error" ? "assertive" : "polite"}
            >
              {message.text}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} noValidate 
          sx={{
            transition: "opacity 0.3s ease",
            opacity: loading ? 0.6 : 1,
            transform: loading ? "scale(0.98)" : "scale(1)",
          }}>
            <Stack spacing={2.5}>
              {mode === "request" && (
                <TextField
                  variant="standard"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  fullWidth
                  required
                  autoFocus={mode === "request"}
                  error={Boolean(errors.email)}
                  helperText={errors.email || undefined}
                />
              )}
              {mode === "reset" && (
                <>
                  <TextField
                    label={t("KodResetowania", "Kod resetowania")}
                    value={form.code}
                    onChange={handleChange("code")}
                    fullWidth
                    required
                    error={Boolean(errors.code)}
                    helperText={errors.code || t("KodOtrzymanyNaEmail", "Kod otrzymany na email")}
                  />
                  <TextField
                    label={t("NoweHaslo", "Nowe hasło")}
                    type={showPwd ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange("password")}
                    fullWidth
                    required
                    error={Boolean(errors.password)}
                    helperText={errors.password || t("Minimum8Znakow", "Minimum 8 znaków")}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPwd(!showPwd)}
                            edge="end"
                          >
                            {showPwd ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label={t("PowtorzHaslo", "Powtórz hasło")}
                    type={showPwd ? "text" : "password"}
                    value={form.confirm}
                    onChange={handleChange("confirm")}
                    fullWidth
                    required
                    error={Boolean(errors.confirm)}
                    helperText={errors.confirm || undefined}
                  />
                </>
              )}
              {/* ten button jest istotny */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{
                  ...btnSx,
                  mt: 2.5,
                  bgcolor:
                    loading || !emailValid ? "grey.400" : "primary.main",
                  color: loading || !emailValid ? "grey.600" : "common.white",
                  "&:hover": loading || !emailValid
                    ? { bgcolor: "grey.400", transform: "none" }
                    : {
                        transform: "translateY(-2px)",
                        bgcolor: "primary.main",
                      },
                }}
              >
                {loading
                  ? t("Ladowanie", "Ładowanie…")
                  : mode === "request"
                    ? t("WyslijKod", "Wyślij kod")
                    : t("ZmienHaslo", "Zmień hasło")}
              </Button>

              <Button
                variant="text"
                fullWidth
                onClick={() => {
                  const nextMode = mode === "request" ? "reset" : "request";
                  setMode(nextMode);
                  setMessage(null);
                  setErrors({});
                }}
                sx={{ textTransform: "none", mt: 1 }}
              >
                {mode === "request" ? t("MamJuzKod", "Mam już kod") : t("Powrot", "← Powrót")}
              </Button>
            </Stack>
          </Box>
        </CardContent>

        <Box
          sx={{
            px: { xs: 3, sm: 4 },
            py: { xs: 2, sm: 2.5 },
            bgcolor: "grey.50",
            borderTop: 1,
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
          >
            {t("PotrzebujeszPomocy", "Potrzebujesz pomocy?")}{" "}
            <Link
              component="button"
              type="button"
              underline="none"
              color="text.secondary"
              variant="body2"
              sx={{
                position: "relative",
                py: 0.5,
                px: 0.5,
                fontWeight: 500,
                transition: "color .18s ease",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "center",
                fontSize: { xs: "0.8rem", sm: "0.875rem" },
                "&:hover": { color: "primary.main" },
                "&:focus-visible": {
                  outline: `2px solid ${theme.palette.primary.main}`,
                  outlineOffset: 2,
                  borderRadius: 1,
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 2,
                  width: 0,
                  margin: "0 auto",
                  bgcolor: "primary.main",
                  transition: "width .18s ease",
                },
                "&:hover:after": { width: "100%" },
              }}
            >
              {t("Kontakt", "Kontakt")}
            </Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
