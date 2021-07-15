import React from "react";
import "./Filter.css";

function Filter({ status, setStatus, gender, setGender }) {
  function changeStatus(e) {
    setStatus(e.target.value);
  }
  function changeGender(e) {
    setGender(e.target.value);
  }

  //Filtreleme işlemlerini yakalayabilmek için oluşturulan dropdownlar ve fonksiyonlar

  return (
    <div className="filters-container">
      <div className="status-container">
        <label htmlFor="status">Status</label>

        <select
          name="status"
          id="status"
          value={status}
          onChange={changeStatus}
        >
          <option value="All">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="gender-container">
        <select
          name="gender"
          id="gender"
          value={gender}
          onChange={changeGender}
        >
          <option value="All">All</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <label htmlFor="gender">Gender</label>
      </div>
    </div>
  );
}

export default Filter;
