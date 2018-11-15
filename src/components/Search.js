import React from 'react'
import styles from '../styles/App.css';
import logo from '../images/logo.png';



const Search = (props) => {
  return(
    <div className={styles['search-box']}>
	    <div className={styles['list']}>
	    	<img src={logo} className={styles['logo']}/>
	    	<ul>
					<li><a href="">Discover</a></li>
					<li><a href="">Create</a></li>
	    	</ul>
	    	<input id="myInput"  type="text" className={styles['search-item']} placeholder="Search" onChange={props.searchFunc} /><div className={styles['search-icon']}>&#128269;</div>
				<a className={`${styles['btn-login']} btn`}>Go Premium</a>
				<a className={styles['btn-mobile']} id="myBtn">☰</a>
			</div>
			<div className={styles['mobile']}>sdafsdfdsafsdf sda f ds f s d f sdf</div>
    </div>
  )
}

export default Search