import React, { Component } from 'react';
import Search from './Search'
import styles from '../styles/List.css';
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

           
          <section className={styles['products']}>
          {books.map(
            book =>
            <div className={`${styles['product-card']} class-static`} data-urlcover={book.cover} >
              <div className={styles['product-image']}>
                <img src={book.cover} />
              </div>
              <div class={styles['product-info']}>
                <h5>{book.name}</h5>
                <h6>$99.99</h6>
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




