import React from 'react';
import './EmployeeList.css';

const employees = [
  { id: 1, name: 'John Doe', email: 'john@example.com', gender: 'Male', newJoiner: false, salary: 60000, rating: 4 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', gender: 'Female', newJoiner: true, salary: 75000, rating: 5 },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', gender: 'Female', newJoiner: false, salary: 70000, rating: 3 },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com', gender: 'Male', newJoiner: true, salary: 65000, rating: 4 },
];

function EmployeeList() {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>New Joiner</th>
            <th>Salary</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.gender}</td>
              <td>{employee.newJoiner ? 'Yes' : 'No'}</td>
              <td>${employee.salary}</td>
              <td>{employee.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
