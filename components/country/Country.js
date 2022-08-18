import React, { useEffect, useState } from 'react';
import CountryItem from './countryitem/CountryItem';
import styles from './country.module.css';

function Country() {
  const [country, setCountry] = useState([]);
  async function getCountries() {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {country.map((countr) => (
          <div key={countr.alpha2code} className={styles.country}>
            <CountryItem
              imageurl={countr.flags.png}
              countryname={countr.name}
              population={countr.population.toLocaleString()}
              region={countr.region}
              capital={countr.capital}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Country;
