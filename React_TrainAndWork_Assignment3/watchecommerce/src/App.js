import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';


export default class App extends Component {





  render() {
    return (

      <div className="wrapper bg--shaft">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>

    )
  }
}
