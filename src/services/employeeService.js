import axios from 'axios';

const API_BASE_URL = 'https://free-ap-south-1.cosmocloud.io/development/api';

export const getEmployees = () => axios.get(`${API_BASE_URL}/getEmp`);

export const getEmployeeById = (id) => axios.get(`${API_BASE_URL}/getEmp/${id}`);

export const addEmployee = (employee) => axios.post(`${API_BASE_URL}/postEmployee`, employee);

export const deleteEmployee = (id) => axios.delete(`${API_BASE_URL}/deleteEmployee/${id}`);
