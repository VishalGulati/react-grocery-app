import React from 'react';
import './AppHeader.css';
import Autocomplete from '../../containers/Autocomplete/Autocomplete';

/**
 * The application header
 */
const AppHeader = () => {
  return (
    <header className="app-header">
      Grocery App
      <Autocomplete
        suggestions={[
          'Saffola Oil',
          'Surf Excel',
          'Dairy Milk',
          'Lays Chips',
          'Good Day Buiscuit',
          'Coca Cola'
        ]}
      />
    </header>
  );
};

export default AppHeader;
