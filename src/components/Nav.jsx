import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';
import Logo from './img/logoHenryB.png'

function Nav({onSearch}) {
  return (
    <>
      <header className={s.navhead}>
        <img src={Logo} alt='LogoHenry'/>
        <h1>Weather App</h1>
        <Link to='/'>
          Home
        </Link>
        <Link to='/about'>
          About
        </Link>
        <div>
          <SearchBar
            onSearch={onSearch}
          />
        </div>
      </header>
    </>
  );
};

export default Nav;
