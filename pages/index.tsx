import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import { Email } from '../models/email';
import styles from '../styles/Home.module.css';
import EmailItem from '../components/EmailItem';
import emailData from '../models/data/emails.json';
import EmailParser from '../components/EmailParser';
import Persona from '../components/Persona';
import React from 'react';

type Props = {
  emails: Array<Email>;
};

const Home: NextPage<Props> = ({ emails }) => {
  const emailList = emailData.emails;

  return (
    <div className={styles.container}>
      <Head>
        <title>Your email list today</title>
        <meta name="description" content="Inbox Zeroine" />
      </Head>
      <div className={styles.container}>
      <h1 className="text-title-fifth-mobile md:text-title-fifth mb-6">
      👋 How can I help you today?</h1>


      <Persona/>
      <div className="flex flex-col gap-y-6">
        <EmailParser />
        <ul>
            {(emailList || []).map(email => {
              return (
                <EmailItem
                  key={email.id}
                  emailItem={email}
                />
              );
            })}
          </ul>
      </div>
    </div>
    </div>
  );
};

export default Home;
