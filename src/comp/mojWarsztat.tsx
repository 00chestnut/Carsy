import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

/**
 * Mockup edytowalny w czacie: strona "Mój warsztat" + formularz.
 * Układ WYMUSZONY:
 * Rząd 1: NIP (8) + CEIDG (4)
 * Rząd 2: Telefon (pełna szerokość)
 * Rząd 3: Nazwa firmy (pełna szerokość)
 * Rząd 4: Ulica (6) + Nr budynku (3) + Nr lokalu (3)
 * Rząd 5: Kod (3) + Miasto (9)
 */

type WorkshopForm = {
  nip: string;
  phone: string;
  workshopName: string;
  street: string;
  buildingNo: string;
  apartmentNo: string;
  postalCode: string;
  city: string;
};

// --- Helpers (łatwe do testowania) ---

// --- API (stub pod integrację) ---
// Podmień URL-e oraz mapowanie pól zgodnie z Waszym backendem.
type CeidgApiResponse = {
  workshopName?: string;
  street?: string;
  buildingNo?: string;
  apartmentNo?: string;
  postalCode?: string;
  city?: string;
  phone?: string;
};

function mapCeidgToForm(data: CeidgApiResponse): Partial<WorkshopForm> {
  return {
    workshopName: data.workshopName ?? "",
    street: data.street ?? "",
    buildingNo: data.buildingNo ?? "",
    apartmentNo: data.apartmentNo ?? "",
    postalCode: data.postalCode ?? "",
    city: data.city ?? "",
    phone: data.phone ?? "",
  };
}

async function fetchCeidgByNip(nip: string): Promise<CeidgApiResponse> {
  // UWAGA: przykładowy endpoint. Podmień na właściwy.
  const res = await fetch(`/api/ceidg?nip=${encodeURIComponent(nip)}`, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`CEIDG fetch failed: ${res.status} ${text}`);
  }
  return (await res.json()) as CeidgApiResponse;
}

