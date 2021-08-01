import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

import PersonTable from "./PersonTable";
import PersonDetails from "./PersonDetails";
import PersonCreate from "./PersonCreate";
import PersonWarningMessage from "./PersonWarningMessage";

import CountryTable from "./CountryTable";
import CountryCreate from "./CountryCreate";
import CountryMessageTag from "./CountryMessageTag";
import CountryWarningMessage from "./CountryWarningMessage";

import CityTable from "./CityTable";
import CityCreate from "./CityCreate";
import CityMessageTag from "./CityMessageTag";
import CityWarningMessage from "./CityWarningMessage";


import getPersons, {
  getPersonById,
  createPerson,
  deletePerson,

  getCountries,
  getCountryById,
  createCountry, 
  deleteCountry,
  
  getCities,
  getCityById,
  createCity,
  deleteCity,
} from "../api/personApi";



class App extends Component {
  state = {
    personList: [],
    createPerson: false,
    detailsPerson: null,
    personWarningMessage: false,

    countryList: [],
    createCountry: false,
    countryTable: false,
    countryMessageTag: false,
    countryWarningMessage: false,
        
    allCitiesList: [],
    cityList: [],
    createCity: false,
    cityTable: false,
    cityMessageTag: false,
    cityWarningMessage: false,

    personId: 0,
    countryId: 0,
    cityId: 0,
 };


  componentDidMount() {
    const _this = this;

    getPersons().then((persons) => {
      _this.setState({ personList: persons });
    });

    getCountries().then((countries) => {
      _this.setState({ countryList: countries });
    });

    getCities().then((cities) => {
      _this.setState({ allCitiesList: cities });
    });
  }


  handleCountryChange = (event) => {
    const countryCitiesList = this.state.allCitiesList.filter( 
          city => city.stateId.toString() === event.target.value.toString()
        );

    this.setState({cityList : countryCitiesList });
  };


  closePartialDiv = () => {
    this.setState({
      detailsPerson: null,
      createPerson: false,
      personWarningMessage: false,

      createCountry: false,
      countryTable: false,
      countryMessageTag: false,
      countryWarningMessage: false,

      createCity: false,
      cityTable: false,
      cityMessageTag: false,
      cityWarningMessage: false, 
    });
  };



  //---------------Person------------------
  findPerson = async (id) => {
    return await getPersonById(id);
  };


  showCreatePerson = () => {
    this.setState({
      createPerson: true,
    });
  };


  showPerson = async (id) => {
    const person = await this.findPerson(id);
    if (person != null) {
      this.setState({
        detailsPerson: person,
      });
    }
  };


  showPersonMessage = (id) => {
    this.setState({
      personId: id,
      detailsPerson: null,
      personWarningMessage: true, 
    });
  };


  closePersonMessage = async () =>{
    this.setState({   
      personWarningMessage: false,
      detailsPerson:  await this.findPerson(this.state.personId),
    });
  }


  closeDetails = () => {
    this.setState({
      detailsPerson: null,
    });
  };


  addPerson = async (person) => {
    const personList = this.state.personList;
    person = await createPerson(person);

    if (person !== undefined) {     
      personList.push(person);
    }

    this.setState({
      personList: personList,
      createPerson: false,
    });
  };


  deletePersonHandler = () => {
    const person = this.findPerson(this.state.personId);
    if (person != null) {
      if (deletePerson(this.state.personId)) {
        const persons = this.state.personList;

        for (let index = 0; index < persons.length; index++) {
          if (persons[index].id === this.state.personId) {
            persons.splice(index, 1);
          }
        }

        this.setState({
          personList: persons,
          detailsPerson: null,
          personWarningMessage: false,
        });
      }
    }
  };



  //---------------Country------------------
  findCountry = async (id) =>{
    return await getCountryById(id); 
  }


  showCreateCountry = () => {
    this.setState({
      countryTable: false,
      createCountry: true,
    });
  };


  showCountryTable = () => {
    this.setState({
      countryTable: true,
    });
  };


  showCountryMessage = (id) => {
    this.setState({
      countryId: id,
      countryTable: false,
      countryWarningMessage: true, 
    });
  };


  closeCountryMessage = () => {
    this.setState({     
      countryMessageTag: false,
      countryTable: true,
    });
  };


  addCountry = async (country) => {
    const countryList = this.state.countryList;
    country = await createCountry(country);

    if (country !== undefined) {     
      countryList.push(country);
    }

    this.setState({
      countryList: countryList,
      createCountry: false,
    });
  };


  deleteCountryHandler = () => {
    const country = this.findCountry(this.state.countryId);
    let countryIsBindedToAPerson = false;
    let countryIsBindedToACity = false;

    if ((this.state.personList != null) && (country != null)) {
      for (let index = 0; index < this.state.personList.length; index++) {
        if (Number(this.state.personList[index].personStateId) === this.state.countryId) {
          countryIsBindedToAPerson = true;
          break;
        }
      }
    }

    if ((this.state.allCitiesList != null) && (country != null)) {
      for (let index = 0; index < this.state.allCitiesList.length; index++) {
        if (Number(this.state.allCitiesList[index].stateId) === this.state.countryId) {
          countryIsBindedToACity = true;
          break;
        }
      }
    }

    if ((countryIsBindedToAPerson === true) || (countryIsBindedToACity !== true)) {
      if (deleteCountry(this.state.countryId)) {
        const countries = this.state.countryList;

        for (let index = 0; index < countries.length; index++) {
          if (countries[index].id === this.state.countryId) {
            countries.splice(index, 1);
          }
        }

        this.setState({
          countryList: countries,
          countryTable: true,
          countryMessageTag: false,
        });
      }
    }
    else{
          this.setState({
          countryTable: false,
          countryMessageTag: true,
    });
    }
  };



