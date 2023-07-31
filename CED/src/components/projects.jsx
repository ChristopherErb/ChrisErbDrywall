import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './navbar'
const Projects = (props) => {





    return (
      <div>
        <header className="header">
          <h1>Projects in progress</h1>
        </header>
{props.projects.map((project) => (
<div className="card">

 
  <img className="card-img-top" src="jpg.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title"key={project.projectId}>{project.project_manager}</h5>
    <p className="card-text">{project.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Start Date: {project.start_date}</li>
    <li className="list-group-item">End Date: {project.end_date}</li>
    <li className="list-group-item">Type of Job: {project.type_of_job}</li>
    <li className="list-group-item">Type of Job: {project.type_of_job}</li>
    <li className="list-group-item"><div className='blurred'>
          <h6>Estimate</h6><span>${project.estimate}</span>
          <h5>Materials</h5><span>${project.material_cost}</span>
          <h5>Labor</h5><span>${project.labor_cost}</span>
          <h5>Total Cost</h5><span>${project.total_cost}</span>
          </div></li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>

  </div>


</div>
))} 
</div>
    )

}


export default Projects