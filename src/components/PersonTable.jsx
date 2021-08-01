import React from "react";

const PersonTable = (props) => {
  const rows = props.persons.map((person) => {
    return (
      <tr key={person.id}>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.state.name}</td>
        <td>{person.currentCity.name}</td>
        <td>{person.cellphoneNumber}</td>      
        <td>
        <button onClick={() => {props.showPerson(person.id);}} className="btn btn-info" >Details</button>
        </td>
      </tr>
    );
  });

  return (
    
    <div className="col-md-8 middle-bar" >
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Country</th>
            <th>Current city</th>
            <th>Mobile no:</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default PersonTable;
