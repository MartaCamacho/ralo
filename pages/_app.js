import React, {useState, useEffect} from "react";
import "../styles/global.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const [baseUrl, setBaseUrl] = useState("http://www.yosoyralo.com");

  useEffect(() => {
    setBaseUrl(window.location.pathname);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>rALo</title>
        <meta
          key="description"
          name="description"
          content="Poeta -  Escritor - Guionista - Dramaturgo - Director // Storyador"
        />
        <meta charSet="utf-8"/>
        <meta name="keywords" content="ralo, escritor, director, poeta, guionista, dramaturgo"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:site_name" content="yosoyralo.com"/>
        <meta property="og:title" content="rALo" />
        <meta property="og:description" content="Poeta -  Escritor - Guionista - Dramaturgo - Director // Storyador" />
        <meta content="summary" name="twitter:card"/>
        <meta name="twitter:title" content="rALo"/>
        <meta content="yosoyralo.com" name="twitter:site"/>
        <meta content="rALo" name="twitter:creator"/>
        <meta name="twitter:image" content={baseUrl + "favicon.ico"}/>
        <meta name="twitter:description" content="Poeta -  Escritor - Guionista - Dramaturgo - Director // Storyador" />
        <link rel="shortcut icon" type="img/png" href={baseUrl + "favicon.ico"}/>
        <link rel="icon" type="img/png" href={baseUrl + "favicon.ico"}/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
