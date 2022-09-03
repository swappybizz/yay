import Head from "next/head";
import Hero from "../components/Hero";
import Circular from "../components/Circular";
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton";
import Counter from "../components/Counter";
import Outro from "../components/Outro";
import FullPageImage from "../components/FullPageImage";
import BlogPreview from "../components/BlogPreview";
import {getRecentPosts } from "../services";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
const toptext = {
  top: "fremtidsrettet forretningsutvikling",
  middle: "Vi er  endringsarkitekter",
  bottom:
    "Den økonomiske og teknologiske omstillingsfasen som pågår, gjør at næringslivet utforsker nye muligheter og markeder. Både samfunn og forbrukere har nye sett med forventninger, og det kan være utfordrende å vite hvor en skal starte.",
};
const midtext = {
  top: "DETTE SKJER",
  middle: "Aktuelt",
  bottom:
    "Bli med på våre events der kompetansedeling og samhandling står i fokus.",
};

const tmbttext = {
  top: "DIGITAL MEDARBEIDER",
  middle: "Admit Avatar",
  bottom:
    "Admit Avatar er vår samhandlingsplattform ut mot kunde. En digital medarbeider som gir umiddelbar tilgang til relevant og ønsket kompetanse.Avlaster og frigir verdifull tid i en hektisk hverdag. Aldri mer enn et tastetrykk unna.",

  button1: "LES MER",
  button2: "SE VIDEO",
};

export default function Home({ posts }) {
  return (
    <div className="">
      <Cursor isGelly={true}cursorBackgrounColor="#FFF"/>
      <Head>
        <title>Admit AS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ThreeMiddleTextTwoButton props={toptext} />
      <Circular />
      <ThreeMiddleTextTwoButton props={midtext} />
      <BlogPreview posts={posts} />
      <ThreeMiddleTextTwoButton props={tmbttext} />
      <Counter />
      <FullPageImage />

      <Outro />
    </div>
  );
}
export async function getStaticProps() {
  const posts = await getRecentPosts();
  return {
    props: { posts },
  };
}
