import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { BiArrowBack } from 'react-icons/bi';
import Layout from '../../components/layout/Layout';

import styles from '../../styles/country.module.css';

function Name({ name }) {
  return (
    <div>
      <Head>
        <title>{name[0].name.common}</title>
      </Head>
      <Layout>
        <div className={styles.country}>
          <div className={styles.backbtn}>
            <button onClick={() => Router.back()}>
              <BiArrowBack /> Back
            </button>
          </div>
          <div className={styles.ctnts}>
            <div className={styles.imagebox}>
              <img src={name[0].flags.png} alt={name[0].name.common} />
            </div>
            <div className={styles.textbox}>
              <div className={styles.cname}>{name[0].name.common}</div>
              <div>
                Official Name:{' '}
                <span className={styles.gray}>{name[0].name.official}</span>
              </div>
              <div>
                Population:{' '}
                <span className={styles.gray}>
                  {name[0].population.toLocaleString()}
                </span>
              </div>
              <div>
                Region: <span className={styles.gray}>{name[0].region}</span>
              </div>
              <div>
                Sub Region:{' '}
                <span className={styles.gray}>{name[0].subregion}</span>
              </div>
              <div>
                Capital:{' '}
                <span className={styles.gray}>{name[0].capital[0]}</span>
              </div>
            </div>
            <div className={styles.aditional}>
              <div>
                Top Level Domain:{' '}
                <span className={styles.gray}>{name[0].tld[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const countries = await res.json();
  const name = await countries;

  const paths = name.map((coutry) => ({
    params: { name: coutry.name.common },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.name}`);
  const countries = await res.json();
  const name = await countries;
  return {
    props: { name },
  };
}

export default Name;
