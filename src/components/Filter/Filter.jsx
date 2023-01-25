import PropTypes from 'prop-types';
import React from 'react';
import style from './Filter.module.css';

 export const Filter = ({ value, filterChange }) => (
    <div>
      <label className={style.filterLabel}>
      Find contacts by name
        <input
          type="text"
          value={value}
          onChange={filterChange}
          className={style.filterInput}
        />
      </label>
    </div>
  );
  
  Filter.propTypes = {
        value: PropTypes.string.isRequired,
        filterChange: PropTypes.func.isRequired,
  };