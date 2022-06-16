import React from 'react';
import { Link } from 'react-router-dom';

const LinkOfSB = ({ text, toLogin}) => {
  return (
    <React.Fragment>
      <Link to={toLogin}>{text}</Link>
    </React.Fragment>
  )
}

export default LinkOfSB;