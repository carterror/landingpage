import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'
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
import Image from 'next/image';
import ShareIcon from '@mui/icons-material/Share';
import { Grid3x3 } from '@mui/icons-material';


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
        <Grid container spacing={2} display="flex" justifyContent={"space-between"} paddingY={10}>
          <Grid item xs={12} md={6} display="flex" justifyContent={"end"}>
            <Grid item xs={12} paddingY={5} paddingX={5}>
                <Typography fontSize={50} fontWeight={900} >
                  Grow, Manage and pay your temp workforce
                </Typography>
                <Typography fontSize={20} color='secondary' fontWeight={600} marginTop={2}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quas magnam blanditiis accusamus qui laudantium expedita nesciunt eveniet.
                </Typography>
                <Box paddingTop={4}>
                <Button color='secondary' sx={{fontSize: 20, paddingX: 2, paddingY: 1, marginRight: 2}} endIcon={<ShareIcon />} >Get in touch</Button>
                <Button variant='outlined' color='secondary' sx={{fontSize: 20, paddingX: 2, paddingY: 1, fontWeight: 600}}>Call: 55016899</Button>
                </Box>
                </Grid>
          </Grid>
          <Grid item xs={12} md={6}  display="flex" justifyContent={"end"}>
            <Image
              src="/b1.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Grid>
        </Grid>

    </Grid>
  </Grid>
  )
}
