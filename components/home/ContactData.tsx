import { Facebook, Instagram, MailOutline, Public } from '@mui/icons-material';
import { Grid, Paper, Typography, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FormContact } from './FormContact';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export const ContactData = () => {

    const { t } = useTranslation()

    return (
        <Grid xs={12} sx={{ py: 0, height: 300 }} position={'relative'} top={50} zIndex={100}>
            
            <Container>
                <Grid container justifyContent={'center'}>


                    <Grid item md={8}>
                    
                        <Paper sx={{borderRadius: 0, transform: 'rotateX(3deg) rotateY(-3deg) rotateZ(1deg)' }} elevation={3} >
                        <FormatQuoteIcon sx={{backgroundColor: "black", color: "white"}} />
                        <Box padding={1}>

                        <FormContact /> 
                        </Box>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </Grid>
    )
}
