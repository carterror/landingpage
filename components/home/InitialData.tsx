import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "../../styles/Index.module.css";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ImageFT from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay , Pagination} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';


export const InitialData = () => {

  const { t } = useTranslation()
  const images = [
    "/0.jpg",
    "/1.jpg",
    "/2.jpg",
  
  ];

  return (
    <Grid className={styles.bgHome}>
    <Grid item xs={12}>
      <Container sx={{ mt: "80px" }}>
        <Grid container spacing={2} display="flex" justifyContent={"end"}>
          <Grid item xs={12}  wrap="nowrap">
          <Swiper
                       
                       spaceBetween={10}
                       centeredSlides={true}
                       autoplay={{
                         delay: 2500,
                         disableOnInteraction: false,
                       }}
                       pagination={{
                         clickable: true,
                       }}
                       navigation={true}
                       modules={[Autoplay, Pagination, Navigation]}
                       className="mySwiper"
                       effect="fade"
                       >
                        <SwiperSlide>
                            <ImageFT
                                src={"/0.jpg"}
                                width="0"
                                height="0"
                                sizes="100vw"
                                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                                alt={"banner3"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImageFT
                                src={"/1.jpg"}
                                width="0"
                                height="0"
                                sizes="100vw"
                                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                                alt={""}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ImageFT
                                src={"/2.jpg"}
                                width="0"
                                height="0"
                                sizes="100vw"
                                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                                alt={"banner3"}
                            />
                        </SwiperSlide>
                    </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  </Grid>
  )
}
