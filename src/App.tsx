import { ThemeProvider } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import React from "react";
import MojWarsztat from "./comp/mojWarsztat";
// import Zlecenia from "./comp/zlecenia";
import Login from "./comp/login.tsx";
import theme from "./styles/theme.ts";

export default function App() {
  const [showWarsztat, setShowWarsztat] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
<Button
  variant="contained"
  color="primary"
  onClick={() => setShowWarsztat(!showWarsztat)}
  sx={{
    position: "fixed",
    top: 16,
    right: 16,
    zIndex: 10000,
    opacity: 0.15,
    transition: "opacity 0.3s, transform 0.25s",
    ":hover": { opacity: 0.6, transform: "rotateZ(360deg)" },
    ":before": {
      content: '""',
      position: "absolute",
      top: -25,
      left: -25,
      right: -25,
      bottom: -25,
    }
  }}
>
        Switch to {showWarsztat ? "Orders" : "Workshop"}
      </Button>

      {showWarsztat ? (
        // Workshop form - centered with white box
        <Box
          sx={{
            minWidth: "100vw",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e8f5e9",
            padding: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MojWarsztat />
          </Box>
        </Box>
      ) : (
        // <Zlecenia />
        <Login />
      )}
    </ThemeProvider>
  );
}