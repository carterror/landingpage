import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "../../styles/Index.module.css";
import 'react-slideshow-image/dist/styles.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';
import Image from 'next/image';
import ShareIcon from '@mui/icons-material/Share';


export const Banner = () => {

  return (
    <Grid className={styles.bgHome}>
    <Grid item xs={12}>
        <Grid container spacing={2} display="flex" justifyContent={"space-between"} paddingY={10}>
          <Grid item xs={12} md={6} display="flex" justifyContent={"end"}>
            <Grid item xs={12} paddingY={5} paddingX={5}>
                <Typography fontSize={50} fontWeight={900} sx={{fontSize:{xs: 35}}}>
                  Grow, Manage and pay your temp workforce
                </Typography>
                <Typography fontSize={20} color='secondary' fontWeight={600} marginTop={2}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quas magnam blanditiis accusamus qui laudantium expedita nesciunt eveniet.
                </Typography>
                <Box paddingTop={4}>
                  <Grid display={'flex'} sx={{flexDirection: {lg: 'row', md: 'column', sm: 'row', xs: 'column'}}}>
                    <Button color='secondary' fullWidth sx={{fontSize: 20, paddingX: 2, paddingY: 1, marginRight: 2, backgroundColor: '#120f2e'}} endIcon={<ShareIcon />}>Get in touch</Button>
                    <Button variant='outlined' fullWidth color='secondary' sx={{fontSize: 20, paddingX: 2, paddingY: 1, fontWeight: 600, borderColor: '#120f2e', color: '#120f2e', marginTop: {lg: 0, md: 1, sm: 0, xs: 1}}}>Call: 55016899</Button>
                  </Grid>
                </Box>
                </Grid>
          </Grid>
          <Grid item xs={0} md={6} display="flex" justifyContent={"end"} >
          <Card sx={{borderRadius: 0, clipPath: 'polygon(100% 0%,10% 15%, 0% 100%, 100% 100%)'}} >

          <CardMedia
                  component="img"
                  // width="100%"
                  height="100%"
                  sx={{minHeight: 300}}
                  image="/0.jpg"
                  alt="green iguana"
                />
            </Card>
          </Grid>
        </Grid>

    </Grid>
  </Grid>
  )
}
