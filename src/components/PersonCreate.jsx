import React, { Component } from "react";

class PersonCreate extends Component {
  createPerson = (event) => {
    event.preventDefault();

    const person = {
      FirstName: event.target["firstName"].value,
      LastName: event.target["lastName"].value,
      StateId: Number(event.target["stateId"].value),
      CurrentCityId: Number(event.target["currentCityId"].value),
      CellphoneNumber: event.target["cellphoneNumber"].value,
    };

    this.props.addPerson(person);
  };

  render() {
    return (
      <div className="col-md-4">
          <div className="row">
             <button onClick={this.showCountryTable} className="ml-2 btn btn-success">
                Countries/Cities
             </button>

             <button onClick={this.showCreatePerson} className="ml-2 btn btn-success" >
                Languages
             </button>

             <br></br>
             <h4 className="mx-2  mt-5">Add Person</h4>
          </div>

        <form onSubmit={this.createPerson}>
          <div className="row mb-2">
            <label htmlFor="firstName" className="col-4 mt-1">
              FirstName:
            </label>
            <input
              id="firstName"
              type="text"
              required
              minLength="2"
              className="form-contorl col-18"
              placeholder="Enter Name"
            />
          </div>

          <div className="row mb-2">
            <label htmlFor="lastName" className="col-4 mt-1">
              lastName:
            </label>
            <input
              id="lastName"
              type="text"
              required
              minLength="2"
              className="form-contorl col-18"
              placeholder="Enter Name"
            />
          </div>

          <div className="row mb-2">
            <label htmlFor="stateId" className="col-4 mt-2">
              Country:
            </label>
            <select id="stateId" onChange={this.props.handleCountryChange}>
            <option value="" selected disabled>Select Country</option>
              {this.props.countries.map(countryItem => (
                <option key={countryItem.id} value={countryItem.id}>
                    {countryItem.name}
                </option>))}
            </select>
          </div>

          <div className="row mb-2">
            <label htmlFor="currentCityId" className="col-4 mt-2">
              City:
            </label>
            <select id="currentCityId" required>
            {this.props.cities.map(cityItem => (
                <option key={cityItem.id} value={cityItem.id}>
                    {cityItem.name}
                </option>))}
            </select>
          </div>

          <div className="row mb-2">
            <label htmlFor="cellphoneNumber" className="col-4 mt-2">
              Phone:
            </label>
            <input
              id="cellphoneNumber"
              type="text"
              
              minLength="2"
              className="form-contorl col-18"
              placeholder="Enter Phone"
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
export default PersonCreate;
