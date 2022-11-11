import React from 'react';

import { ReactComponent as DoubleArrow } from '../resources/double-arrow.svg';

export default function Person({ peopleData, currentPersonID }) {
  if(!currentPersonID)
    return (
      <h3>No data found.</h3>
    );

  const currentPerson = peopleData.find(person => person.id === currentPersonID);
  const uniqueDuties = [...new Set(currentPerson.duties)];

  const achievementElements = uniqueDuties.map(duty =>
    <li key={duty} className="person__achievement">
          
      <div className="person__achievement-arrow-container">
        <DoubleArrow/>
      </div>

      <span>{duty}</span>
    
    </li>
  );

  return (
    <article className="person">

      <h2 className="person__position">{currentPerson.title}</h2>

      <span className="person__name">{currentPerson.company}</span>

      <span className="person__period">{currentPerson.dates}</span>

      <ul className="person__achievements-list">

        {achievementElements}

      </ul>

      <a className="button" href="#">More info</a>

    </article>
  );
}