import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Your email list today</title>
        <meta name="description" content="InboxZeroine" />
      </Head>
      <div>
      <h1 className="text-title-fifth-mobile md:text-title-fifth mb-6">
      👋 How can I help you today?</h1>
     </div>
    </div>
  );
};

export default Home;
