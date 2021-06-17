import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    return (
      <div>
        <>
          {/* {console.log("movie")}; */}
          {this.props.moviesData &&
            this.props.moviesData.map((item) => {
              console.log(this.props.moviesData);
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
