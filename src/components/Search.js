import React from 'react'
import styles from '../styles/App.css';



const Search = (props) => {
  return(
    <div className={styles['search-box']}><input id="myInput" type="text" className={styles['search-item']} placeholder="Search for users" onChange={props.searchFunc} /><div className={styles['search-icon']}>&#128269;</div></div>
  )
}

export default Search