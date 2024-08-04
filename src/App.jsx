// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';
import './styles.css';

const App = () => {
  const [currentView, setCurrentView] = useState('list');
  const [selectedEmpId, setSelectedEmpId] = useState(null);

  const handleSelectEmployee = (id) => {
    setSelectedEmpId(id);
    setCurrentView('details');
  };

  const handleAddEmployee = () => {
    setCurrentView('add');
  };

  const handleBack = () => {
    setCurrentView('list');
  };

  return (
    <div className="App">
      {currentView === 'list' && <EmployeeList onSelectEmployee={handleSelectEmployee} onAddEmployee={handleAddEmployee} />}
      {currentView === 'details' && <EmployeeDetails empId={selectedEmpId} onBack={handleBack} />}
      {currentView === 'add' && <AddEmployee onBack={handleBack} />}
    </div>
  );
};

export default App;
