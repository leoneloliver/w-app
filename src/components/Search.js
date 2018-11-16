import React from 'react'
import styles from '../styles/App.css';
import logo from '../images/logo.png';



const Search = (props) => {
  return(
    <div className={styles['search-box']}>
	    <div className={styles['list']}>
	    	<div className={`${styles['logo-container']} ${styles['columns']}`}>
	    		<img src={logo} className={styles['logo']}/>
	    	</div>
	    	<div className={styles['columns']}>
					<ul className={styles['desktop-menu']}>
						<li><a href="">Discover</a></li>
						<li><a href="">Create</a></li>
		    	</ul>
	    	</div>
	    	<div className={styles['columns']}>
						<input id="myInput"  type="text" className={styles['search-item']} placeholder="Search" onChange={props.searchFunc} /><div className={styles['search-icon']}>&#128269;</div>
				
	    	</div>

				<div className={styles['columns']}>
						<div className={`${styles['btn-login']} btn`}>
						<a>Go Premium</a>
						</div>
						


						<a className={styles['btn-mobile']} id="myBtn">☰</a>
				</div>
				
			
			<div className={styles['mobile']}>
					<ul>
						<li><a href="">Discover</a></li>
						<li><a href="">Create</a></li>
	    	</ul>
			</div>

			</div>
    </div>
  )
}

export default Search