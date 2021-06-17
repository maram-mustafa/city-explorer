import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import WeatherDay from "./WeatherDay";

export default class Main extends Component {
  state = {
    locationData: "",
    error: "",
    moviesData: "",
  };

  getLocInfo = (e) => {
    e.preventDefault();
    let cityName = e.target.cityName.value;

    let serverURL = process.env.REACT_APP_SERVER;
    let url = `${serverURL}/weather?searchQuery=${cityName}`;
    let movieURL = `${serverURL}/movies?searchQuery=${cityName}`;

    axios
      .get(url)
      .then((data) => {
        this.setState({ locationData: data.data[0], error: "" });
      })
      .catch((error) => {
        this.setState({ error: "There is an error" });
      });

    axios
      .get(movieURL)
      .then((data) => {
        this.setState({ moviesData: data.data, error: "" });
        console.log(this.state.moviesData);
      })
      .catch((error) => {
        this.setState({ error: "There is an error" });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getLocInfo}>
          <input className="input-area" type="text" name="cityName" />
          <input
            className="btn btn-primary"
            type="submit"
            name="submit"
            value="submit"
          />
        </form>
        <WeatherDay
          locationData={this.state.locationData}
          error={this.state.error}
        />

        <Movie moviesData={this.state.moviesData} error={this.state.error} />
        {/* {this.state.error ? (
          <p>error: {this.state.error}</p>
        ) : (
          this.state.locationData && (
            <>
              <p>description : {this.state.locationData.description}</p>
              <p>datetime : {this.state.locationData.datetime}</p>
            </>
          )

        )} */}
      </div>
    );
  }
}
