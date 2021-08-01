import React, { Component } from "react";

class CountryCreate extends Component {
  createCountry = (event) => {
    event.preventDefault();

    const country = {
      Name: event.target["name"].value,
    };

    this.props.addCountry(country);
  };

  render() {
    return (
      <div className="col-md-4"><br></br>
        <div className="row">
          <h3 className="col-12">Add Country</h3>
        </div>

        <form onSubmit={this.createCountry}>
          <div className="row mb-2">
            <label htmlFor="name" className="col-4 mt-1">
             Country:
            </label>
            <input
              id="name"
              type="text"
              required
              minLength="2"
              className="form-contorl col-18"
              placeholder="Enter Name"
            />
          </div>

          <div >
            <input type="reset" className="mr-2 btn btn-warning col-4" value="Reset" />
            <input type="submit" className="btn btn-success col-3" value="Create" />
          </div>
        </form>

        <div ><br></br>
          <button className="btn btn-secondary my-1" onClick={this.props.closeCreate} >Close</button>
        </div>
      </div>
    );
  }
}
export default CountryCreate;
