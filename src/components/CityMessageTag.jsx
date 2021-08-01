import React from "react";

const CityMessageTag = (props) => {
  
  return ( 
    <div className="col-md-4" >

      <br></br>  
      <h4>Cannot delete the city.</h4>
      <p>It is connected to one or more persons.</p>

      <div>
        <button className="btn btn-secondary col-3" onClick={props.closeMessage}>back</button>
      </div>
      
    </div>
  );
};

export default CityMessageTag;
