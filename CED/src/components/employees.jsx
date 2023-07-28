import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'
import NavBar from './navbar'



const Employees = () => {

    const [employeeState, setEmployeeState] = useState([])

    useEffect(() => {
    const getEmployees = async () => {

        try{
        const response = await axios.get(`${BASE_URL}/employees`)
        console.log(response)
        setEmployeeState(response.data)
        } catch (error) {
            console.error('Error with useEffect', error)
        }
      }
      getEmployees()
  
    }, [])
 



    return (

        <div>
            {employeeState.map((employee) => (
                <div key={employee.employee_name} className='card'>
                <h3>{employee.employee_name} : {employee.employee_rank}</h3>
                <img src={employee.employee_picture} ></img>
                <h5>What can they do? {employee.skill_level} <br/>
               Hourly fee: {employee.employee_pay}  <br/>
                How long have I been finishing? {employee.years_of_experience}
                </h5>

                
                </div>
                
                ))}
        </div>
    )

}


export default Employees