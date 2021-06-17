import React from "react";
import Main from "./Component/Main";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body-content">
          <Main className="first" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
