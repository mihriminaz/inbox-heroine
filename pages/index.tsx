import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import { Email } from '../models/email';
import styles from '../styles/Home.module.css';
import emailData from '../models/data/emails.json';
import EmailParser from '../components/EmailParser';
import Persona from '../components/Persona';

type Props = {
  emails: Array<Email>;
};

const Home: NextPage<Props> = ({ emails }) => {
  // Todo list array which displays the todo items
  const emailList = emailData.emails;

  return (
    <div>
      <Head>
        <title>Your email list today</title>
        <meta name="description" content="Tigris app tutorial" />
      </Head>
      <div className={styles.container}>
      <h1 className="text-title-fifth-mobile md:text-title-fifth mb-6">
      👋 How can I help you today?</h1>

      <div className="flex flex-col gap-y-6">
        <Persona/>
        <EmailParser />
        <a href="https://usebeams.com/">
          <Image src="/beams_logo.png" alt="Beams Logo" width={100} height={100} />
        </a>
      </div>
    </div>
    </div>
  );
};

export default Home;
