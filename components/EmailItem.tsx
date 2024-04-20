import Image from 'next/image';
import React from 'react';
import { Email } from '../models/email';
import styles from '../styles/EmailItem.module.css';

type Props = {
  emailItem: Email;
};
const EmailItem = ({ emailItem }: Props) => {
  return (
    <>
      <li className={styles.each}>
        <button
          className={styles.eachButton}
          onClick={() => {
            // updateHandler(emailItem);
          }}
        >
          <Image
            src={emailItem.completed ? '/circle-checked.svg' : '/circle.svg'}
            layout="fixed"
            width={20}
            height={20}
            alt="Check Image"
          />
          <span style={emailItem.completed ? { textDecoration: 'line-through' } : {}}>{emailItem.snippet}</span>
        </button>
        <button
          className={styles.deleteBtn}
          onClick={() => {
            // deleteHandler(emailItem.id);
          }}
        >
          <Image src="/delete.svg" width={24} height={24} alt="Check Image" />
        </button>
      </li>
    </>
  );
};

export default EmailItem;
