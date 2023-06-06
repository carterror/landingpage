import { Container, Grid } from '@mui/material'
import React from 'react'

import { ShopLayout } from '../../components/layouts'
import { ViajesList } from '../../components/viajes/ViajesList'
import { carData } from '../../config/cardData'
import styles from "../../styles/Index.module.css";


const ViajesPage = () => {
  return (
    <ShopLayout title="Etravel Bojorquez - Viajes"
    imageFullUrl="/logo2.jpg"  pageDescription={'Descubre los viajes deseados por tí.'}>
       <Grid className={styles.bgHome} sx={{mb:3}}>
    <Grid item xs={12}>
      <Container sx={{ mt: "80px" }}>
        <Grid container spacing={2} display="flex" justifyContent={"end"}>
          <Grid item xs={12}  wrap="nowrap">
          <ViajesList listViajes={carData}/>
         
          </Grid>
        </Grid>
      </Container>
    </Grid>
  </Grid>
     
   
    </ShopLayout>
  )
}

export default ViajesPage