import React from "react";

const CountryMessageTag = (props) => {
  
  return ( 
    <div className="col-md-4" >

      <br></br>  
      <h4>Cannot delete the country.</h4>
      <p>It is connected to a persons or a city.</p>

      <div>
        <button className="btn btn-secondary col-3" onClick={props.closeMessage}>back</button>
      </div>
      
    </div>
  );
};

export default CountryMessageTag;
