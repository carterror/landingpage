import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";

import { PlaceCard } from "../cards/PlaceCard";
import { carData } from "../../config/cardData";
import bgImage from '@/../../public/textura.png';

let text = "Nuestros guías de viaje te harán vivir una experiencia única e irrepetible. Descubre el Caribe auténtico, sus lugares escondidos y las leyendas locales que solo conocen los que viven en él .Te diseñaremos un viaje totalmente a tu medida, desde paquetes todo incluido a viajes personalizados hasta el mínimo detalle, en grupo reducido o en privado."

export const DatesData = () => {
    const { t } = useTranslation()

    return (
        <>
            <Grid container spacing={0} padding={15} sx={{backgroundImage: `url('${bgImage.src}')`, backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',filter: 'contrast(1.3)',  color: "white"}}>
                <Container>
                <Grid container spacing={2} justifyContent="space-between" sx={{backgroundColor: '', color: "white"}}>
                <Grid item xs={12} md={6} display={'block'} sx={{borderRight: {xs: 'none', md: 'solid #ccc 2px'}, borderBottom: {xs: 'solid #ccc 2px', md: 'none'}, fontWeight: 800, fontSize: 40, paddingRight: 10, paddingBottom: 10, marginBottom: {xs: 10, md: 0} }}>
                    Lorem, ipsum dolor sit amet consectetur <Box bgcolor={'yellow'} color={'#120f2e'} display={'inline'} padding={0.5} borderRadius={'10px 0px 10px 0px'}>
                                Prueba
                            </Box> adipisicing elit!
                </Grid>
                <Grid item xs={12}  md={6}>
                    <Grid item xs={12} marginBottom={8} sx={{paddingLeft: 8}}>
                        <Typography variant="h6" fontWeight={600}>Lorem ipsum dolor sit amet consectetur.</Typography>
                        <Typography color={'secondary'}>aaaaaaaaaaaaaaaaaaa</Typography>
                        
                    </Grid>
                    <Grid item xs={12} marginBottom={8} sx={{paddingLeft: 8}}>
                        <Typography variant="h6" fontWeight={600}>Lorem ipsum dolor sit amet consectetur.</Typography>
                        <Typography color={'secondary'}>aaaaaaaaaaaaaaaaaaa</Typography>
                        
                    </Grid>
                    <Grid item xs={12} marginBottom={8} sx={{paddingLeft: 8}}>
                        <Typography variant="h6" fontWeight={600}>Lorem ipsum dolor sit amet consectetur.</Typography>
                        <Typography color={'secondary'}>aaaaaaaaaaaaaaaaaaa</Typography>
                        
                    </Grid>

                </Grid>
                </Grid>
                </Container>
            </Grid>
        </>
    );
};