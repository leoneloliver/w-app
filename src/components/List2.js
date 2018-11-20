import React, { Component } from 'react';
import Search from './Search'
import styles from '../styles/List2.css';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class List extends Component {

  constructor(props){
    super(props)
    this.state = {
      books: [],
      store: []
    }
  }

  componentDidMount(){
    axios.get('https://api.myjson.com/bins/u2nsy')
    .then(json => json.data.Search.map(result => (
      {
        
        cover: `${result.Poster}`,
        name: `${result.Title}`,
        year: `${result.Year}`,
      
      })))
    .then(newData => this.setState({books: newData, store: newData}))
    .catch(error => alert(error))
  }

  filterNames(e){
    this.setState({books: this.state.store.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()))})
  }

 
  render() {
    const {books} = this.state
    return (
      <div>
        <Search searchFunc={(e) => this.filterNames(e)}/>
        <div className={styles['list']}>

          <div className={styles['cards-wrap']}>
              <h2>Discover</h2>
          </div>
           
          <section className={styles['cards-wrap']}>
          {books.map(
            book =>
            <div className={`${styles['card']} class-static`} data-urlcover={book.cover} >
              <div className={styles['card-image']}>
                <img src={book.cover} />
              </div>
              <div class={styles['product-info']}>
                <h5>{book.name}</h5>
                <h6>{book.year}</h6>
              </div>          
             </div>
            )}
            </section>
        </div>
      </div>
    );
  }
}

export default List;




