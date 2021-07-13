import React, { useState, useEffect } from "react";
import "./Filter.css";

function Filter() {
  const [status, setStatus] = useState("all");
  const [gender, setGender] = useState("all");

  function changeStatus(e) {
    setStatus(e.target.value);
    console.log(status);
  }
  function changeGender(e) {
    setGender(e.target.value);
    console.log(gender, "Gender");
  }

  useEffect(() => {
    setStatus("all");
  }, []);

  return (
    <div className="filters-container">
      <div className="status-container">
        <label htmlFor="status">Status</label>

        <select
          value={status}
          name="status"
          id="status"
          onChange={changeStatus}
        >
          <option value="all">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="gender-container">
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" onChange={changeGender}>
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
