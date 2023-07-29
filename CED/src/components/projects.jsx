import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './navbar'
const Projects = (props) => {





    return (

<div>
        <h1>Here's Projects</h1>
        {props.projects.map((project) => (
          <h3 key={project.projectId}>{project.description}</h3>
        ))}
      </div>
    )

}


export default Projects