import React from 'react';

import NewCard from './components/NewCard/NewCard';


const App = () => {
  const addCardHandler = card => {
    console.log('In App.js');
    console.log(expenses);
  };
  
  return (
    <div>
      <NewCard onAddCard={addCardHandler} />
    </div>
  );
};

export default App;
