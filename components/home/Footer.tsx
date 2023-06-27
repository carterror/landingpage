import { EmailRounded, Facebook, FacebookTwoTone, Instagram, Phone, Share, Twitter } from "@mui/icons-material";
import {
    Grid,
    Stack,
    Typography,
    Box,
} from "@mui/material";
import React from "react";
import bgImage from '../../public/textura.png';

import styles from "../../styles/Index.module.css";
import botonRedes from "../../styles/botonredes.module.css";

export const Footer = () => {
    return (
        <Grid container className={styles.bgInfoContact} sx={{ paddingTop:{xs: 35, sm: 20}, backgroundImage: `url('${bgImage.src}')`, backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',filter: 'contrast(1.3)' }}>
            <Box  sx={{ py: 3, px: 4,  }}>
                <Grid container justifyContent="space-between" >
                    <Grid item xs={12} md={6} lg={4} paddingBottom={2}>
                        <Box display={"flex"} flexDirection="column" justifyContent="center" sx={{ px: 2 }}>
                            <Typography variant="h4" color="white">
                                Etravel Bojorquez
                            </Typography>

                            <Typography variant="caption" color="white">
                                Descubre el Caribe auténtico, sus lugares escondidos y las leyendas
                                locales que solo conocen los que viven en él.{" "}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} lg={8} >
                        <Grid container >
                            <Grid item xs={12} md={6} paddingBottom={4}>
                                <Stack spacing={1} sx={{ marginLeft: 2 }}>
                                <Typography variant="body1" color="white">
                                        <strong>Razón Social: </strong>
                                        Viajes Bojorquez , S.L.
                                    </Typography>
                                    <Typography variant="body1" color="white">
                                        <strong>Dirección: </strong>
                                        Calle CRUZ ROJA 1 Bloque 5 Semisótano 17. 46.014 VALENCIA
                                    </Typography>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} md={6} sx={{ textAlign: "center" }} paddingBottom={2}>
                                <Typography variant="h5" sx={{ mb: 3 }} color={"white"}>
                                    Centro de Ayuda
                                </Typography>
                                <Stack spacing={1}>
                                    <a
                                        href="/cookies.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white", textDecoration: "none" }}>
                                        Uso de Cookies
                                    </a>

                                    <a
                                        href="/aviso_legal.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white", textDecoration: "none" }}>
                                        Aviso Legal
                                    </a>

                                    <a
                                        href="/condiciones.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "white", textDecoration: "none" }}>
                                        Condiciones de Uso
                                    </a>
                                </Stack>
                            </Grid>

                            {/*  */}
                        </Grid>
                    </Grid>

                    <Grid container xs={12} direction="row"
  justifyContent="space-between"
  alignItems="center">
                        
                            <Grid item
                                
                                >
                                <Grid item xs={12} md={6} lg={4}>
                                    <Typography variant="caption" color="white" noWrap>
                                        © ETravel Bojorquez {new Date().getFullYear()}. All right
                                        reserved
                                    </Typography>
                                </Grid>
                                
                               
                            </Grid>
                            <Grid item  sx={{padding: {xs: 2}}}>
                            <button className={botonRedes['btn-cssbuttons']} >
                            <span>Redes  </span>
                            <span><Share sx={{fontSize: 20}} /></span>
                            <ul>
                            <li>
                            <a href="https://twitter.com/SumethWrrn"><FacebookTwoTone sx={{color: 'white'}} /></a>
                            </li>
                            <li>
                            <a href="https://codepen.io/sharpth"><Instagram sx={{color: 'white'}} /></a>
                            </li>
                            <li>
                            <a href="https://github.com/SharpTH"><FacebookTwoTone sx={{color: 'white'}} /></a></li></ul></button>
                                </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};
