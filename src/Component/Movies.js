import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  state = {
    error: "",
    moviesData: [],
  };

  getLocInfo = (e) => {
    e.preventDefault();
    let cityName = e.target.cityName.value;

    let serverURL = process.env.REACT_APP_SERVER;
    let movieURL = `${serverURL}/movies?searchQuery=${cityName}`;

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
          <input  className='input-area' type="text" name="cityName" />
          <input  className='btn btn-primary' type="submit" name="submit" value="submit" />
        </form>
        <>
          {this.state.moviesData.map((item) => {
            return (
              <figure>
                <img src={item.img} />
                <figcaption>{item.title}</figcaption>
              </figure>
            );
          })}
        </>
      </div>
    );
  }
}
