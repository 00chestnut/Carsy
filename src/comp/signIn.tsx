import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import GoogleIcon from "./GoogleIcon.tsx";
import { useTranslation } from "react-i18next";
interface SignInFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  persistent: HTMLInputElement;
}

interface SignInFormElement extends HTMLFormElement {
  readonly elements: SignInFormElements;
}

export default function SignInSideTemplate() {
  const { t } = useTranslation(["signInTSX"]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box
        component="main"
        role="main"
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: 420, p: 3 }}>
          <Box
            component="header"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton aria-label={t("StronaGlowna", "Strona główna")}>
                <BadgeRoundedIcon />
              </IconButton>
              <Typography variant="h6" component="span">
                {t("LogoFirmy", "Logo firmy")}
              </Typography>
            </Box>
          </Box>

          <Box>
            <Stack spacing={3} mb={2}>
              <Box>
                <Typography variant="h4" component="h1">
                  {t("ZalogujSie", "Zaloguj się")}
                </Typography>
                <Typography variant="body2">
                  New to company?{" "}
                  <Link
                    href="#replace-with-a-link"
                    aria-label={t("ZalozKonto", "Załóż nowe konto")}
                  >
                    Sign up!
                  </Link>
                </Typography>
              </Box>
              <Button
                startIcon={<GoogleIcon />}
                variant="outlined"
                fullWidth
                aria-label={t(
                  "KontynuujZGoglem",
                  "Kontynuuj za pomocą konta Google",
                )}
              >
                {t("KontynuujZGoglem", "Kontynuuj za pomocą konta Google")}
              </Button>
            </Stack>

            <Divider aria-hidden="true">{t("lub", "lub")}</Divider>
            <Box
              component="form"
              onSubmit={(event: React.FormEvent<SignInFormElement>) => {
                event.preventDefault();
                const elems = event.currentTarget.elements;
                const data = {
                  email: elems.email.value,
                  password: elems.password.value,
                  persistent: elems.persistent.checked,
                };
                // eslint-disable-next-line no-alert
                alert(JSON.stringify(data, null, 2));
              }}
              sx={{ mt: 3 }}
              aria-label={t("FormularzLogowania", "Formularz logowania")}
            >
              <FormControl fullWidth margin="normal">
                <FormLabel htmlFor="email-input">
                  {t("AdresEmail", "Adres email")}
                </FormLabel>
                <TextField
                  id="email-input"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    autoComplete: "email",
                    "aria-label": t("AdresEmail", "Adres email"),
                  }}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <FormLabel htmlFor={t("HasloInput", "password-input")}>
                  {t("Haslo", "Hasło")}
                </FormLabel>
                <TextField
                  id="password-input"
                  name="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    autoComplete: "current-password",
                    "aria-label": t("Haslo", "Hasło"),
                  }}
                />
              </FormControl>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Checkbox
                    id="persistent-checkbox"
                    name="persistent"
                    inputProps={{
                      "aria-label": t("ZapamietajMnieNaTymUrzadzeniu", "Zapamiętaj mnie na tym urządzeniu"),
                    }}
                  />
                  <Typography
                    component="label"
                    htmlFor="persistent-checkbox"
                    variant="body2"
                    sx={{ cursor: "pointer" }}
                  >
                    {t("ZapamietajMnieNaTymUrzadzeniu", "Zapamiętaj mnie na tym urządzeniu")}
                  </Typography>
                </Box>
                <Link
                  href="#replace-with-a-link"
                  aria-label={t("ResetujZapomnianeHaslo", "Resetuj hasło")}
                >
                  {t("ResetujZapomnianeHaslo", "Resetuj hasło")}
                </Link>
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 3 }}
                aria-label={t("ZalogujSieDoSwojegoKonta", "Zaloguj się do swojego konta")}
              >
                {t("ZalogujSie", "Zaloguj się")}
              </Button>
            </Box>
          </Box>

          <Box component="footer" sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="caption">
              © Your company {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        component="aside"
        role="presentation"
        aria-hidden="true"
        sx={{
          width: { xs: 0, md: "50vw" },
          display: { xs: "none", md: "block" },
          backgroundImage:
            "url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",
          backgroundSize: "cover",
        }}
      />
    </Box>
  );
}
