import Head from "next/head"
import { FC } from "react"
import { Footer } from "../home/Footer";
import { SideMenu } from "../ui";
import Navbar from "../ui/Navbar";


interface Props {
  children:any;
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

      <SideMenu/>

      <main style={{
       /*  margin: '80px auto',
        maxWidth: '1440px',
        padding: '0px 30px' */

        scrollBehavior: 'smooth'

      }}>
        {children}

      </main>
      

      <footer>
      <Footer />
      </footer>

    </>
  )
}
