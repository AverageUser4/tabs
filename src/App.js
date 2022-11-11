import React from 'react';

import People from './components/People.js';
import Person from './components/Person.js';

export default function App() {
  const [peopleData, setPeopleData] = React.useState([]);
  const [currentPersonID, setCurrentPersonID] = React.useState(null);

  React.useEffect(() => {
    fetch('./people.js')
      .then(resp => resp.json())
      .then(json => {
        setPeopleData(json);
        setCurrentPersonID(json[0].id)
      })
      .catch(error => console.error(error));
  }, []);

  return(
    <div className="website">

      {
        !currentPersonID ?
          <h1 className="heading">Loading...</h1>
        :
          <>

            <h1 className="heading heading--fancy-underline">Experience</h1>

            <div className="people-and-person">
      
              <People
                peopleData={peopleData}
                currentPersonID={currentPersonID}
                setCurrentPersonID={setCurrentPersonID}
              />
      
              <Person
                peopleData={peopleData}            
                currentPersonID={currentPersonID}
              />
      
            </div>
            
          </>
      }

    </div>
  );
}