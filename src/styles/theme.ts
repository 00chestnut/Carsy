import { createTheme } from '@mui/material/styles';

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
          '& .MuiOutlinedInput-input': {
            boxSizing: 'border-box',
            padding: '10px 14px',
            lineHeight: '22px',
            transform: 'translateY(-1px)',
            '@media (max-width:390px)': {
              fontSize: '10px',
            },
          },
          '& .MuiInputLabel-root:not(.MuiInputLabel-shrink)': {
            transform: 'translate(14px, 10px) scale(1)',
            lineHeight: '22px',
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