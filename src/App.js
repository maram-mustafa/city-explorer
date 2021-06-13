import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    locationData: {},
    error: false,
    cityName: "",
    displayData: false,
  };

  setCityName = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      cityName: e.target.value,
    });
  };

  getLocInfo = async (event) => {
    event.preventDefault();
    console.log(event);

    try {
      let data = await axios.get(
        `https://eu1.locationiq.com/v1/search.php?key=pk.98e8463eaa916498acdf6dae4b49820e&q=${this.state.cityName}&format=json&limit=1`
      );
      this.setState({
        locationData: data.data[0],
        error: false,
        displayData: true,
      });
    } catch {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getLocInfo}>
          <input
            type="text"
            name="cityName"
            onChange={this.setCityName}
          ></input>
          <input type="submit" name="submit" value="submit"></input>
        </form>

        {(this.state.error && <p> Error:please enter correct city name </p>) ||
          (this.state.displayData && (
            <>
              <p> Location: {this.state.locationData.display_name}</p>
              <p>Latitude : {this.state.locationData.lat}</p>
              <p>Longitude: {this.state.locationData.lon}</p>
              <img
                src={`https://maps.locationiq.com/v3/staticmap?key=pk.98e8463eaa916498acdf6dae4b49820e&center=${this.state.locationData.lat},${this.state.locationData.lon}&format=jpeg`}
              />
            </>
          ))}
      </div>
    );
  }
}

export default App;
