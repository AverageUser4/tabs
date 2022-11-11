import React from 'react';

export default function People({ peopleData, currentPersonID, setCurrentPersonID }) {
  if(peopleData.length === 0)
    return <h3>No data found.</h3>;

  const personElements = peopleData.map(person => 
    <button 
      key={person.id}
      className={'people__button' + (person.id === 
        currentPersonID ? ' people__button--active' : '')}
      onClick={() => setCurrentPersonID(person.id)}
    >{person.company}</button>
  );

  return (
    <nav className="people">

      {personElements}

    </nav>
  );
}