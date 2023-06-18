import React from "react";
import { Box, Button, Card, CardContent, Container, Grid, Theme, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export const Session3 = () => {
    const { t } = useTranslation();

    return (
        <Grid xs={12} md={10} my={5} sx={{ px: 5 }} id="price">
            
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    alignItems={"start"}
                    wrap="wrap"
                    sx={{ marginBottom: "30px" }}>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            variant="h4"
                            color="black"
                            sx={{ fontWeight: "800", fontStyle: "normal" }}>
                            {t("Viajes a la medida ")} 
                            {/* <Box component={'polygon'} points="0,100 50,00, 100,100" variant='h4' sx={{ fontWeight: "750" }} bgcolor={'yellow'} display={'inline'} padding={'0px 20px'} borderRadius={'10px 0px 10px 0px'}>
                                Prueba
                            </Box> */}
                           <Typography color={'black'} fontWeight={800} variant='h4' padding={1} bgcolor={'yellow'} sx={{ clipPath: 'polygon(100% 0%, 0% 15%, 0% 100%, 100% 85%)', display: 'inline-block'}}> asdasd a </Typography>
              
                            
                            
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                display: "flex",
                            
                                justifyContent: "end",
                                alignContent: 'end',
                                textAlign: "end",
                                
                            }}>
                                <Card elevation={1} sx={{ textAlign: 'left', borderRadius: 0, minWidth: 200, maxWidth: 400 }} >
                                    <FormatQuoteIcon sx={{backgroundColor: "black", color: "white"}}/>
                                    <CardContent>
                                        <Typography fontWeight={700} variant="body1" color="text.secondary" gutterBottom>
                                        Word of the Day meaning and kindly.
                                        </Typography>
                                        <hr />
                                        <Typography fontWeight={700} variant="body1">
                                        well las
                                        </Typography>
                                    </CardContent>
                                </Card>
                           {/*  <Typography variant="h4" color="white" sx={{ fontWeight: "600" }}>
                                80.00 EU
                            </Typography> */}
                        </Box>
                    </Grid>
                </Grid>

                <Grid container
                    spacing={5}
                    direction="row">
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h3" fontWeight={600}>01</Typography>
                                <Typography variant="body1" align="justify" fontWeight={600} color={'secondary'}>
                                    <b>Lorem, ipsum dolor</b> sit amet consectetur adipisicing elit. Optio perspiciatis ut dolore eveniet repellat repellendus doloremque. Deleniti hic, cumque minima, amet in cum  ea qui.
                                </Typography>
                            </Grid>   
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h3" fontWeight={600}>01</Typography>
                                <Typography variant="body1" align="justify" fontWeight={600} color={'secondary'}>
                                    <b>Lorem, ipsum dolor</b> sit amet consectetur adipisicing elit. Optio perspiciatis ut dolore eveniet repellat repellendus doloremque. Deleniti hic, cumque minima, amet in cum  ea qui.
                                </Typography>
                            </Grid>   
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h3" fontWeight={600}>01</Typography>
                                <Typography variant="body1" align="justify" fontWeight={600} color={'secondary'}>
                                    <b>Lorem, ipsum dolor</b> sit amet consectetur adipisicing elit. Optio perspiciatis ut dolore eveniet repellat repellendus doloremque. Deleniti hic, cumque minima, amet in cum  ea qui.
                                </Typography>
                            </Grid>   
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h3" fontWeight={600}>01</Typography>
                                <Typography variant="body1" align="justify" fontWeight={600} color={'secondary'}>
                                    <b>Lorem, ipsum dolor</b> sit amet consectetur adipisicing elit. Optio perspiciatis ut dolore eveniet repellat repellendus doloremque. Deleniti hic, cumque minima, amet in cum  ea qui.
                                </Typography>
                            </Grid>   

                </Grid>

              
        </Grid>
    );
};
