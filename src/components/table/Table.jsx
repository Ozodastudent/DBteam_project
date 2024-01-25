import React from 'react';
import './table.css';

const Table = ({ details }) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
          {details.map((detail, rowIndex) => (
            <tr key={rowIndex}>
              <td>{detail.label}</td>
              <td>{detail.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
