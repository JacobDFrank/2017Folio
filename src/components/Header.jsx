import React from 'react';
import {Link} from 'gatsby';

const Header = function statelessFunctionComponentClass() {
  return (<header>
    <Link to="/" className="faux-link"> <span id="channeled-text">Jacob Frank</span></Link>
  </header>);
};

export default Header;
