import Footer from './Footer';
import MiniDrawer from './MiniDrawer';
import Navbar from './Navbar';
import { Box } from '@mui/material';

import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/pokeball3.png" />
        <title>Pokedex</title>
      </Head>

      <div style={{ backgroundColor: '#181818' }}>
        <MiniDrawer />
        <main className="main-container">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}