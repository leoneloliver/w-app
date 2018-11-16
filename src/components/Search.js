import React from 'react'
import styles from '../styles/App.css';
import logo from '../images/logo.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const Search = (props) => {
  return(
    <div className={styles['search-box']}>
	    <div className={styles['list']}>
	    	<div className={`${styles['logo-container']} ${styles['columns']}`}>
	    	<Link to="/"><img src={logo} className={styles['logo']}/></Link>
	    		
	    	</div>
	    	<div className={styles['columns']}>
					<ul className={styles['desktop-menu']}>
						<li className={`menus`}>
							<Link to="/discover">Discover</Link>
						</li>
						<li className={`menus`}>
							<Link to="/mylist">My List</Link>
						</li>
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
						<li><a href="/discover">Discover</a></li>
						<li><a href="/mylist">My List</a></li>
	    	</ul>
			</div>

			</div>
    </div>
  )
}

export default Search