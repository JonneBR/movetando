import React, { useState } from 'react';

// fetch('https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false')

export const Add = () => {
  const [query, setQuery] = useState('');

  const onChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setQuery(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Search for a movie'
              value={query}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
