import React, { Component } from 'react';
import List from './components/List';
import List2 from './components/List2';
import List3 from './components/List3';
import Footer from './components/Footer';
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

    function callBtn(){
        document.getElementById("myBtn").addEventListener("click", function(){
        var element = document.getElementById("root");
        element.classList.toggle("active");
        // element.style.backgroundColor  = element.style.backgroundColor === 'red' ? 'blue' : 'red';
      });
     }

     function toggleMenu(){

        var activeLink = document.querySelectorAll('.menus');

        for (var i = 0; i < activeLink.length; i++) {
            activeLink[i].addEventListener('click', function(event) {
              for (var j = 0; j < activeLink.length; j++) {
                activeLink[j].classList.remove("active-menu");
            }
            
             this.classList.toggle('active-menu'); 

            });
        }

     
     }   
    setTimeout(function(){ clickable(); callBtn(); toggleMenu(); }, 900);
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

            
            <Route exact path="/" component={List} />
            <Route exact path="/discover" component={List2} />
            <Route exact path="/mylist" component={List3} />
              
              
           
          </main>
          <Footer />
          
        </div>
      </Router>
    );
  }
}

export default App;