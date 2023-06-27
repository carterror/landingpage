import { Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "../../styles/Index.module.css";
import 'react-slideshow-image/dist/styles.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';


export const Session2 = () => {

  const { t } = useTranslation()

  return (
    <Grid className={styles.bgHome}>
    <Grid item xs={12}>
        <Grid container spacing={2} display="flex" justifyContent={"space-between"} paddingY={10}>
          <Grid item xs={12} md={6} display="flex" justifyContent={"end"}>
            <Grid item xs={12} paddingY={5} paddingX={5}>
              <Typography color={'white'} fontWeight={800} variant='body1' padding={1} bgcolor={'#120f2e'} sx={{ clipPath: 'polygon(100% 0%, 0% 15%, 0% 100%, 100% 85%)', display: 'inline-block'}}> asdasd a </Typography>
              
              <Typography fontWeight={800} variant='body2' marginTop={5} marginBottom={3}> asdasd a </Typography>

                <Typography variant='h3' fontWeight={900} marginBottom={5} sx={{fontSize:{xs: 35}}}>
                  Grow, Manage and pay your temp workforce
                </Typography>
                <Typography variant='body1' color='secondary' fontWeight={600} marginTop={2}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quas magnam blanditiis accusamus qui laudantium expedita nesciunt eveniet.
                </Typography>
                </Grid>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent={"end"}>

            <Card sx={{borderRadius: 0}}>
                <CardMedia
                  component="img"
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
