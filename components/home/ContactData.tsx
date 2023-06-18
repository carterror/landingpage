import { Facebook, Instagram, MailOutline, Public } from '@mui/icons-material';
import { Grid, Paper, Typography, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FormContact } from './FormContact';

export const ContactData = () => {

    const { t } = useTranslation()

    return (
        <Grid xs={12} sx={{ py: 0, height: 300 }} id="contact" position={'relative'} top={50} zIndex={100}>
            <Container>
                <Grid container justifyContent={'center'}>


                    <Grid item md={7}>
                        <Paper sx={{ p: 3, borderRadius: 0 }} elevation={3} >
                        <FormContact /> 
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </Grid>
    )
}
