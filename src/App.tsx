import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import MojWarsztat from './comp/mojWarsztat';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* This Box is the full screen background */}
      <Box 
        sx={{ 
          minWidth: '100vw',            // Full screen width
          minHeight: '100vh',           // Full screen height
          display: 'flex',              // Flexbox for centering
          alignItems: 'center',         // Center vertically
          justifyContent: 'center',     // Center horizontally
          backgroundColor: '#e8f5e9',   // Light green background
          padding: 2,                   // Small padding around edges
        }}
      >
        {/* This Box wraps the form and adds the shadow */}
        <Box 
          sx={{ 
            backgroundColor: 'white',              // White box background
            borderRadius: 3,                       // Rounded corners
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)', // Nice shadow
            overflow: 'hidden',                    // Keep corners rounded
          }}
        >
          <MojWarsztat />
        </Box>
      </Box>
    </ThemeProvider>
  );
}