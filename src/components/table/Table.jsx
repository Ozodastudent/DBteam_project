import React from 'react';
import './table.css';

const Table = () => {
  return (
    <div className="table-container">
      <table>
        {/* <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead> */}
        <tbody>
          {[...Array(6)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td>Square / akr:
63 m²</td>
              <td>District:

Mirobod district</td>
              <td>Region:

Toshkent city</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
