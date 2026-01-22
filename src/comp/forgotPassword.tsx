import React, { useState } from "react";
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
import {
  Visibility,
  VisibilityOff,
  LockReset,
} from "@mui/icons-material";

export default function ForgotPassword() {
  const theme = useTheme();
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

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setMessage({ type: "error", text: "Wprowadź poprawny adres email." });
      return;
    }

    if (mode === "reset") {
      if (!form.code) {
        setMessage({ type: "error", text: "Wprowadź kod resetowania." });
        return;
      }
      if (form.password.length < 8) {
        setMessage({
          type: "error",
          text: "Hasło musi mieć co najmniej 8 znaków.",
        });
        return;
      }
      if (form.password !== form.confirm) {
        setMessage({ type: "error", text: "Hasła nie są identyczne." });
        return;
      }
    }

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 900)); // TODO: replace with real API call
      setMessage({
        type: "success",
        text:
          mode === "request"
            ? "Jeśli konto istnieje, kod został wysłany na podany email."
            : "Hasło zaktualizowane. Możesz się zalogować.",
      });
      if (mode === "reset") {
        setForm({ email: "", code: "", password: "", confirm: "" });
        setTimeout(() => setMode("request"), 2000);
      }
    } catch {
      setMessage({ type: "error", text: "Wystąpił błąd. Spróbuj ponownie." });
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
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
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
              {mode === "request" ? "Odzyskaj hasło" : "Ustaw nowe hasło"}
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
                ? "Wprowadź adres e-mail powiązany z kontem - wyślemy instrukcje i jednorazowy kod."
                : "Wprowadź kod otrzymany e‑mailem oraz nowe, bezpieczne hasło."}
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

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={2.5}>
              <TextField
                label="Email"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                fullWidth
                required
                autoFocus={mode === "request"}
              />

              {mode === "reset" && (
                <>
                  <TextField
                    label="Kod resetowania"
                    value={form.code}
                    onChange={handleChange("code")}
                    fullWidth
                    required
                    helperText="Kod otrzymany na email"
                  />
                  <TextField
                    label="Nowe hasło"
                    type={showPwd ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange("password")}
                    fullWidth
                    required
                    helperText="Minimum 8 znaków"
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
                    label="Potwierdź hasło"
                    type={showPwd ? "text" : "password"}
                    value={form.confirm}
                    onChange={handleChange("confirm")}
                    fullWidth
                    required
                  />
                </>
              )}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={btnSx}
              >
                {loading
                  ? "Ładowanie…"
                  : mode === "request"
                    ? "Wyślij kod"
                    : "Zmień hasło"}
              </Button>

              <Button
                variant="text"
                fullWidth
                onClick={() => {
                  setMode(mode === "request" ? "reset" : "request");
                  setMessage(null);
                }}
                sx={{ textTransform: "none", mt: 1 }}
              >
                {mode === "request" ? "Mam już kod" : "← Powrót"}
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
            Potrzebujesz pomocy?{" "}
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
              Kontakt
            </Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
