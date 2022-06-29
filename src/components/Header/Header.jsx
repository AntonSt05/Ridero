import React from 'react';
import logo1 from './logo1.jpeg';
import './Header.scss';
const Heder = () => {
  return (
    <div className='header'>
      <h1>Library </h1> 
      <img className="logo1" src={`${logo1}`} alt="book"/>
    </div>
  );
};

export default Heder;
