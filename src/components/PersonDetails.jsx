import React from "react";

const PersonDetails = (props) => {
  return (
    <div className="col-md-4">

      <br></br>
      <h4>Person Details</h4>

      <ul className="list-group">
        <li className="list-group-item">
          <b>First name:</b>
          <p>{props.person.firstName}</p>
        </li>

        <li className="list-group-item">
          <b>Last name:</b>
          <p>{props.person.lastName}</p>
        </li>

        <li className="list-group-item">
          <b>Country:</b>
          <p>{props.person.state.name}</p>
        </li>

        <li className="list-group-item">
          <b>Current city:</b>
          <p>{props.person.currentCity.name}</p>
        </li>
        
        <li className="list-group-item">
          <b>Mobile no:</b>
          <p>{props.person.cellphoneNumber}</p>
        </li>

        <li className="list-group-item">
          <button className="btn btn-secondary mr-2" onClick={props.closeDetails}>
             Close details
          </button>
          <button className="btn btn-danger" onClick={() => props.warningMessage(props.person.id)}>
             Remove Person
          </button>
        </li>
      </ul>
      
    </div>
  );
};

export default PersonDetails;