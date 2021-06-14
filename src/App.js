import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    locationData: "",
    error: "",
  };

  getInfo = async (e) => {
    e.preventDefault();
    let cityName = e.target.cityName.value;

    try {
      let data = await axios.get(
        `https://eu1.locationiq.com/v1/search.php?key=pk.98e8463eaa916498acdf6dae4b49820e&q=${cityName}&format=json&limit=1`
      );
      this.setState({ locationData: data.data[0], error: "" });
    } catch {
      this.setState({ error: "There is an error" });
    }
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.getInfo}>
          <input type="text" name="cityName" />
          <input type="submit" name="submit" value="submit" />
        </form>

        {/* if there is an erroror it will show me the erroror only, otherwise if there is data i will show the paragraphes and the image */}

        {this.state.error ? (
          <p className="error">erroror: {this.state.error}</p>
        ) : (
          this.state.locationData && (
            <>
              <p>Location: {this.state.locationData.display_name}</p>
              <p>Latitude: {this.state.locationData.lat}</p>
              <p>Longitude: {this.state.locationData.lon}</p>
              <img
                src={`https://maps.locationiq.com/v3/staticmap?key=pk.98e8463eaa916498acdf6dae4b49820e&center=${this.state.locationData.lat},${this.state.locationData.lon}&size=500x200&zoom=15&format=jpeg`}
                alt="map"
              />
            </>
          )
        )}
      </div>
    );
  }
}

export default App;
