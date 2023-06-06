import { EmailRounded, Facebook, Instagram, Phone, Twitter } from "@mui/icons-material";
import {
    Chip,
    Container,
    Grid,
    Paper,
    Stack,
    Typography,
    Box,
    Link,
    TextField,
    Button,
    Divider,
    IconButton,
    InputAdornment,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import NextLink from "next/link";

import styles from "../../styles/Index.module.css";

export const Footer = () => {
    return (
        <Grid container spacing={0} className={styles.bgInfoContact}>
            <Box sx={{ backgroundColor: "info.main", py: 3, px: 4 }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={6} lg={4}>
                        <Box display={"flex"} flexDirection="column" sx={{ px: 2 }}>
                            <Typography variant="h4" color="white">
                                Etravel Bojorquez
                            </Typography>

                            <Typography variant="caption" color="white">
                                Descubre el Caribe auténtico, sus lugares escondidos y las leyendas
                                locales que solo conocen los que viven en él.{" "}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} md={5}>
                                <Stack spacing={1} sx={{ marginLeft: 2 }}>
                                <Typography variant="body1" color="white">
                                        <strong>Razón Social: </strong>
                                        Viajes Bojorquez , S.L.
                                    </Typography>
                                    <Typography variant="body1" color="white">
                                        <strong>Dirección: </strong>
                                        Calle CRUZ ROJA 1 Bloque 5 Semisótano 17. 46.014 VALENCIA
                                    </Typography>

                                    <Typography variant="body1" color="white">
                                       <strong>Inscripción en el Registro Mercantil: </strong>
                                       Tomo: 9739,  Libro: 7021,  Folio: 189,  Sección: GNE, Hoja: 157675
                                    </Typography>

                                    <Typography variant="body1" color="white">
                                    <strong>Número de Identificación fiscal: </strong>
                                    B98607021
                                    </Typography>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} md={7} sx={{ textAlign: "center" }}>
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
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider sx={{ backgroundColor: "#fff" }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Container>
                            <Grid
                                container
                                spacing={1}
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                alignContent="center"
                                wrap="wrap">
                                <Grid item xs={12} md={6} lg={4}>
                                    <Typography variant="caption" color="white">
                                        © ETravel Bojorquez {new Date().getFullYear()}. All right
                                        reserved
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4}></Grid>
                                <Grid item xs={12} md={6} lg={4}>
                                    <Stack
                                        direction="row"
                                        divider={<Divider orientation="vertical" flexItem />}
                                        spacing={2}>
                                        <IconButton>
                                            <Facebook sx={{ color: "#fff" }} />
                                        </IconButton>

                                        <IconButton>
                                            <Instagram sx={{ color: "#fff" }} />
                                        </IconButton>

                                        {/*     <IconButton>
                                            <Twitter color="inherit" />
                                        </IconButton> */}
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};
