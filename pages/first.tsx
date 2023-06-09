import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import Navigation from "../components/Navigation";
import { Stringify } from "../components/Stringify";
import { PublicConfigContext } from "../state/PublicConfigContext";
import styles from "../styles/Home.module.css";

export { default as getServerSideProps } from "../utility/getServerSideProps";

const ConfigsPanel = () => {
  const publicConfigs = useContext(PublicConfigContext);
  return (
    <main className={styles.main}>
      <h2>First Page</h2>
      <Stringify title="public config from context" data={publicConfigs} />
    </main>
  );
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <ConfigsPanel />
    </div>
  );
};

export default Home;
