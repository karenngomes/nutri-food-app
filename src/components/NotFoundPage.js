import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  
  <div className="box">
    <div className="box__middle">
      <h1 className="box__title">Nutri Food App</h1>
      <p>Are you lost? <Link to="/">Go Home</Link></p>
    </div>
  </div>
    
);

export default NotFoundPage;