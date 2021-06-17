import React from "react";
import Movies from "./Component/Movies";
import Weather from "./Component/Weather";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body-content">
          <Weather className="first" />
          <Movies className="second"/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
