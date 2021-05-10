import React from "react"
import Table from 'react-bootstrap/Table'




function Table2() {
    return (
<>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Job Type</th>
      <th>Contractor</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Lawncare</td>
      <td>Javier's LawnCare</td>
      <td>We cut your grass 'n' stuff</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
 
</>
 );
}

export default Table2;
