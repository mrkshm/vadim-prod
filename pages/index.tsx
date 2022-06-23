import type { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="relativist">
      <Head>
        <title>Vadim Sher</title>
        <meta
          name="description"
          content="Vadim Sher - Pianiste, compositeur, musicien de scène"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <img className="bg-image bg-big" src="/wall.jpg" alt="background" />
      <img className="bg-small" src="/wall_mob2.jpg" alt="background" />
      <div className="stripe"></div>
      <div className="home-gridder">
        <ul className="centerBreathing">
          <motion.li className="li-cc breathing">
            <Link href="/cine-concerts">
              <a>Ciné-concerts</a>
            </Link>
          </motion.li>
          <motion.li className="li-c breathing">
            <Link href="/concerts">
              <a>Concerts</a>
            </Link>
          </motion.li>

          <li className="li-t breathing">
            <Link href="/theatre">
              <a>Théâtre</a>
            </Link>
          </li>
          <li className="li-m breathing">
            <Link href="/cinema">
              <a>Cinéma</a>
            </Link>
          </li>
        </ul>

        <div className="hero">
          <div className="hero-slug">
            Pianiste, compositeur, musicien de scène
          </div>
          <div className="hero-title">Vadim Sher</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
