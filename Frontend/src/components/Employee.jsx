import React, {useEffect, useState} from 'react';
import { listEmployees } from '../services/EmployeeService';

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listEmployees().then((response) => {
      setEmployees(response.data);
    }).catch(error => {
      console.error(error); // Fixed parentheses for error logging
    });
  }, []);

  return (
    <div>
      <div className="container">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map(employee => 
                <tr key={employee.id}>
                  <td>{employee.id}</td> 
                  <td>{employee.firstName}</td> 
                  <td>{employee.lastName}</td> {/* Corrected to 'lastName' */}
                  <td>{employee.email}</td> 
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
