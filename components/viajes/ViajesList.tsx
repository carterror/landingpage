import { FC } from "react";
import { Box, Grid, Pagination, Typography } from "@mui/material";
import { IViajeItemCard } from "./interfacesViajes";
import { ViajeItemCard } from "./ViajeItemCard";

interface ILIstViajes {
    listViajes: IViajeItemCard[];
}

export const ViajesList: FC<ILIstViajes> = ({ listViajes }) => {
    return (

        
        <Grid container spacing={3}>
            <Grid item xs={12} sx={{mb:2 , textAlign:'center'}}>
                <Typography variant="h3" color="primary">Lista de Viajes</Typography>
            </Grid>
            {listViajes.map((item, pos) => (
                <ViajeItemCard
                    key={pos}
                    name={item.name}
                    img={item.img}
                    imgAlt={item.imgAlt}
                    description={item.description}
                    price={item.price}
                    category={item.category} id={0}
                    place={item.place}
                    text={item.text}
                    text2={item.text2}
                    cantDays={item.cantDays}
                    letter={item.letter} slug={item.slug}                />
            ))}


<Grid item xs={12} sx={{mb:2 , textAlign:'center'}}>
                <Pagination count={1} color="primary" />
            </Grid>
        </Grid>
    );
};
