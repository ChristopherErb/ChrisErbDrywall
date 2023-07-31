import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './navbar'
const Projects = (props) => {





    return (
      <div>
{props.projects.map((project) => (
<div class="card">

 
  <img class="card-img-top" src="jpg.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title"key={project.projectId}>{project.project_manager}</h5>
    <p class="card-text">{project.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Start Date: {project.start_date}</li>
    <li class="list-group-item">End Date: {project.end_date}</li>
    <li class="list-group-item">Type of Job: {project.type_of_job}</li>
    <li class="list-group-item">Type of Job: {project.type_of_job}</li>
    <li class="list-group-item"><div className='blurred'>
          <h7>Estimate</h7><span>${project.estimate}.00</span>
          <h5>Materials</h5><span>${project.material_cost}.00</span>
          <h5>Labor</h5><span>${project.labor_cost}.00</span>
          <h5>Total Cost</h5><span>${project.total_cost}.00</span>
          </div></li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>

  </div>


</div>
))} 
</div>
    )

}


export default Projects