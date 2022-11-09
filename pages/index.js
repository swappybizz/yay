import Head from "next/head";
import Hero from "../components/Hero2";
import { useRef } from "react";
// import Hero2 from "../components/Hero";
// import Circular from "../components/Circular2";
import Circular3 from "../components/Circular4";
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton";
import Outro from "../components/Outro";
import FullPageImage from "../components/FullPageImage";
import BlogPreview from "../components/BlogPreview";
// import {getRecentPosts } from "../services";
// import {Cursor}from "react-creative-cursor"

import "react-creative-cursor/dist/styles.css";
const toptext = {
  top: "Fremtidsrettet forretningsutvikling",
  middle: "Vi er  endringsarkitekter",
  bottom:
    "Den økonomiske og teknologiske omstillingsfasen som pågår, gjør at næringslivet utforsker nye muligheter og markeder. Både samfunn, næringsliv og forbrukere har nye sett med forventninger og utfordringer. Behovet for endringskompetanse er stor og det kan være utfordrende å vite hvor en skal starte. ",
};
const midtext = {
  middle: "Blogg",
};
const text2 = {
  bottom:
    "Om du er klar for å møte endringene, men usikker på hvor du bør starte for å nå dine mål og visjoner; bestill tid her for en utforpliktende kartleggings-prat",
  button1: "KONTAKT OSS",
  link1:
    "https://outlook.office365.com/owa/calendar/Vidrivermedforretningsutvikling@admit.no/bookings/",
};

const tmbttext = {
  top: "DIGITAL MEDARBEIDER",
  middle: "Admit Avatar",
  bottom:
    "Admit Avatar er vår samhandlingsplattform ut mot kunde. En digital medarbeider som gir umiddelbar tilgang til relevant og ønsket kompetanse. Den avlaster og frigir verdifull tid i en hektisk hverdag. Aldri mer enn et tastetrykk unna.",

  button1: "LES MER",
  link1: "/avatar",
  // button2: "SE VIDEO",
};

export default function Home({ posts }) {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
      
 

{/* Global Site Tag (gtag.js) - Google Analytics */}
<script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-161447725-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-161447725-1', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

        <title>Admit AS - Gi rådgiving innen ledelse og utvikling</title>
        <meta name="description" content="Velkommen til Admit AS. Vi tilbyr rådgivning innen ledelse og utvikling, HR, digitalisering, strategi, markedsføring, systemer og økonomi " />

        {/* primary */}
        <title>Admit AS - Gi rådgiving innen ledelse og utvikling</title>
        <meta name="title" content="Admit AS" />
        <meta name="description" content="Velkommen til Admit AS. Vi tilbyr rådgivning innen ledelse og utvikling, HR, digitalisering, strategi, markedsføring, systemer og økonomi " />

        {/* shitbook--fb */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.admit.no/" />
        <meta property="og:title" content="Admit AS" />
        <meta property="og:description" content="Vi tilbyr rådgivning innen ledelse og utvikling, HR, digitalisering, strategi, markedsføring, systemer og økonomi. " />
        <meta
          property="og:image"
          content="https://i.ibb.co/vs2THv2/Frame-24.webp"
        />

        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.admit.no/" />
        <meta property="twitter:title" content="Admit AS" />
        <meta
          property="twitter:description"
          content="Vi tilbyr rådgivning innen ledelse og utvikling, HR, digitalisering, strategi, markedsføring, systemer og økonomi "
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/vs2THv2/Frame-24.webp"
        />
        <link rel="shotcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* google */}
        <meta itemprop="name" content="Admit AS" />
        <meta itemprop="description" content="Vi tilbyr rådgivning innen ledelse og utvikling, HR, digitalisering, strategi, markedsføring, systemer og økonomi " />
        <meta
          itemprop="image"
          content="https://i.ibb.co/vs2THv2/Frame-24.webp"
        />
      </Head>
      <Hero />

      <ThreeMiddleTextTwoButton props={toptext} />
      {/* <Circular /> */}
      <div ref={ref} id="circularSection">
        <Circular3 />
      </div>
      <ThreeMiddleTextTwoButton props={text2} />
      <ThreeMiddleTextTwoButton props={midtext} />
      <div className="md:translate-y-[-0rem] translate-y-[-7rem]">
        <BlogPreview posts={posts} />
      </div>
      <ThreeMiddleTextTwoButton props={tmbttext} />

      <FullPageImage />

      <Outro />
    </>
  );
}
