import { FC } from 'react'
import { Paper, Grid, Typography, Link, Button } from '@mui/material';
import { Box } from '@mui/system';

import ImageFT from 'next/image'
import { IViajeItemCard } from './interfacesViajes';
import NextLink from "next/link";

import style from '../../styles/Home.module.css'


export const ViajeItemCard: FC<IViajeItemCard> = ({ name, img, imgAlt, description, price, category, text, slug }) => {
    return (
        <Grid item xs={12}>
            <Paper>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={4}>
                        <ImageFT
                            src={img}
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: "100%", height: "150px", borderRadius: "10px" }}
                            alt={imgAlt}
                        />

                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                        <Typography variant="h5" color="primary">
                            {name}
                        </Typography>

                        <Typography variant="caption" color="secondary">
                            {category}
                        </Typography>

                    </Grid>


                    <Grid item xs={12} md={6} lg={3} >
                       
                       <Box className={style.truncate}>
                       <Typography variant="caption" color="inherit" >
                            {text}
                        </Typography>

                       </Box>

                       

                    </Grid>

                    <Grid item xs={12} md={6} lg={2} sx={{display:'flex' , flexDirection:'column' , justifyContent:'center', alignItems:'center'}}>


                        <NextLink  href={{ pathname: "/viaje/[slug]",}} as={`/viaje/${slug}`} passHref>
                            <Button component={Link} color={'primary'}>
                                Ver detalle
                            </Button>

                        </NextLink>


                    </Grid>

                </Grid>
            </Paper>
        </Grid>
    )
}