async function saveWorkshop(form: WorkshopForm): Promise<void> {
  // UWAGA: przykładowy endpoint. Podmień na właściwy.
  const res = await fetch(`/api/workshop`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(form),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Save failed: ${res.status} ${text}`);
  }
}

export function isValidPostalCode(v: string): boolean {
  return /^\d{2}-\d{3}$/.test(v.trim());
}

export function isValidNip(v: string): boolean {
  return /^\d{10}$/.test(v.replace(/\s+/g, "").trim());
}

// --- Minimal tests (DEV only) ---
if (typeof window !== "undefined") {
  console.assert(isValidPostalCode("00-000") === true);
  console.assert(isValidPostalCode(" 00-000 ") === true);
  console.assert(isValidPostalCode("00000") === false);
  console.assert(isValidNip("1234567890") === true);
  console.assert(isValidNip("123 456 789 0") === true);
  console.assert(isValidNip("123456789") === false);
  // API mapper sanity
  const mapped = mapCeidgToForm({ workshopName: "X", postalCode: "00-000" });
  console.assert(mapped.workshopName === "X");
  console.assert(mapped.postalCode === "00-000");
}

function AppHeader({
  title,
}: {
  title: string;
}) {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          px: 3,
          py: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: (theme as any).surfaces?.headerBg ?? "#f5f6f5",
          borderRadius: "8px 8px 0 0",
          boxShadow: theme.shadows[(theme as any).elevations?.header ?? 4],
        }}
      >
        <Box sx={{ fontSize: 26, fontWeight: 700, color: "primary.main" }}>{title}</Box>
      </Box>
      <Box sx={{ height: 4, backgroundColor: (theme as any).surfaces?.headerDivider ?? "#c5c7c5" }} />
    </>
  );
}

export default function MojWarsztat() {
  const theme = useTheme();
  const [form, setForm] = React.useState<WorkshopForm>({
    nip: "",
    phone: "",
    workshopName: "",
    street: "",
    buildingNo: "",
    apartmentNo: "",
    postalCode: "",
    city: "",
  });

  const setField =
    (key: keyof WorkshopForm) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((p) => ({ ...p, [key]: e.target.value }));
    };

  const handleFetchFromCeidg = async () => {
    // 1) Walidacja NIP
    if (!isValidNip(form.nip)) {
      console.warn("Niepoprawny NIP — nie pobieram z CEIDG");
      return;
    }

    try {
      // 2) Realny call do API
      const data = await fetchCeidgByNip(form.nip);
      const partial = mapCeidgToForm(data);

      // 3) Nadpisujemy tylko pola zwrócone przez API (resztę zostawiamy)
      setForm((p) => ({
        ...p,
        ...Object.fromEntries(
          Object.entries(partial).filter(([, v]) => v !== "")
        ),
      }));
    } catch (e) {
      console.warn("CEIDG API error, używam mocka:", e);
      // Fallback: dotychczasowy mock
      setForm((p) => ({
        ...p,
        workshopName: p.workshopName || "Przykładowy Warsztat",
        street: p.street || "Przykładowa",
        buildingNo: p.buildingNo || "12",
        apartmentNo: p.apartmentNo || "3",
        postalCode: p.postalCode || "00-000",
        city: p.city || "Warszawa",
      }));
    }
  };

  const clearForm = () => {
    setForm({
      nip: "",
      phone: "",
      workshopName: "",
      street: "",
      buildingNo: "",
      apartmentNo: "",
      postalCode: "",
      city: "",
    });
  };

  const handleSave = async () => {
    try {
      await saveWorkshop(form);
      console.log("SAVED", form);
    } catch (e) {
      console.warn("SAVE error:", e);
    }
  };

  const nipError = form.nip.length > 0 && !isValidNip(form.nip);
  const postalError = form.postalCode.length > 0 && !isValidPostalCode(form.postalCode);

  return (
    <Box sx={{ p: 1, display: "flex", justifyContent: "center", backgroundColor: (theme as any).surfaces?.pageBg ?? "#eef6f0" }}>
      <Card
        sx={{
          width: "100%",
          maxWidth: { xs: 420, sm: 600, md: 980 },
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <AppHeader title="Mój warsztat" />

        <CardContent
          sx={{
            p: 2,
            backgroundColor: (theme as any).surfaces?.cardBg ?? "#f5f6f5",

            // --- Input height 42 ---
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              height: 42,
            },
          }}
        >
          <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 0.5 }}>Dane warsztatu</Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            Uzupełnij dane ręcznie lub pobierz je na podstawie NIP.
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 1.5,
            }}
          >
            {/* Rząd 1 */}
            <Box sx={{ gridColumn: "span 8" }}>
              <TextField
                label="NIP"
                value={form.nip}
                onChange={setField("nip")}
                fullWidth
                error={nipError}
                helperText={nipError ? "NIP powinien mieć 10 cyfr." : " "}
              />
            </Box>

            <Box sx={{ gridColumn: "span 4" }}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleFetchFromCeidg}
                sx={{
                  height: 42,
                  borderRadius: 2,
                  lineHeight: 1.2,
                  "@media (max-width:390px)": { fontSize: "10px" },
                }}
              >
                Pobierz z CEiDG
              </Button>
            </Box>

            {/* Rząd 2 */}
            <Box sx={{ gridColumn: "span 12" }}>
              <TextField
                label="Numer telefonu do warsztatu"
                value={form.phone}
                onChange={setField("phone")}
                fullWidth
              />
            </Box>

            {/* Rząd 3 */}
            <Box sx={{ gridColumn: "span 12" }}>
              <TextField
                label="Nazwa firmy (warsztatu)"
                value={form.workshopName}
                onChange={setField("workshopName")}
                fullWidth
              />
            </Box>

            {/* Rząd 4 */}
            <Box sx={{ gridColumn: { xs: "span 6", "@media (max-width: 400px)": { gridColumn: "span 12" } } }}>
              <TextField label="Ulica" value={form.street} onChange={setField("street")} fullWidth />
            </Box>

            <Box sx={{ gridColumn: { xs: "span 3", "@media (max-width: 400px)": { gridColumn: "span 6" } } }}>
              <TextField
                label="Nr budynku"
                value={form.buildingNo}
                onChange={setField("buildingNo")}
                fullWidth
              />
            </Box>

            <Box sx={{ gridColumn: { xs: "span 3", "@media (max-width: 400px)": { gridColumn: "span 6" } } }}>
              <Tooltip title="Opcjonalne" arrow>
                <TextField
                  label="Nr lokalu *"
                  value={form.apartmentNo}
                  onChange={setField("apartmentNo")}
                  fullWidth
                />
              </Tooltip>
            </Box>

            {/* Rząd 5 */}
            <Box sx={{ gridColumn: { xs: "span 3", "@media (max-width: 400px)": { gridColumn: "span 6" } } }}>
              <TextField
                label="Kod pocztowy"
                value={form.postalCode}
                onChange={setField("postalCode")}
                fullWidth
                error={postalError}
                helperText={postalError ? "Kod 00-000" : " "}
              />
            </Box>

            <Box sx={{ gridColumn: { xs: "span 9", "@media (max-width: 400px)": { gridColumn: "span 6" } } }}>
              <TextField label="Miasto" value={form.city} onChange={setField("city")} fullWidth />
            </Box>

            {/* Buttony */}
            <Box sx={{ gridColumn: "1 / -1", mt: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    height: 42,
                    borderRadius: 2,
                    mr: 1,
                  }}
                  onClick={clearForm}
                >
                  Wyczyść
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    height: 42,
                    borderRadius: 2,
                  }}
                  onClick={handleSave}
                >
                  Zapisz mój warsztat
                </Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
