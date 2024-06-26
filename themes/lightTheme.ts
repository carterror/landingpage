import { createTheme, Button } from '@mui/material';

let theme = createTheme()

export const lightTheme = createTheme(theme , {
  palette: {
    mode: 'light',
    primary: {
      main: '#100E24',
      light: '#CFCAA6'

    },
    secondary: {
      main: '#817F94'
    },
    info: {
      main: '848C8C'
    }
  
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          // backgroundColor: '#fff',
          height: 60
        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1:  {
          fontSize: '3rem',
          '@media (min-width:600px)': {
            fontSize: '2.5rem',
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '4.5rem',
          },
        },
        h3: {
          wordWrap: 'break-word'
        },
        h4: {
          wordWrap: 'break-word'
        },
        body1: {
          wordWrap: 'break-word'
        },
      }
    }, 

   /*  MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600
        },
        h2: {
          fontSize: 20,
          fontWeight: 400
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        }
      }
    }, */


    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
        color:'info'
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 0,
          ":hover": {
            opacity: 0.8,
            transition: 'all 0.3s ease-in-out'
          }
        }
      }
    },

    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    }
    
  }
});