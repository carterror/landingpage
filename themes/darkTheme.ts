
import { createTheme } from "@mui/material";


let theme = createTheme()

export const darkTheme = createTheme(theme, {
    palette: {
        mode: "dark",
        primary: {
          main: '#fff',
          
    
        },
        secondary: {
          main: '#4cc9f0'
        },
        
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
          position: 'fixed',
        },
        styleOverrides: {
          colorPrimary: {
            backgroundColor: '#01015E'
          }
        }
      },
        MuiLink: {
            defaultProps: {
                underline: "none",
            },
        },
        MuiTypography: {
            styleOverrides: {
              h1:  {
                fontSize: '3.2rem',
                '@media (min-width:600px)': {
                  fontSize: '2.5rem',
                },
                [theme.breakpoints.up('md')]: {
                  fontSize: '5rem',
                },
              }
              
            }
          }, 

          
    MuiButton: {
        defaultProps: {
          variant: 'contained',
          size: 'small',
          disableElevation: true,
          color:'primary'
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            boxShadow: 'none',
            borderRadius: 10,
            ":hover": {
              opacity: 0.8,
              transition: 'all 0.3s ease-in-out'
            }
          }
        }
      },
  
    },
});
