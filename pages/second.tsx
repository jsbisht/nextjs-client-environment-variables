import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import Navigation from "../components/Navigation";
import { Stringify } from "../components/Stringify";
import { PublicConfigContext } from "../state/PublicConfigContext";
import styles from "../styles/Home.module.css";
import { getPublicConfigs } from "../utility/getServerSideProps";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const publicConfigs = getPublicConfigs(context);
  return {
    props: {
      publicConfigs,
      secondaryData: {
        a: 10,
        b: 20,
      },
    },
  };
};

const ConfigsPanel = () => {
  const publicConfigs = useContext(PublicConfigContext);
  return (
    <>
      <h2>Second Page</h2>
      <Stringify title="public config from context" data={publicConfigs} />
    </>
  );
};

const Second: NextPage = ({ secondaryData }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main className={styles.main}>
        <ConfigsPanel />
        <Stringify title="secondary data as page props" data={secondaryData} />
      </main>
    </div>
  );
};

export default Second;
