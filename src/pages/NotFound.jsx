import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => (
  <div>
      <Header />
    <h1>404 - Not Found!</h1>
     <center> 
         <Link to="/">
            Go Home
         </Link>
    </center>
    <Footer />
  </div>
);

export default NotFound;