// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { addEmployee } from '../services/employeeService';

// eslint-disable-next-line react/prop-types
const AddEmployee = ({ onBack }) => {
  const [employee, setEmployee] = useState({
    name: '',
    address: '',
    contactMethods: [{ contact_method: '', value: '' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleContactMethodChange = (index, e) => {
    const { name, value } = e.target;
    const newContactMethods = [...employee.contactMethods];
    newContactMethods[index][name] = value;
    setEmployee({ ...employee, contactMethods: newContactMethods });
  };

  const addContactMethod = () => {
    setEmployee({ ...employee, contactMethods: [...employee.contactMethods, { contact_method: '', value: '' }] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(employee);
    onBack();
  };

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={employee.name} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={employee.address} onChange={handleChange} />
        </div>
        <div>
          <label>Contact Methods:</label>
          {employee.contactMethods.map((method, index) => (
            <div key={index}>
              <select name="contact_method" value={method.contact_method} onChange={(e) => handleContactMethodChange(index, e)}>
                <option value="EMAIL">Email</option>
                <option value="PHONE">Phone</option>
              </select>
              <input type="text" name="value" value={method.value} onChange={(e) => handleContactMethodChange(index, e)} />
            </div>
          ))}
          <button type="button" onClick={addContactMethod}>Add Contact Method</button>
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
