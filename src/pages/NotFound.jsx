import React from 'react';
import { Link } from 'react-router-dom';

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