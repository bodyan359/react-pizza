import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => (
  <div>
       <center>
    <h1>404 - Not Found!</h1>
         <Link to="/">
            Go Home
         </Link>
    </center>
  </div>
);

export default NotFound;