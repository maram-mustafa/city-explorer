import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    locationData: "",
    error: "",
  };

  getLocInfo = async (event) => {
    event.preventDefault();
    let cityName = event.target.cityName.value;
    console.log(event);

    try {
      let data = await axios.get(
        "https://eu1.locationiq.com/v1/search.php?key=pk.98e8463eaa916498acdf6dae4b49820e	&q=Amman&format=json"
      );
      this.setState({ locationData: data.data[0], error: "" });
    } catch {
      this.setState({ error: "ERROR!!!" });
    }
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" name="cityName"></input>
          <input type="submit" name="submit" onSubmit={this.getLocInfo}></input>
        </form>

        {this.state.error ? (
          <p> Error: {this.state.error}</p>
        ) : (
          this.state.locationData && (
            <>
              <p> Location: {this.state.locationData.display_name}</p>
              <p>Latitude : {this.state.locationData.let}</p>
              <p>Longitude: {this.state.locationData.lon}</p>
            </>
          )
        )}
      </div>
    );
  }
}

export default App;
