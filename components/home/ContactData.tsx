import { Facebook, Instagram, MailOutline, Public } from '@mui/icons-material';
import { Grid, Paper, Typography, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FormContact } from './FormContact';

export const ContactData = () => {

    const { t } = useTranslation()

    return (
        <Grid xs={12} sx={{ py: 3 }} id="contact">
            <Container>
                <Grid container >
                    <Grid item md={5}>
                        <Paper sx={{ p: 1 }} elevation={0} >

                            <Typography variant="h5" color="primary" sx={{ mb: 3, fontWeight:900 }}>{t('Contact Information')}</Typography>
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton LinkComponent={'a'} href='mailto:etravelbojorquez@gmail.com'>
                                            <ListItemIcon >
                                                <MailOutline />
                                            </ListItemIcon>
                                            <ListItemText primary="etravelbojorquez@gmail.com" color='primary' />
                                        </ListItemButton>
                                    </ListItem>

                                   {/*  <ListItem disablePadding>
                                        <ListItemButton LinkComponent={'a'} href='https://www.instagram.com/etravelbojorquez'>
                                            <ListItemIcon>
                                                <Instagram />
                                            </ListItemIcon>
                                            <ListItemText primary="Etravel Bojorquez" color='primary' />
                                        </ListItemButton>
                                    </ListItem>

                                    <ListItem disablePadding>
                                        <ListItemButton LinkComponent={'a'} href='https://www.facebook.com/etravelbojorquez'>
                                            <ListItemIcon>
                                                <Facebook />
                                            </ListItemIcon>
                                            <ListItemText primary="Etravel Bojorquez" color='primary' />
                                        </ListItemButton>
                                    </ListItem> */}

                              {/*       <ListItem disablePadding>
                                        <ListItemButton LinkComponent={'a'} href='https://www.havanaskatemarathon.com'>
                                            <ListItemIcon>
                                                <Public />
                                            </ListItemIcon>
                                            <ListItemText primary="www.havanaskatemarathon.com Online soon" color='primary' />
                                        </ListItemButton>
                                    </ListItem>
 */}

                                </List>
                            </nav>

                        </Paper>
                    </Grid>

                    <Grid item md={7}>
                        <Paper sx={{ p: 1 }} elevation={3} >
                        <FormContact /> 
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </Grid>
    )
}
