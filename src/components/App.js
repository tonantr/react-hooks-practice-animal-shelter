import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {

  const [pets, setPets] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    fetch('http://localhost:3001/pets')
    .then(res => res.json())
    .then(data => setPets(data))
  }, [])

  function handleChangeType(type) {
    setSelectedType(type)
  }

  function handleAdoptPet(id) {
    const adoptedPet = pets.map((pet) => {
      if (pet.id === id) {
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    })
    setPets(adoptedPet)
  }

  const petsToDisplay = pets.filter((pet) => {
    if (selectedType === 'all') {
      return true
    } else {
      return pet.type === selectedType
    }
  })


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters selectedType={selectedType} onChangeType={handleChangeType} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={petsToDisplay} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;