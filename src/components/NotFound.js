import React, { Component } from 'react';

import '../css/NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound">
      <h2>404: Oopsie Woopsie!</h2>
      <h3>Sorry, we couldn't find that page. Perhaps it was renamed or deleted.</h3>
    </div>
  );
}

export default NotFound;