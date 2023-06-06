import { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

import { ShopLayout } from "../../components/layouts";
import { carData } from "../../config/cardData";
import styles from "../../styles/Index.module.css";
import { IViajeItemCard } from "../../components/viajes/interfacesViajes";
import ImageFT from 'next/image'
import { FormReserved } from "../../components/home/FormReserved";


const ViajeDetail = () => {
  const [viaje, setviaje] = useState<IViajeItemCard>();

  const router = useRouter();

  const getDataFrom = (slug: any) => {
    let result = carData.filter((item) => item.slug === slug);
    if (result.length > 0) {
      setviaje(result[0])
    }

    // carData.forEach()
  };

  useEffect(() => {
   
    getDataFrom(router.query.slug);
  }, []);

  return (
    <ShopLayout
      title="Etravel Bojorquez - Viajes"
      imageFullUrl="/logo2.jpg"
      pageDescription={"Descubre los viajes deseados por tí."}>
      <Grid className={styles.bgHome} sx={{mb:3}}>
        <Grid item xs={12}>
          <Container sx={{ mt: "80px" }}>
            {viaje ? (
              <Grid container spacing={2} display="flex" justifyContent={"center"}>
                <Grid item xs={12} lg={10} wrap="nowrap">

                  <ImageFT
                    src={viaje.img}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                    alt={viaje.imgAlt}
                  />
                </Grid>

                <Grid item xs={12} lg={10} wrap="nowrap">

                <Typography variant="h5" color="primary" sx={{mb:3}}>
                    {viaje.name}
                  </Typography>

                  <Typography variant="body1" color="initial">
                    {viaje.text}
                  </Typography>

                  <Typography variant="body1" color="initial">
                    {viaje.text2}
                  </Typography>
                </Grid>

                <Grid item xs={12} lg={6} wrap="nowrap">
                  <FormReserved />
                  
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </Container>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default ViajeDetail;
