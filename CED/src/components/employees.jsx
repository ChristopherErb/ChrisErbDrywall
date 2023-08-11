import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "../globals";
import NavBar from "./navbar";

const Employees = (props) => {
  return (
    <div>
      <header className="header">
        <h1>Our Hard-Working Employees</h1>
      </header>

      <div className="card-container">
        {props.employees.map((employee) => (
          <div key={employee.employee_name} className="card">
            <h3>
              {employee.employee_name} : {employee.employee_rank}
            </h3>
            <img src={employee.employee_picture}></img>
            <h5>
              Skill Level: {employee.skill_level} <br />
              Years Finishing: {employee.years_of_experience}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
