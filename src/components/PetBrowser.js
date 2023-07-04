import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {

  const pet = pets.map((pet) => (
    <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
  ))

  return <div className="ui cards">{pet}</div>;
  
}

export default PetBrowser;