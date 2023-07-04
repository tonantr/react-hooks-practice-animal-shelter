import React, { useState } from "react";

function Filters(props) {

  const {selectedType, onChangeType} = props
  const [type, setType] = useState(selectedType)

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" value={selectedType} onChange={(e) => setType(e.target.value)}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={() => onChangeType(type)}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;