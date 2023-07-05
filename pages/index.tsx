
import { FC } from "react";
import { ShopLayout } from "../components/layouts";

import { ContactData } from "../components/home/ContactData";
import Head from "next/head";
import { Banner, Session1, Session2, Session3, Session4 } from "../components/home";
import {Grid} from "@mui/material";

interface Props {
    toggleTheme: any;
}

const Home: FC<Props> = ({ toggleTheme }) => {
    return (
        
        <ShopLayout title="Etravel Bojorquez" 
        pageDescription="Descubre el Caribe auténtico, sus lugares escondidos y las leyendas locales que solo conocen los que viven en él." 
        toggleTheme={toggleTheme} imageFullUrl="/logo2.jpg">
          
          <Head>
            <meta name="keywords" content="sadasdsa" />
          </Head>

            <section id={"Banner"}>
                <Banner/>
            </section>

            <section id={"Session1"}>
                <Session1 />
            </section>

            <section id={"Session2"}>
                <Session2 />
            </section>
            
            <section id={"Session3"}>
              <Session3 />

            </section>
            <section id={"Session4"}>
              <Session4 />

            </section>

            <section id={"contact"} >
              <ContactData />
            </section>

           
           
        </ShopLayout>
    );
};

export default Home;