  //---------------City------------------
  findCity = async (id) =>{
    return await getCityById(id); 
  }


  showCreateCity = () => {
    this.closePartialDiv();
    this.setState({ createCity: true, });
  };

  
  showCityTable = (id) => {
    const countryCitiesList = this.state.allCitiesList.filter( city => city.stateId === id);
    this.setState({ cityList : countryCitiesList });
    this.closePartialDiv();
    this.setState({ cityTable: true, });
  };


  showCityMessage = (id) => {
    this.setState({
      cityId: id,
      cityTable: false,
      cityWarningMessage: true, 
    });
  };


  closeCityMessage = () => {
    this.setState({     
      cityMessageTag: false,
      cityTable: true,
    });
  };


  addCity = async (city) => {
    const cityList = this.state.cityList;
    city = await createCity(city);

    if (city !== undefined) {     
      cityList.push(city);
    }

    this.setState({
      cityList: cityList,
      createCity: false,
    });
  };


  deleteCityHandler = () => {
    const city = this.findCity(this.state.cityId);
    let cityIsBinded = false;

    if ((this.state.personList != null) && (city != null)) {
      for (let index = 0; index < this.state.personList.length; index++) {
        if (Number(this.state.personList[index].personCityId) === this.state.cityId) {
          cityIsBinded = true;
          break;
        }
      }
    }

    if ((city != null) && (cityIsBinded !== true)) {
      if (deleteCity(this.state.cityId)) {
        const cities = this.state.allCitiesList;

        for (let index = 0; index < cities.length; index++) {
          if (cities[index].id === this.state.cityId) {
            cities.splice(index, 1);
          }
        }

       const resultingCityList = this.state.cityList.filter( city => city.id !== this.state.cityId);

        this.setState({ 
          cityList: resultingCityList,
          cityTable: true,
          cityMessageTag: false, 
        });
      }
    }
    else{
          this.setState({
          cityTable: false,
          cityMessageTag: true,
    });
    }
  };


  
  render() {  
    const sideElement =
    this.state.detailsPerson != null ? (
      <PersonDetails 
        person={this.state.detailsPerson} 
        closeDetails={this.closeDetails} 
        warningMessage={this.showPersonMessage} 
      />
      ) : this.state.createPerson ? (
      <PersonCreate 
        cities={this.state.cityList} 
        countries={this.state.countryList} 
        addPerson={this.addPerson}         
        handleCountryChange={this.handleCountryChange}
        closeCreate={this.closePartialDiv} 
      />
      ) : this.state.personWarningMessage ? (
      <PersonWarningMessage 
        closeMessage={this.closePersonMessage}
        deletePerson={this.deletePersonHandler}        
      />
      ): this.state.createCountry ? (
      <CountryCreate 
        addCountry={this.addCountry} 
        closeCreate={this.closePartialDiv} 
      />
      ): this.state.countryTable ? (
      <CountryTable 
        cities={this.state.citiesList} 
        countries={this.state.countryList}   
        addCity={this.addCity}
        addCountry={this.addCountry} 
        showCityTable={this.showCityTable}
        showCreateCity={this.showCreateCity}
        showCreateCountry={this.showCreateCountry} 
        closeTable={this.closePartialDiv} 
        countryWarningMessage={this.showCountryMessage}
      />
      ) : this.state.countryMessageTag ? (
      <CountryMessageTag 
        closeMessage={this.closeCountryMessage}          
      />
      ) : this.state.countryWarningMessage ? (
      <CountryWarningMessage 
        deleteCountry={this.deleteCountryHandler}  
        closeMessage={this.closeCountryMessage}            
      />  
      ) : this.state.createCity ? (
      <CityCreate         
        addCity={this.addCity} 
        closeCreate={this.closePartialDiv} 
        countries={this.state.countryList}   
      />          
      ): this.state.cityTable ? (
      <CityTable
        cities={this.state.cityList} 
        addCity={this.addCity} 
        showCreateCity={this.showCreateCity}
        closeTable={this.closePartialDiv} 
        cityWarningMessage={this.showCityMessage}
      />           
      ) : this.state.cityMessageTag ? (
      <CityMessageTag 
        closeMessage={this.closeCityMessage}          
      />
      ) : this.state.cityWarningMessage ? (
      <CityWarningMessage  
        deleteCity={this.deleteCityHandler}  
        closeMessage={this.closeCityMessage}            
      />
      ) : (
      <div margin className="col-md-4">
        <button onClick={this.showCreatePerson} className="mr-2 btn btn-success" >
           Add Person
        </button>

        <button onClick={this.showCountryTable} className="mr-2 btn btn-success">
           Countries and Cities
        </button>
      </div>
    );
    

    return (
      <React.Fragment>
        <Header />
        <div className="container stay-clear">

          <h3>People SPA</h3>
          <hr />
          <div className="row">
            <PersonTable persons={this.state.personList} showPerson={this.showPerson} />
            {sideElement}
          </div>
          
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}


export default App;