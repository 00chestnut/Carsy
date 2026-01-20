import { ThemeProvider } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import React from "react";
import MojWarsztat from "./comp/mojWarsztat";
import Zlecenia from "./comp/zlecenia";
import theme from "./styles/theme.ts";

export default function App() {
  const [showWarsztat, setShowWarsztat] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
      {/* This Box is the full screen background */}
      <Box
        sx={{
          minWidth: "100vw", // Full screen width
          minHeight: "100vh", // Full screen height
          display: "flex", // Flexbox for centering
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
          backgroundColor: "#e8f5e9", // Light green background
          padding: 2, // Small padding around edges
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowWarsztat(!showWarsztat)}
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 10,
          }}
        >
          Switch to {showWarsztat ? "Orders" : "Workshop"}
        </Button>

        {/* This Box wraps the form and adds the shadow */}
        <Box
          sx={{
            backgroundColor: "white", // White box background
            borderRadius: 3, // Rounded corners
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)", // Nice shadow
            overflow: "hidden", // Keep corners rounded
            display: "flex",
            flexDirection: "column",
          }}
        >
        

          {showWarsztat ? <MojWarsztat /> : <Zlecenia />}
        </Box>
      </Box>
      
    </ThemeProvider>
  );
}
