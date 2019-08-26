import React from 'react';
import { render } from 'react-dom';

const ProjectThree = () => {
  return <h1>This is ProjectThree</h1>;
};

const mainDiv = document.querySelector('#renderHere');

render(<ProjectThree />, mainDiv);
