import React from "react";
import Movies from "./Component/Movies";
import Weather from "./Component/Weather";

class App extends React.Component {
  render() {
    return (
      <div>
        <Weather />
        <Movies />
      </div>
    );
  }
}

export default App;
