import React from "react";

const CityWarningMessage = (props) => {
  
  return ( 
    <div className="col-md-4" >

      <br></br>  
      <h4>Are you sure you want to delete the city?</h4>

      <div>
        <button  onClick={props.closeMessage} className="btn btn-secondary col-3 mr-2">back</button>
        <button onClick={props.deleteCity} className="btn btn-danger col-3" >Delete</button>
      </div>
      
    </div>
  );
};

export default CityWarningMessage;
