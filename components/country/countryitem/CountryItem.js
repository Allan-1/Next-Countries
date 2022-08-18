import React from 'react';
import styles from './countryitem.module.css';

function CountryItem({ imageurl, countryname, population, region, capital }) {
  return (
    <div className={styles.couitem}>
      <div className={styles.image}>
        <img src={imageurl} alt={countryname} />
      </div>
      <div className={styles.coutext}>
        <div className={styles.couname}>{countryname}</div>
        <div className={styles.dets}>
          Population: <span className={styles.details}>{population}</span>
        </div>
        <div className={styles.dets}>
          Region: <span className={styles.details}>{region}</span>{' '}
        </div>
        <div className={styles.dets}>
          Capital: <span className={styles.details}> {capital}</span>
        </div>
      </div>
    </div>
  );
}

export default CountryItem;
