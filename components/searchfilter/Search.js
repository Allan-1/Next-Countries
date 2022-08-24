import React, { useState } from 'react';
import styles from './search.module.css';
import { Capitalize } from '../../lib/capitalize';
import { AiOutlineSearch } from 'react-icons/ai';

function Search() {
  const [search, setSearch] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    location.href = `http://localhost:3000/country/${Capitalize(search)}`;
  }
  return (
    <div className={styles.search}>
      <div className={styles.input}>
        <form onSubmit={handleSubmit}>
          <AiOutlineSearch />
          <input
            type={'text'}
            placeholder="search for a country..."
            id="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className={styles.select}>
        <select
          onChange={(e) =>
            (location.href = `http://localhost:3000/continent/${e.target.value}`)
          }
        >
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
