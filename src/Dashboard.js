import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import Chart from './Chart';
import './index.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [employeeFilter, setEmployeeFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  // Fetch activity data from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/get_activity')
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const applyFilters = () => {
    const filtered = data.filter(item => {
      const matchEmp = !employeeFilter || item.employee_id.includes(employeeFilter);
      const matchDate = !dateFilter || item.event_time.startsWith(dateFilter);
      return matchEmp && matchDate;
    });
    setFilteredData(filtered);
  };

  return (
    <div className="dashboard-container">
      <h1>Employee Activity Dashboard</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Filter by Employee ID"
          value={employeeFilter}
          onChange={(e) => setEmployeeFilter(e.target.value)}
        />
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
        <button onClick={applyFilters}>Apply Filters</button>
      </div>

      <Chart data={filteredData} />
      <Table data={filteredData} />
    </div>
  );
};

export default Dashboard;
