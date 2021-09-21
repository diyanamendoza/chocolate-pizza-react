// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Footer from './Footer.js';
import Header from "./Header.js"; 
import ImageSection from './ImageSection.js';
import IngredientList from './IngredientList.js';
import Recipe from './Recipe.js';
import Hr from './Hr.js';


export default class App extends Component {
  render() { return (
    <div className="App">
      <Header
        logoImage="logo.png"
        />
      <Hr />
      <ImageSection />
      <Recipe />
      <IngredientList />
      <Footer />
    </div>
  );
}
}




  // export default App;
