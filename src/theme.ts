import { createTheme } from '@mui/material/styles';

// Create a custom theme with global overrides
// This theme defines colors, typography, and component styles for your entire MUI app.
// To customize, change the values below. For more options, see: https://mui.com/material-ui/customization/theming/
const theme = createTheme({
  // Palette defines the color scheme. These colors are used by components like buttons and inputs.
  palette: {
    // Primary color: Used for main actions (e.g., contained buttons, focused inputs)
    primary: {
      main: '#2e7d32', // Green color - change this hex code to your desired primary color
    },
    // Secondary color: Used for less prominent elements (e.g., outlined buttons)
    secondary: {
      main: '#616161', // Grey color - change this for secondary elements
    },
    // You can add more palette colors like 'success', 'error', 'warning', 'info' if needed
    // Example: success: { main: '#4caf50' },
  },
  // Components allow you to override default styles for specific MUI components
  components: {
    // MuiButton: Global styles for all Button components
    MuiButton: {
      styleOverrides: {
        root: {
          // Default styles for all buttons
          borderRadius: 2, // Rounded corners
          fontFamily: 'inherit', // Use the app's font
          fontWeight: 600, // Semi-bold text
          textTransform: 'none', // No uppercase
          height: 42, // Fixed height
        },
        // Styles for contained buttons (uses primary color by default)
        contained: {
          backgroundColor: '#2e7d32', // Explicitly set to primary color
          '&:hover': {
            backgroundColor: '#1b5e20', // Darker shade on hover - adjust as needed
          },
        },
        // Styles for outlined buttons (uses secondary color)
        outlined: {
          color: '#616161', // Text color
          borderColor: '#bdbdbd', // Border color
          '&:hover': {
            backgroundColor: '#eeeeee', // Light background on hover
            borderColor: '#9e9e9e', // Darker border on hover
          },
        },
      },
    },
    // MuiTextField: Global styles for all TextField components (inputs)
    MuiTextField: {
      styleOverrides: {
        root: {
          // Styles for the input container
          '& .MuiOutlinedInput-root': {
            borderRadius: 2, // Rounded corners
            height: 42, // Fixed height
            // Hover state: green border
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2e7d32', // Primary color for hover border
            },
            // Focused state: green border
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2e7d32', // Primary color for focus border
            },
            // Hover background
            '&:hover': {
              backgroundColor: '#eef6f0', // Light green background on hover
            },
          },
          // Styles for the input text
          '& .MuiOutlinedInput-input': {
            boxSizing: 'border-box',
            padding: '10px 14px',
            lineHeight: '22px',
            transform: 'translateY(-1px)', // Slight vertical adjustment
            // Responsive font size for small screens
            '@media (max-width:390px)': {
              fontSize: '10px',
            },
          },
          // Styles for the label when not shrunk (empty input)
          '& .MuiInputLabel-root:not(.MuiInputLabel-shrink)': {
            transform: 'translate(14px, 10px) scale(1)',
            lineHeight: '22px',
          },
          // Focused label color
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#2e7d32', // Primary color for focused label
          },
        },
      },
    },
  },
});

export default theme;