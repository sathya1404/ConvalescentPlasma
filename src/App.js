import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Donorform from './component/donor_form/DonorForm';
import Header from './component/header/Header';

function App() {
  return (
    <div className="App">
      
      <Router>
      <div>
        <Route exact path="/" component={Header} />

        <Route path="/Donorform" component={Donorform} />
      </div>
    </Router>
    </div>
  );
}

export default App;
