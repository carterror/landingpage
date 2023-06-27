 import React from "react";
// import { Box, Button, Container, Grid, Typography } from "@mui/material";
// import Image from "next/image";
// import { useTranslation } from 'react-i18next'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// // import required modules
// import { FreeMode, Pagination } from "swiper";

// import { PlaceCard } from "../cards/PlaceCard";
// import { carData } from "../../config/cardData";

// let text = "Nuestros guías de viaje te harán vivir una experiencia única e irrepetible. Descubre el Caribe auténtico, sus lugares escondidos y las leyendas locales que solo conocen los que viven en él .Te diseñaremos un viaje totalmente a tu medida, desde paquetes todo incluido a viajes personalizados hasta el mínimo detalle, en grupo reducido o en privado."

// export const DatesData = () => {
//     const { t } = useTranslation()

//     return (
//         <Container>
//             <Grid container spacing={0} justifyContent="center">
//                 <Grid item xs={12} lg={10}>
//                     <Typography variant="body1" color="primary" sx={{ fontWeight: "400" }}>
//                         {text}
//                     </Typography>
//                 </Grid>
//             </Grid>
//             <Swiper
//                 className="mySwiper"
//                 loop={true}
//                 modules={[FreeMode, Navigation, Pagination]}
//                 freeMode={{enabled: true, sticky: true}}
//                 navigation={true}
//                 pagination={{clickable: true}}
//                 breakpoints={{
//                     '@0.5': {
//                         slidesPerView: 2,
//                         },
//                     '@1.00': {
//                         slidesPerView: 3,
//                         },
//                     }}
//                 >
//                 {
//                 carData.map((item, pos) => (
//                     <SwiperSlide key={item.id}>
//                         <PlaceCard viaje={item} />
//                     </SwiperSlide>
//                     ))
//                 }
//             </Swiper>
//         </Container>
//     );
// };