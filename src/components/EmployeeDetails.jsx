// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { getEmployeeById } from '../services/employeeService';

// eslint-disable-next-line react/prop-types
const EmployeeDetails = ({ empId, onBack }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetchEmployee();
  }, [empId]);

  const fetchEmployee = async () => {
    const response = await getEmployeeById(empId);
    setEmployee(response.data);
  };

  return (
    <div>
      <button onClick={onBack}>Back</button>
      {employee ? (
        <div>
          <h1>{employee.name}</h1>
          <p>Address: {employee.address}</p>
          <h2>Contact Methods:</h2>
          <ul>
            {employee.contactMethods.map((method, index) => (
              <li key={index}>
                {method.contact_method}: {method.value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
