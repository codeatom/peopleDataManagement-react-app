import React, { Component } from "react";

class CityCreate extends Component {
  createCity = (event) => {
    event.preventDefault();

    const city = {
      CityName: event.target["cityName"].value,
      StateId: Number(event.target["stateId"].value),
    };

    this.props.addCity(city);
  };

  render() {
    return (
      <div className="col-md-4"><br></br>
        <div className="row">
          <h3 className="col-12">Add City</h3>
        </div>

        <form onSubmit={this.createCity}>
          <div className="row mb-2">
            <label htmlFor="cityName" className="col-3 mt-1">
             City:
            </label>
            <input
              id="cityName"
              type="text"
              required
              minLength="2"
              className="form-contorl col-18"
              placeholder="Enter Name"
            />
          </div>

          <div className="row mb-2">
            <label htmlFor="stateId" className="col-3 mt-1">
              Country:
            </label>
            <select  id="stateId" required value={this.props.countryItem} >
              {this.props.countries.map(countryItem => (
                <option key={countryItem.id} value={countryItem.id}>
                    {countryItem.name}
                </option>))}
            </select>
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
export default CityCreate;
