import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import axios from 'axios'
import { useState } from 'react'

export default function Home({ pizzaList, admin }) {

  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Pizza website" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Moon+Dance&display=swap" rel="stylesheet" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList}/>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("https://pizzawebsite-main.vercel.app/");
  
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
