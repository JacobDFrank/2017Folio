import React from 'react';

const Intro = function statelessFunctionComponentClass() {
  return (
    <section>
      <h2>
        <b>Hey Hey</b>
          —
        <b>I&apos;m <span id="channeled-text"></span>, a 3rd year student at RIT and Design Systems Intern at Adobe
        </b>
      </h2>
      <code className="meta-data code" style={{fontSize: 0.54 + 'em'}}>Site currently being redesigned</code>
    </section>
  );
};

export default Intro;
