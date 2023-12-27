import React from 'react';
import './header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../../../shared/Buttons/Buttons';

const Header = () => {
  return (
    <header>
      <nav id="nav">
        <div className="logo__section">
          <a href="/">
            {/* <img src="../logo.svg" alt="header logo" /> */}
            NepFilili
          </a>
        </div>
        <div className="hamburger" id="hamburger">
          <GiHamburgerMenu className="icon"></GiHamburgerMenu>
        </div>
        <ul id="linkList">
          <div className="crossBtn">
            <RxCross2 className="icon"></RxCross2>
          </div>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <PrimaryButton text="Sign In"/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
