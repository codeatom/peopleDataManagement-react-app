import React from "react";

const CityTable = (props) => {
  const rows = props.cities.map((city) => {
    return (
      <tr key={city.id}>
        <td>{city.name}</td>
        <td>
        <button onClick={() => {props.cityWarningMessage(city.id);}} class="btn btn-link text-danger" >Delete</button>
        </td>
      </tr> 
    );
  });

  return ( 
    <div className="col-md-4" >

      <br></br>
      <h1>Cities</h1>

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr></tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>

        <div >
          <br></br>
           <button className="btn btn-success col-4 mr-2" onClick={props.showCreateCity}>Add City</button>
           <button className="btn btn-secondary col-3" onClick={props.closeTable}>Close</button>
        </div>

    </div>
  );
};

export default CityTable;
