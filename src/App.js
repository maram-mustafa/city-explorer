import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    locationData: "",
    error: "",
  };

  getLocInfo = async (e) => {
    e.preventDefault();
    let cityName = e.target.cityName.value;

    let serverURL = process.env.REACT_APP_SERVER;
    let url = `${serverURL}/weather?lat=-33.87&lon=151.21&searchQuery=${cityName}`;

    try {
      let data = await axios.get(url);
      this.setState({ locationData: data.data[0], error: "" });
      console.log(this.state.locationData);
    } catch {
      this.setState({ error: "There is an error" });
    }
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.getLocInfo}>
          <input type="text" name="cityName" />
          <input type="submit" name="submit" value="submit" />
        </form>

        {/* if there is an erroror it will show me the erroror only, otherwise if there is data i will show the paragraphes and the image */}

        {this.state.error ? (
          <p>error: {this.state.error}</p>
        ) : (
          this.state.locationData && (
            <>
              <p>app_max_temp : {this.state.locationData.app_max_temp}</p>
              <p>app_min_temp : {this.state.locationData.app_min_temp}</p>
              <p>clouds : {this.state.locationData.clouds}</p>
            </>
          )
        )}
      </div>
    );
  }
}

export default App;
