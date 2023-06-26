import Head from "next/head"
import { FC, ReactNode } from 'react';
import { Footer } from "../home/Footer";
import Navbar from "../ui/Navbar";
import ScrollTopButton from "../commons/ScrollTopButton";


interface Props {
  children: ReactNode [];
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ShopLayout:FC<Props> = ({children, title, pageDescription, imageFullUrl, toggleTheme }) => {



  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {
          imageFullUrl && (
            <meta name="og:image" content={imageFullUrl} />
          )
        }

      </Head>
      <nav>
        <Navbar />
      </nav>

      <main style={{
       /*  margin: '80px auto',
        maxWidth: '1440px',
        padding: '0px 30px' */
        backgroundColor: '#e3e0e0',
        scrollBehavior: 'smooth'

      }}>
        {children}

      </main>
      

      <footer>
        <Footer />
      </footer>
      <ScrollTopButton />
    </>
  )
}
