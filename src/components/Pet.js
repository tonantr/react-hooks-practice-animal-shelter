import React from "react";

function Pet({pet, onAdoptPet}) {

  const gender = {
    male: '♂',
    female: '♀'
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
        {gender[pet.gender]}&nbsp; {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>{pet.age}</p>
          <p>{pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ): (
          <button className="ui primary button" onClick={() => {onAdoptPet(pet.id)}}>Adopt pet</button>
        )}    
      </div>
    </div>
  );
}

export default Pet;