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

let text = "Nuestros guías de viaje te harán vivir una experiencia única e irrepetible. Descubre el Caribe auténtico, sus lugares escondidos y las leyendas locales que solo conocen los que viven en él .Te diseñaremos un viaje totalmente a tu medida, desde paquetes todo incluido a viajes personalizados hasta el mínimo detalle, en grupo reducido o en privado."

export const DatesData = () => {
    const { t } = useTranslation()

    return (
        <>
            <Grid container spacing={0} padding={15} sx={{backgroundColor: '#120f2e', color: "white"}}>
                <Container>
                <Grid container spacing={2} justifyContent="space-between" sx={{backgroundColor: '#120f2e', color: "white"}}>
                <Grid item xs={12} md={6} display={'block'} sx={{borderRight: {xs: 'none', md: 'solid #ccc 2px'}, borderBottom: {xs: 'solid #ccc 2px', md: 'none'}, fontWeight: 800, fontSize: 40, paddingRight: 20, paddingBottom: 10, marginBottom: {xs: 10, md: 0} }}>
                    Lorem, ipsum dolor sit amet consectetur  adipisicing elit!
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
            <Swiper
                className="mySwiper"
                loop={true}
                modules={[FreeMode, Navigation, Pagination]}
                freeMode={{enabled: true, sticky: true}}
                navigation={true}
                pagination={{clickable: true}}
                breakpoints={{
                    '@0.5': {
                        slidesPerView: 2,
                        },
                    '@1.00': {
                        slidesPerView: 3,
                        },
                    }}
                >
                {
                carData.map((item, pos) => (
                    <SwiperSlide key={item.id}>
                        <PlaceCard viaje={item} />
                    </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};