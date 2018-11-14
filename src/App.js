import React, { Component } from 'react';
import List from './components/List';
import styles from './styles/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  handleClick = () => {
    function clickable(){
      var classname = document.getElementsByClassName("class-static");
      var myFunction = function() {
        var cover = this.getAttribute("data-urlcover"); 
        alert(cover);              
      };
      Array.from(classname).forEach(function(element) {
        element.addEventListener("click", myFunction);
      });
      
    }
    setTimeout(function(){ clickable(); }, 900);
  }

  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    this.handleClick();
  }

  render() {
    return (
      <Router>
        <div>
          
          <main className={styles['main']} >

            <List />
            <div className={styles['main-content']}>
              <Route exact path="/mylist" component={List} />
              
              
            </div>
          </main>
          
        </div>
      </Router>
    );
  }
}

export default App;