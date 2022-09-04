/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Splashscreen from "./splashscreen";
import LoginPage from "./loginpage";

const Home: NextPage = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => setSplash(false), 3000);
  }, []);
  return (
    <div>
      <Head>
        <title>Login Here</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>{splash === false ? <LoginPage /> : <Splashscreen />}</>
    </div>
  );
};

export default Home;
