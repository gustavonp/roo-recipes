import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../styles/main.css';

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
      </Head>
      <Header {...pageProps} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
};
