import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next'
import styles from "../../styles/Index.module.css";
import { AnnouncementRounded } from "@mui/icons-material";

const text1 =
    "The Cuban Skating Federation invites all skaters from federations, clubs, leagues and countries to participate in the Havana Skate Marathon to be held from December  to ,  in Havana, Cuba."
    const text2 =
    "Havana currently holds the title  of Wonder City, among other things for its mythical appeal, the warm and welcoming atmosphere and the charisma and joviality of its inhabitants. The organizing committee has designed an event that merges with Havana, that is part of it and hot invasive of its spaces, taking advantage of both the historical heritage and the social and spiritual aspects of the city. Its historical and contracting buildingas, its antique cars and its charismatic people make the capital of all Cubans a different attractive venue."
export const Announcement = () => {

    const { t } = useTranslation()
    return (
        <Grid xs={12} className={styles.bgInfoEvent} sx={{ py: 3 }} id="who">
            <Container>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap">
                    <Grid item md={5} display="flex" justifyContent={"start"}>
                        <AnnouncementRounded
                            color="primary"
                            fontSize="large"
                            sx={{ color: "white", mt: 1, mr: 2 }}
                        />
                        <Typography
                            variant="h4"
                            color="white"
                            sx={{ fontStyle: "italic", fontWeight: "900" }}>
                            {t('Announcement')}
                        </Typography>
                    </Grid>

                    <Grid item md={7}>
                        <Typography variant="body1" color="white">
                            {t(text1)}
                        </Typography>
                        <br />

                        <Typography variant="body1" color="white">
                        {t(text2)}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};
