import React, { Component } from "react";
import axios from "axios";

export default class Weather extends Component {
  state = {
    locationData: "",
    error: "",
  };

  getLocInfo = (e) => {
    e.preventDefault();
    let cityName = e.target.cityName.value;

    let serverURL = process.env.REACT_APP_SERVER;
    let url = `${serverURL}/weather?searchQuery=${cityName}`;

    axios
      .get(url)
      .then((data) => {
        this.setState({ locationData: data.data[0], error: "" });
      })
      .catch((error) => {
        this.setState({ error: "There is an error" });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getLocInfo}>
          <input className='input-area' type="text" name="cityName" />
          <input  className='btn btn-primary' type="submit" name="submit" value="submit" />
        </form>

        {this.state.error ? (
          <p>error: {this.state.error}</p>
        ) : (
          this.state.locationData && (
            <>
              <p>description : {this.state.locationData.description}</p>
              <p>datetime : {this.state.locationData.datetime}</p>
            </>
          )
        )}
      </div>
    );
  }
}
