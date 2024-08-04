// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../services/employeeService';

// eslint-disable-next-line react/prop-types
const EmployeeList = ({ onSelectEmployee, onAddEmployee }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response.data);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  return (
    <div>
      <h1>Employee List</h1>
      <button onClick={onAddEmployee}>Add Employee</button>
      {employees.length === 0 ? (
        <p>No Employees in the system</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.emp_id}>
              {employee.name} (ID: {employee.emp_id})
              <button onClick={() => onSelectEmployee(employee.emp_id)}>View</button>
              <button onClick={() => handleDelete(employee.emp_id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
