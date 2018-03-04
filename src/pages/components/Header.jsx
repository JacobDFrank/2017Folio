import React from 'react';
import Link from 'gatsby-link';

const Header = function statelessFunctionComponentClass() {
  return (<header>
    <Link to="/" className="faux-link"> <span id="channeled-text"></span></Link>
  </header>);
};

export default Header;
