import { Facebook, Instagram, MailOutline, Public } from '@mui/icons-material';
import { Grid, Paper, Typography, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FormContact } from './FormContact';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export const ContactData = () => {

    const { t } = useTranslation()

    return (
        <Grid xs={12} sx={{ py: 0, height: 300, transform: 'rotateX(3deg) rotateY(-3deg) rotateZ(1deg)' }} id="contact" position={'relative'} top={50} zIndex={100}>
            
            <Container>
                <Grid container justifyContent={'center'}>


                    <Grid item md={8}>
                    
                        <Paper sx={{borderRadius: 0 }} elevation={3} >
                        <FormatQuoteIcon sx={{backgroundColor: "black", color: "white"}} />
                        <FormContact /> 
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </Grid>
    )
}
