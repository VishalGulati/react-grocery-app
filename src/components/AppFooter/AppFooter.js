import React from 'react';
import './AppFooter.css';

/**
 * The application footer
 */
const AppFooter = () => {
  return (
    <footer className="app-footer">
      Designed and Coded by Vishal Gulati (<a
        id="footer-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.vishalgulati.com"
      >
        www.vishalgulati.com
      </a>)
    </footer>
  );
};

export default AppFooter;
