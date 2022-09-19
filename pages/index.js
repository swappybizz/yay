import Head from "next/head";
import Hero from "../components/Hero2";
import{useRef} from "react"
// import Hero2 from "../components/Hero";
// import Circular from "../components/Circular2";
import Circular3 from "../components/Circular4";
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton";
import Outro from "../components/Outro";
import FullPageImage from "../components/FullPageImage";
import BlogPreview from "../components/BlogPreview";
// import {getRecentPosts } from "../services";
// import {Cursor}from "react-creative-cursor"

import 'react-creative-cursor/dist/styles.css';
const toptext = {
  top: "Fremtidsrettet forretningsutvikling",
  middle: "Vi er  endringsarkitekter",
  bottom:
"Den økonomiske og teknologiske omstillingsfasen som pågår, gjør at næringslivet utforsker nye muligheter og markeder. Både samfunn, næringsliv og forbrukere har nye sett med forventninger og utfordringer. Behovet for endringskompetanse er stor og det kan være utfordrende å vite hvor en skal starte. "};
const midtext = {
 
  middle: "Blogg",
}
const text2 = {
  bottom: "Om du er klar for å møte endringene, men usikker på hvor du bør starte for å nå dine mål og visjoner; bestill tid her for en utforpliktende kartleggings-prat",
  button1: "KONTAKT OSS",
  link1: "https://calendly.com/admitas/"
 
  
}

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
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  
  return (
    <>
      
      <Head>
        <title>Admit AS</title>
        <meta name="description" content="Velcommen til Admit AS " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero  />
    

      <ThreeMiddleTextTwoButton props={toptext} />
      {/* <Circular /> */}
      <div ref={ref} 
      id="circularSection"
      >
      <Circular3  />
      </div>
      <ThreeMiddleTextTwoButton props={text2} />
      <ThreeMiddleTextTwoButton props={midtext} />
      <BlogPreview posts={posts} />
      <ThreeMiddleTextTwoButton props={tmbttext} />
      
      <FullPageImage />

      <Outro />
    </>
  );
}

