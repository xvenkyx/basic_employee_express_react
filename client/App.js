import React from "react";
import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      console.log("success");
    });
  };

  const getEmployee = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
      // console.log(response);
    });
  };

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <label>Name</label>
        <input
          type="text"
          name="movie_name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label>Age</label>
        <input
          type="text"
          name="review"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        ></input>
        <label>Country</label>
        <input
          type="text"
          name="movie_name"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        ></input>
        <label>Position</label>
        <input
          type="text"
          name="movie_name"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        ></input>
        <label>Wage (year)</label>
        <input
          type="text"
          name="movie_name"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        ></input>
        <button onClick={addEmployee}>Submit</button>
      </div>

      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      <div className="employees">
        <button onClick={getEmployee}>Show Employees</button>

        {employeeList.map((val, key) => {
          return (
            <div className="emp">
              <h3>Name : {val.name}</h3>
              <h3>Age : {val.age}</h3>
              <h3>Country : {val.country}</h3>
              <h3>Position : {val.position}</h3>
              <h3>Wage : {val.wage}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
