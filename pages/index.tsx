
import { FC } from "react";
import { ShopLayout } from "../components/layouts";
import { InitialData } from "../components/home/InitialData";
import { DatesData } from "../components/home/DatesData";
import { Announcement } from "../components/home/Announcement";
import { ContactData } from "../components/home/ContactData";
import { Footer } from "../components/home/Footer";
import { PriceData } from "../components/home/PriceData";
import { GetStaticProps } from "next";
import Head from "next/head";

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
            <section id={"home"}>
                <InitialData />
            </section>

            <section id={"date"}>
                <DatesData />
            </section>

           {/*  <section id={"announcement"}>
                <Announcement />
            </section> */}
            <section id={"price"}>
              <PriceData />

            </section>


            <section id={"contact"}>
              <ContactData />

            </section>

           
           
        </ShopLayout>
    );
};

// export const getStaticProps: GetStaticProps = async (/* { locale } */) => {
//     return {
//       props: {
//         /* ...(await serverSideTranslations(locale || defaultLanguage, ["common"])), */
//       },
//     };
//   };
  
export default Home;
