
// LINE 477 FOR SIZE !!! 100VH AND 100VW FOR SCALE TESTING !!!
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useMediaQuery } from "@mui/material";
import {
  CssBaseline,
  // GlobalStyles,
  IconButton,
  TextField,
  Box,
  Chip,
  Tooltip,
  Card,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PhoneIcon from "@mui/icons-material/Phone";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Menu from "@mui/material/Menu";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

// --- Helpers: kolory i tooltipy dla ikon akcji (online/offline/inactive) ---
function actionIconColor(theme: any, row: { inactive?: boolean; online?: boolean }) {
  return row.inactive
    ? theme.palette.grey[500]
    : row.online
    ? theme.palette.success.main
    : theme.palette.grey[400];
}

function actionTooltip(row: { inactive?: boolean; online?: boolean }) {
  if (row.inactive) return "Nieaktywne";
  if (row.online) return "Online";
  return "Offline";
}

// --- Mapowanie statusu -> kolor chipa ---
const statusColorMap: Record<
  string,
  { color: "error" | "warning" | "primary" | "success" | "default" | "info" }
> = {
  Odebrane: { color: "default" },
  "Gotowe do wydania": { color: "success" },
  "W trakcie": { color: "info" },
  Zaplanowane: { color: "warning" },
};

export default function Zlecenia() {
  const theme = useTheme();

  // Breakpoint mobile (zależny od aktualnego theme)
  const isMobile = useMediaQuery("(max-width: 850px)");

  // Breakpoint tablet (>= sm i < md)
  const isTablet = useMediaQuery(theme.breakpoints.between(850, "md"));
  const { t } = useTranslation(["zleceniaTSX"]);

  // --- Dane mockupowe ---
  const rows = React.useMemo(
    () => [
      {
        id: 1,
        rejestracja: "KR 9M23A",
        pojazd: "Volkswagen Golf VII",
        vin: "WWZZZ3CZLE012345",
        phone: "+48600000000",
        email: "adam.nowak@email.com",
        klient: "Adam Nowak",
        status: t("Zaplanowane", "Zaplanowane"),
        dataWprowadzenia: "01.01.2026",
        dataPrzyjecia: "02.01.2026",
        online: true,
        inactive: false,
      },
      {
        id: 2,
        rejestracja: "GD 4L7Q2",
        pojazd: "BMW 3 Series",
        vin: "WBABMW1234567890",
        phone: "+48600111111",
        email: "piotr.wisniewski@email.com",
        klient: "Piotr Wiśniewski",
        status: t("wTrakcie", "W trakcie"),
        dataWprowadzenia: "02.01.2026",
        dataPrzyjecia: "03.01.2026",
        online: false,
        inactive: false,
      },
      {
        id: 3,
        rejestracja: "PO 8XK91",
        pojazd: "Ford Focus",
        vin: "WF0FXXWPCF1234567",
        phone: "+48600222222",
        email: "anna.kaczmarek@email.com",
        klient: "Anna Kaczmarek",
        status: t("gotoweDoWydania", "Gotowe do wydania"),
        dataWprowadzenia: "03.01.2026",
        dataPrzyjecia: "04.01.2026",
        online: true,
        inactive: false,
      },
      {
        id: 4,
        rejestracja: "WX 2R5T8",
        pojazd: "Toyota Corolla",
        vin: "JTDBR32E720123456",
        phone: "+48600333333",
        email: "marcin.zielinski@email.com",
        klient: "Marcin Zieliński",
        status: t("odebrane", "Odebrane"),
        dataWprowadzenia: "04.01.2026",
        dataPrzyjecia: "05.01.2026",
        online: false,
        inactive: true,
      },
      {
        id: 5,
        rejestracja: "LU 6P4N0",
        pojazd: "Opel Astra",
        vin: "W0L0AHL4842123456",
        phone: "+48600444444",
        email: "katarzyna.dabrowska@email.com",
        klient: "Katarzyna Dąbrowska",
        status: t("Zaplanowane", "Zaplanowane"),
        dataWprowadzenia: "05.01.2026",
        dataPrzyjecia: "06.01.2026",
        online: true,
        inactive: false,
      },
      {
        id: 6,
        rejestracja: "DW 7A9K3",
        pojazd: "BMW X5",
        vin: "WBAKR21090C123456",
        phone: "+48600555555",
        email: "tomasz.lewandowski@email.com",
        klient: "Tomasz Lewandowski",
        status: t("wTrakcie", "W trakcie"),
        dataWprowadzenia: "06.01.2026",
        dataPrzyjecia: "07.01.2026",
        online: false,
        inactive: false,
      },
      {
        id: 7,
        rejestracja: "BI 1Z8E4",
        pojazd: "Audi A4",
        vin: "WAUZZZ8K9AA123456",
        phone: "+48600666666",
        email: "monika.wojcik@email.com",
        klient: "Monika Wójcik",
        status: t("gotoweDoWydania", "Gotowe do wydania"),
        dataWprowadzenia: "07.01.2026",
        dataPrzyjecia: "08.01.2026",
        online: true,
        inactive: false,
      },
      {
        id: 8,
        rejestracja: "RZ 5H2M6",
        pojazd: "Hyundai Tucson",
        vin: "KMHJT81BPYU123456",
        phone: "+48600777777",
        email: "pawel.kaminski@email.com",
        klient: "Paweł Kamiński",
        status: t("odebrane", "Odebrane"),
        dataWprowadzenia: "08.01.2026",
        dataPrzyjecia: "09.01.2026",
        online: false,
        inactive: true,
      },
      {
        id: 9,
        rejestracja: "EL 9C7S1",
        pojazd: "Kia Ceed",
        vin: "U5YFF24128L123456",
        phone: "+48600888888",
        email: "natalia.mazur@email.com",
        klient: "Natalia Mazur",
        status: t("zaplanowane", "Zaplanowane"),
        dataWprowadzenia: "09.01.2026",
        dataPrzyjecia: "10.01.2026",
        online: true,
        inactive: false,
      },
      {
        id: 10,
        rejestracja: "NO 3J4B8",
        pojazd: "BMW 5 Series",
        vin: "WBAFR71080C123456",
        phone: "+48600999999",
        email: "michal.krawczyk@email.com",
        klient: "Michał Krawczyk",
        status: t("wTrakcie", "W trakcie"),
        dataWprowadzenia: "10.01.2026",
        dataPrzyjecia: "11.01.2026",
        online: false,
        inactive: false,
      },
      {
        id: 11,
        rejestracja: "WA 8K42L",
        pojazd: "Audi A6",
        vin: "WAUZZZ4G9HN123451",
        phone: "+48601010101",
        email: "pawel.lewandowski@email.com",
        klient: "Paweł Lewandowski",
        status: t("zaplanowane", "Zaplanowane"),
        dataWprowadzenia: "11.01.2026",
        dataPrzyjecia: "12.01.2026",
        online: true,
        inactive: false,
      },
      {
        id: 12,
        rejestracja: "KR 3M917",
        pojazd: "Volkswagen Passat",
        vin: "WVWZZZ3CZLE987654",
        phone: "+48602020202",
        email: "magdalena.kaczmarek@email.com",
        klient: "Magdalena Kaczmarek",
        status: t("gotoweDoWydania", "Gotowe do wydania"),
        dataWprowadzenia: "12.01.2026",
        dataPrzyjecia: "13.01.2026",
        online: true,
        inactive: false,
      },
      {
        id: 13,
        rejestracja: "DW 92J4A",
        pojazd: "Toyota RAV4",
        vin: "JTMBRREV00D123456",
        phone: "+48603030303",
        email: "tomasz.zielinski@email.com",
        klient: "Tomasz Zieliński",
        status: t("odebrane", "Odebrane"),
        dataWprowadzenia: "13.01.2026",
        dataPrzyjecia: "14.01.2026",
        online: false,
        inactive: true,
      },
      {
        id: 14,
        rejestracja: "PO 7X281",
        pojazd: "Ford Kuga",
        vin: "WF0AXXWPMA1234567",
        phone: "+48604040404",
        email: "natalia.wojcik@email.com",
        klient: "Natalia Wójcik",
        status: t("wTrakcie", "W trakcie"),
        dataWprowadzenia: "14.01.2026",
        dataPrzyjecia: "15.01.2026",
        online: false,
        inactive: false,
      },
      {
        id: 15,
        rejestracja: "GD 5A9N3",
        pojazd: "Hyundai i30",
        vin: "KMHD35LHJU1234567",
        phone: "+48605050505",
        email: "krzysztof.kaminski@email.com",
        klient: "Krzysztof Kamiński",
        status: t("zaplanowane", "Zaplanowane"),
        dataWprowadzenia: "15.01.2026",
        dataPrzyjecia: "16.01.2026",
        online: true,
        inactive: false,
      },
    ],
    []
  );

  // --- Menu (3 kropki) w wierszu / na karcie ---
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null);
  const [menuRowId, setMenuRowId] = React.useState<number | null>(null);
  const menuRow = React.useMemo(
    () => rows.find((r) => r.id === menuRowId),
    [rows, menuRowId]
  );

  // --- Wyszukiwarka (desktop) ---
  const [query, setQuery] = React.useState("");
  const [searchOpen, setSearchOpen] = React.useState(false);

  // --- Filtrowanie ---
  const filteredRows = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (r) =>
        r.rejestracja.toLowerCase().includes(q) ||
        r.pojazd.toLowerCase().includes(q) ||
        r.klient.toLowerCase().includes(q) ||
        r.status.toLowerCase().includes(q)
    );
  }, [rows, query]);

  // --- Kolumny DataGrid (desktop) ---
  const columns = React.useMemo(
    () => [
      {
        field: t("rejestracja", "rejestracja"),
        headerName: t("nrRej", "Nr rej."),
        flex: 1,
        renderCell: (params: any) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              width: "100%",
            }}
          >
            <IconButton
              size="small"
              onClick={(e) => {
                setMenuAnchor(e.currentTarget);
                setMenuRowId(params.id);
              }}
            >
              <MoreVertIcon fontSize="small" />
            </IconButton>
            <Box sx={{ flex: 1 }}>{params.value}</Box>
          </Box>
        ),
      },
      { field: "pojazd", headerName: t("pojazd", "Pojazd"), flex: 1.4 },
      {
        field: "status",
        headerName: t("status", "Status"),
        flex: isTablet ? 0 : 1,
        width: isTablet ? 48 : undefined,
        minWidth: 40,
        renderCell: (params: any) => {
          const cfg = statusColorMap[params.value] ?? ({ color: "primary" } as const);

          const statusMainColor =
            cfg.color === "default"
              ? theme.palette.grey[400]
              : theme.palette[cfg.color].main;

          const isNarrow =
            (typeof params.colDef?.computedWidth === "number" &&
              params.colDef.computedWidth < 50) ||
            (isTablet && (params.colDef?.width ?? 999) < 50);

          if (isNarrow) {
            return (
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  border: `2px solid ${statusMainColor}`,
                  boxSizing: "border-box",
                }}
              />
            );
          }

          return (
            <Chip
              size="small"
              label={params.value}
              color={cfg.color}
              variant="outlined"
              sx={{ borderWidth: 2 }}
            />
          );
        },
      },
      {
        field: "klient",
        headerName: t("klient", "Klient"),
        flex: 1.5,
        renderCell: (params: any) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FiberManualRecordIcon
              sx={{
                fontSize: 10,
                color: params.row.inactive
                  ? theme.palette.grey[500]
                  : params.row.online
                  ? theme.palette.success.main
                  : theme.palette.grey[400],
              }}
            />
            {params.value}
          </Box>
        ),
      },
      {
        field: "chat",
        headerName: t("wiadomosc", "Wiadomość"),
        width: isTablet ? 64 : 80,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: (params: any) => (
          <Tooltip title={`Wiadomość • ${actionTooltip(params.row)}`}>
            <span>
              <IconButton
                size="small"
                onClick={() => alert(`Otwórz czat: ${params.row.klient}`)}
                disabled={Boolean(params.row.inactive)}
              >
                <ChatBubbleOutlineIcon
                  sx={{ color: actionIconColor(theme, params.row) }}
                />
              </IconButton>
            </span>
          </Tooltip>
        ),
      },
      {
        field: "call",
        headerName: t("zadzwoń", "Zadzwoń"),
        width: isTablet ? 64 : 80,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: (params: any) => (
          <Tooltip title={`Zadzwoń • ${actionTooltip(params.row)}`}>
            <span>
              <IconButton
                size="small"
                onClick={() => (window.location.href = `tel:${params.row.phone}`)}
                disabled={Boolean(params.row.inactive)}
              >
                <PhoneIcon sx={{ color: actionIconColor(theme, params.row) }} />
              </IconButton>
            </span>
          </Tooltip>
        ),
      },
      { field: "dataWprowadzenia", headerName: t("wprowadzenie", "Wprowadzenie"), flex: 1 },
      { field: "dataPrzyjecia", headerName: t("przyjecie", "Przyjęcie"), flex: 1 },
    ],
    [theme, isTablet]
  );

  // --- Minimalne testy runtime (console.warn) ---
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      rows.forEach((r) => {
        if (!r.phone) console.warn("Row missing phone:", r);
        if (!r.klient) console.warn("Row missing klient:", r);
      });

      const ids = new Set<number>();
      rows.forEach((r) => {
        if (ids.has(r.id)) console.warn("Duplicate row id:", r.id);
        ids.add(r.id);

        if (!r.pojazd) console.warn("Row missing pojazd:", r);
        if (!r.rejestracja) console.warn("Row missing rejestracja:", r);
        if (!r.dataWprowadzenia || !r.dataPrzyjecia)
          console.warn("Row missing dates:", r);

        if (!statusColorMap[r.status])
          console.warn("Unknown status value:", r.status, r);
      });
    }
  }, [rows]);

  return (
    <>
      <CssBaseline />

      {/* Page wrapper: fills viewport */}
      {/* for testing remove margin set everything to 100vh and 100vw */}
      <Box 
        sx={{ 
          margin: "f0px",  
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.background.default,
        }}
      >
        {/* Menu z 3 kropek (desktop + mobile) */}
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={() => {
            setMenuAnchor(null);
            setMenuRowId(null);
          }}
        >
          {menuRow && (
            <Box sx={{ p: 2, minWidth: 340 }}>
              <Box sx={{ display: "flex", gap: 3 }}>
                <Box
                  sx={{
                    pr: 3,
                    borderRight: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Box
                    sx={{
                      fontSize: 12,
                      color: theme.palette.text.secondary,
                      mb: 0.5,
                    }}
                  >
                    Pojazd:
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                      VIN: {menuRow.vin}
                    </Box>
                    <IconButton
                      size="small"
                      onClick={() => navigator.clipboard.writeText(menuRow.vin)}
                    >
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      fontSize: 12,
                      color: theme.palette.text.secondary,
                      mb: 0.5,
                    }}
                  >
                    Kontakt:
                  </Box>
                  <Box
                    component="a"
                    href={`tel:${menuRow.phone}`}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: theme.palette.text.primary,
                      textDecoration: "none",
                      mb: 0.5,
                    }}
                  >
                    <PhoneIcon fontSize="small" /> {menuRow.phone}
                  </Box>
                  <Box
                    component="a"
                    href={`mailto:${menuRow.email}`}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: theme.palette.text.primary,
                      textDecoration: "none",
                    }}
                  >
                    {menuRow.email}
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Menu>
        {/* Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            backgroundColor: theme.palette.background.default,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Sticky header wrapper (tylko mobile) */}
          <Box
            sx={{
              position: isMobile ? "sticky" : "static",
              top: 0,
              zIndex: 1000,
              backgroundColor: theme.palette.background.default,
            }}
          >
            {/* APP HEADER */}
            <Box
              sx={{
                px: isMobile ? 2 : 3,
                py: "12px",
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
                <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                </IconButton>
                <Box
                  sx={{
                    fontSize: 26,
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                  }}
                >
                  Zlecenia
                </Box>
              </Box>

              {/* Right: desktop search + settings */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {!isMobile && (
                  <>
                    {/* Search input (animates width) */}
                    <Box
                      sx={{
                        width: searchOpen ? 220 : 0,
                        transition: "width 0.25s ease",
                        overflow: "hidden",
                      }}
                    >
                      <TextField
                        size="small"
                        autoFocus={searchOpen}
                        placeholder="Szukaj"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onBlur={() => setSearchOpen(false)}
                        sx={{
                          backgroundColor: theme.palette.background.default,
                          borderRadius: 999,
                          "& fieldset": { border: "none" },
                        }}
                      />
                    </Box>

                    {/* Search button */}
                    <IconButton
                      onClick={() => setSearchOpen((v) => !v)}
                      sx={{
                        bgcolor: theme.palette.background.default,
                        border: `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      <SearchIcon sx={{ color: theme.palette.primary.main }} />
                    </IconButton>
                  </>
                )}

                {/* Settings button */}
                <IconButton
                  sx={{
                    bgcolor: theme.palette.background.default,
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <SettingsIcon sx={{ color: theme.palette.primary.main }} />
                </IconButton>
              </Box>
            </Box>

            {/* Header divider */}
            <Box
              sx={{
                height: "4px",
                backgroundColor: theme.palette.divider,
                position: "relative",
                zIndex: 10,
              }}
            />
          </Box>

          {/* Main card */}
          <Card
            sx={{
              backgroundColor: theme.palette.background.paper,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              zIndex: 1,
              flex: 1,
              width: "100%",
              maxWidth: "none",
              borderRadius: "0 0 8px 8px",
              overflow: "hidden",
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <CardContent
              sx={{
                p: 0,
                display: "flex",
                flexDirection: "column",
                flex: 1,
                width: "100%",
                "&:last-child": { pb: 0 },
              }}
            >
              {isMobile ? (
                // MOBILE: lista kart
                <Box sx={{ px: 1.5, py: 2, display: "grid", gap: 1.25, overflow: "auto" }}>
                  {filteredRows.map((row: any) => {
                    const cfg = statusColorMap[row.status] ??
                      ({ color: "primary" } as const);

                    return (
                      <Card
                        key={row.id}
                        sx={{
                          width: "100%",
                          boxSizing: "border-box",
                          borderRadius: 2,
                          overflow: "hidden",
                          border: `1px solid ${theme.palette.divider}`,
                          backgroundColor: theme.palette.background.paper,
                        }}
                      >
                        <CardContent sx={{ p: 2, boxSizing: "border-box" }}>
                          {/* Header: Pojazd + Status + Menu */}
                          <Box
                            sx={{
                              mt: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: 1,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                minWidth: 0,
                              }}
                            >
                              <Box
                                sx={{
                                  fontWeight: 800,
                                  fontSize: 16,
                                  color: theme.palette.text.primary,
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {row.pojazd}
                              </Box>
                              <Chip
                                size="small"
                                label={row.status}
                                color={cfg.color}
                                variant="outlined"
                                sx={{ borderWidth: 2, height: 26 }}
                              />
                            </Box>

                            <IconButton
                              size="small"
                              onClick={(e) => {
                                setMenuAnchor(e.currentTarget);
                                setMenuRowId(row.id);
                              }}
                            >
                              <MoreVertIcon fontSize="small" />
                            </IconButton>
                          </Box>

                          {/* Client + online dot */}
                          <Box
                            sx={{
                              mt: 0.75,
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              color: theme.palette.text.primary,
                            }}
                          >
                            <FiberManualRecordIcon
                              sx={{
                                fontSize: 10,
                                color: row.inactive
                                  ? theme.palette.grey[500]
                                  : row.online
                                  ? theme.palette.success.main
                                  : theme.palette.grey[400],
                              }}
                            />
                            <Box sx={{ fontSize: 14, fontWeight: 500 }}>
                              {row.klient}
                            </Box>
                          </Box>

                          {/* Dates */}
                          <Box
                            sx={{
                              mt: 0.75,
                              display: "flex",
                              gap: 1.5,
                              flexWrap: "wrap",
                              fontSize: 12,
                              color: theme.palette.text.secondary,
                            }}
                          >
                            <Box>Wpr.: {row.dataWprowadzenia}</Box>
                            <Box>Przyj.: {row.dataPrzyjecia}</Box>
                          </Box>

                          {/* Actions */}
                          <Box
                            sx={{
                              mt: 1,
                              display: "flex",
                              justifyContent: "flex-end",
                              gap: 0.5,
                            }}
                          >
                            <Tooltip title={`${t("wiadomosc", "Wiadomość")} • ${actionTooltip(row)}`}>
                              <span>
                                <IconButton
                                  size="large"
                                  onClick={() => alert(`Otwórz czat: ${row.klient}`)}
                                  disabled={Boolean(row.inactive)}
                                  sx={{
                                    bgcolor: theme.palette.background.default,
                                    border: `1px solid ${theme.palette.divider}`,
                                  }}
                                >
                                  <ChatBubbleOutlineIcon
                                    sx={{ color: actionIconColor(theme, row) }}
                                  />
                                </IconButton>
                              </span>
                            </Tooltip>

                            <Tooltip title={`${t("zadzwoń", "Zadzwoń")} • ${actionTooltip(row)}`}>
                              <span>
                                <IconButton
                                  size="large"
                                  onClick={() =>
                                    (window.location.href = `tel:${row.phone}`)
                                  }
                                  disabled={Boolean(row.inactive)}
                                  sx={{
                                    bgcolor: theme.palette.background.default,
                                    border: `1px solid ${theme.palette.divider}`,
                                  }}
                                >
                                  <PhoneIcon
                                    sx={{ color: actionIconColor(theme, row) }}
                                  />
                                </IconButton>
                              </span>
                            </Tooltip>
                          </Box>
                        </CardContent>
                      </Card>
                    );
                  })}

                  {filteredRows.length === 0 && (
                    <Box
                      sx={{
                        p: 2,
                        color: theme.palette.text.secondary,
                        textAlign: "center",
                      }}
                    >
                      Brak wyników
                    </Box>
                  )}
                </Box>
              ) : (
                // DESKTOP: DataGrid
                <Box sx={{ flex: 1, minHeight: 0, width: "100%" }}>
                  <DataGrid
                    rowHeight={56}
                    rows={filteredRows}
                    columns={columns as any}
                    disableRowSelectionOnClick
                    pageSizeOptions={[10]}
                    initialState={{
                      pagination: { paginationModel: { page: 0, pageSize: 10 } },
                    }}
                    sx={{
                      border: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: theme.palette.background.paper,
                      "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: theme.palette.background.paper,
                        color: theme.palette.text.secondary,
                        fontWeight: 600,
                      },
                      "& .MuiDataGrid-columnSeparator": {
                        color: theme.palette.divider,
                      },
                      "& .MuiDataGrid-row": { alignItems: "center" },
                      "& .MuiDataGrid-cell": {
                        color: theme.palette.text.secondary,
                        display: "flex",
                        alignItems: "center",
                        outline: "none",
                      },
                      "& .MuiDataGrid-footerContainer": {
                        backgroundColor: theme.palette.background.paper,
                        borderTop: `1px solid ${theme.palette.divider}`,
                      },
                      "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
                        outline: "none",
                      },
                    }}
                  />
                </Box>
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}