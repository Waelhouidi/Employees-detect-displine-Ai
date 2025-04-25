import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Employee</th>
          <th>Event</th>
          <th>Time</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.employee_id}</td>
            <td>{item.event_type}</td>
            <td>{item.event_time}</td>
            <td>{item.duration || '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
