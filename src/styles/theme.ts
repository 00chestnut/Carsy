import { createTheme } from '@mui/material/styles';

// --- Elevation levels ---
const elevations = {
  card: 4,
  cardHover: 8,
  overlay: 8,
  header: 4,
};

// --- Surface colors ---
const surfaces = {
  headerBg: '#f5f6f5',
  headerDivider: '#c5c7c5',
  pageBg: '#eef6f0',
  cardBg: '#f5f6f5',
};

// --- Overlay & gradient utilities ---
const overlayGradient = `linear-gradient(to right, 
  rgba(0, 0, 0, 0.05) 0%, 
  rgba(0, 0, 0, 0.02) 20%,
  transparent 50%, 
  rgba(0, 0, 0, 0.02) 80%,
  rgba(0, 0, 0, 0.05) 100%)`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32',
    },
    /* dimmed, slightly grayish green for secondary actions */
    secondary: {
      main: '#629e62',
    },
    success: {
      main: '#4caf50',
    },
    error: {
      main: '#ef5350',
    },
    warning: {
      main: '#ffb74d',
    },
    background: {
      default: '#f4faf6',
      paper: '#ffffff',
    },
  },
  // @ts-ignore - attach custom utilities to theme
  elevations,
  surfaces,
  overlayGradient,
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          fontWeight: 600,
          textTransform: 'none',
        },
        contained: {
          backgroundColor: '#2e7d32',
          '&:hover': {
            backgroundColor: '#1b5e20',
          },
        },
        containedSecondary: {
          backgroundColor: '#6b8e6b',
          '&:hover': {
            backgroundColor: '#59795a',
          },
        },
        outlined: {
          color: '#616161',
          borderColor: '#bdbdbd',
          '&:hover': {
            backgroundColor: '#eeeeee',
            borderColor: '#9e9e9e',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2e7d32',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2e7d32',
            },
            '&:hover': {
              backgroundColor: '#eef6f0',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#2e7d32',
          },
        },
      },
    },
  },
});

export default theme;