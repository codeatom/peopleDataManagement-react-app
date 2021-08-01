import React from "react";

const CountryTable = (props) => {
  const rows = props.countries.map((country) => {
    return (
      <tr key={country.id}>
        <td>{country.name}</td>
        <td>
        <button onClick={() => {props.showCityTable(country.id);}} className="btn btn-link" >|cities|</button>
        <button onClick={props.showCreateCity} class="btn btn-link text-success" >|add city|</button>
        <button onClick={() => {props.countryWarningMessage(country.id);}} class="btn btn-link text-danger" >|Delete|</button>
        </td>
      </tr>
    );
  });

  return ( 
    <div className="col-md-4" >

      <br></br>
      <h1>Countries</h1>

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr></tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>

        <div >
          <br></br>
           <button className="btn btn-success col-4 mr-2" onClick={props.showCreateCountry}>Add Country</button>
           <button className="btn btn-secondary col-3" onClick={props.closeTable}>Close</button>
        </div>

    </div>
  );
};

export default CountryTable;
