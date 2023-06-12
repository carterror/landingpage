import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Index.module.css";

export const PriceData = () => {
    const { t } = useTranslation();

    return (
        <Grid xs={12} md={10} sx={{ py: 5, backgroundColor: "", padding: 5 }} id="price">
            
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
                            sx={{ fontWeight: "900", fontStyle: "normal" }}>
                            {t("Viajes a la medida ")} 
                            <Box bgcolor={'yellow'} display={'inline'} padding={1} borderRadius={'30px 0px 30px 0px'}>
                                Prueba
                            </Box>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                display: "flex",
                                flexFlow: "column",
                                justifyContent: "flex-end",
                                textAlign: "end",
                            }}>
                            <Typography
                                variant="h5"
                                color="white"
                                sx={{ fontWeight: "900" }}>
                                {t("Disfruta de tu viaje personalizado")}
                            </Typography>
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
