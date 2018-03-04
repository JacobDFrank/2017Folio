import React from 'react';

const scriptURL = '/assets/blotterMe.js';

class Blott extends React.Component {
    constructor(props) {
        super(props);
    }
  componentDidMount() {
    const load = require('load-script');

    load(__PATH_PREFIX__ + scriptURL, (err, script) => {
      if (err) {
        // print useful message
      } else {
        console.log(script.src); // Prints 'foo'.js'
        // use script
        // note that in IE8 and below loading error wouldn't be reported
      }
    });
    }

    render() {
      return (
          <div>
              
          </div>
      );
  }
}

export default Blott;
