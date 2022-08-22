import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import Search from '../../components/searchfilter/Search';
import CountryItem from '../../components/country/countryitem/CountryItem';
import styles from '../../components/country/country.module.css';
import { regions } from '../../lib/regions';

function Region({ region }) {
  return (
    <div>
      <Head>
        <title>Region</title>
      </Head>
      <Layout>
        <Search />
        <div className={styles.container}>
          <div className={styles.grid}>
            {region.map((reg) => (
              <div key={reg.ccn3} className={styles.country}>
                <Link href={`/country/${reg.name.common}`} passHref>
                  <a>
                    <CountryItem
                      imageurl={reg.flags.png}
                      countryname={reg.name.common}
                      population={reg.population.toLocaleString()}
                      region={reg.region}
                      capital={reg.capital}
                    />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = regions.map((regs) => ({
    params: { region: regs.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://restcountries.com/v3.1/region/${params.region}`
  );
  const regions = await res.json();
  const region = await regions;
  return {
    props: { region },
  };
}

export default Region;
