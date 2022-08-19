import React, { useEffect, useState } from 'react';
import CountryItem from '../../components/country/countryitem/CountryItem';
import Layout from '../../components/layout/Layout';
import Search from '../../components/searchfilter/Search';
import styles from '../../components/country/country.module.css';

function Oceania() {
  const [country, setCountry] = useState([]);
  async function getCountries() {
    fetch('https://restcountries.com/v3.1/region/oceania')
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <Layout>
      <Search />
      <div className={styles.container}>
        <div className={styles.grid}>
          {country.map((countr) => (
            <div key={countr.ccn3} className={styles.country}>
              <CountryItem
                imageurl={countr.flags.png}
                countryname={countr.name.common}
                population={countr.population.toLocaleString()}
                region={countr.region}
                capital={countr.capital}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Oceania;
