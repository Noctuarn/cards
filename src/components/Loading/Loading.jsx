import React from 'react';
import './Loading.scss';

function Loading() {
  return (
    <div className="loading">
      <div className="loading__spinner"></div>
      <span className="loading__text">Loading...</span>
    </div>
  );
}

export default Loading;