import axios from "axios";


export default function getPersons() {
  return fetch("https://localhost:44347/api/React/")
        .then((data) => data.json());
}


export async function getCountries() {
  return fetch("https://localhost:44347/api/Country/")
        .then((data) => data.json());
}


export async function getCities() {
  return fetch("https://localhost:44347/api/City/")
        .then((data) => data.json());
}


export async function getPersonById(id) {
  try {
    let response = await fetch("https://localhost:44347/api/React/" + id);
    let json = await response.json();
    return json;
  } catch (e) {
    console.log("Error", e);
  }
}


export async function getCityById(id) {
  try {
    let response = await fetch("https://localhost:44347/api/City/" + id);
    let json = await response.json();
    return json;
  } catch (e) {
    console.log("Error", e);
  }
}


export async function getCountryById(id) {
  try {
    let response = await fetch("https://localhost:44347/api/Country/" + id);
    let json = await response.json();
    return json;
  } catch (e) {
    console.log("Error", e);
  }
}


//Properties must match createPerson
export async function createPerson(person) {
  console.log("Api create", person);
  try {
    let response = await axios.post("https://localhost:44347/api/Person/", {
      FirstName: person.FirstName,
      LastName: person.LastName,
      CityId: person.CurrentCityId,
      CellphoneNumber: person.CellphoneNumber
    });

    let json = await response.data;
    return json;
  } catch (e) {
    console.log("Error", e);
  }
}


//Properties must match createPerson
export async function createCountry(country) {
  console.log("Api create", country);
  try {
    let response = await axios.post("https://localhost:44347/api/Country/", {
      Name: country.Name,
    });

    let json = await response.data;
    return json;
  } catch (e) {
    console.log("Error", e);
  }
}


//Properties must match createPerson
export async function createCity(city) {
  console.log("Api create", city);
  try {
    let response = await axios.post("https://localhost:44347/api/City/", {
      CityName: city.CityName,
      StateId: city.StateId,
    });

    let json = await response.data;
    return json;
  } catch (e) {
    console.log("Error", e);
  }
}


export async function deletePerson(id) {
  try {
    let response = await axios.delete("https://localhost:44347/api/React/" + id);
    console.log(response);
    return true;
  } catch (e) {
    console.log("Error!", e);
    return false;
  }
}


export async function deleteCity(id) {
  try {
    let response = await axios.delete("https://localhost:44347/api/City/" + id);
    console.log(response);
    return true;
  } catch (e) {
    console.log("Error!", e);
    return false;
  }
}

export async function deleteCountry(id) {
  try {
    let response = await axios.delete("https://localhost:44347/api/Country/" + id);
    console.log(response);
    return true;
  } catch (e) {
    console.log("Error!", e);
    return false;
  }
}

