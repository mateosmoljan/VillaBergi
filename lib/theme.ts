// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: { main: "#0ea5e9" },
    secondary: { main: "#06b6d4" },
    background: {
      default: "#001f3f",
      paper: "#0a192f",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cbd5e1",
    },
  },

  typography: {
    fontFamily: "var(--font-poppins), sans-serif",

    // Other customs, e.g.,
    body1: {
      fontWeight: "var(--Bold)", // Assuming --Bold: 600 in CSS
    },

    // Register the variant for <Typography variant="titleBold"> (optional)
    // MUI does not support 'variants' in theme.typography, so this section is removed.
  },

  // Your existing components overrides...
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          borderCollapse: "collapse",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 16,
          border: "none",
          textAlign: "left",
        },
        head: {
          backgroundColor: "transparent",
          fontWeight: "var(--titleBold)",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          border: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          border: "none",
        },
      },
    },
  },

  shape: {
    borderRadius: 0,
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
});

export default theme;
