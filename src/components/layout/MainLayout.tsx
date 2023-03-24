import Head from "next/head";

import { Navbar } from "../Navbar";

import styles from "./../Main.module.css";

interface MLProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MLProps) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default MainLayout;
