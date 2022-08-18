import React from 'react';
import styles from './search.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

function Search() {
  return (
    <div className={styles.search}>
      <div className={styles.input}>
        <AiOutlineSearch />
        <input type={'text'} placeholder="search for a country..." />
      </div>
      <div className={styles.select}>
        <select>
          <option>Filter by region</option>
          <option value={'africa'}>Africa</option>
          <option value={'america'}>America</option>
          <option value={'asia'}>Asia</option>
          <option value={'europe'}>Europe</option>
          <option value={'oceania'}>Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Search;
