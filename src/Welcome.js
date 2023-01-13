import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  static defaultProps = {
    // here defaultProps is a special keyword we must use.
    name: "stranger",
  };

  render() {
    return (
      <div className="welcome">
        <p>Welcome, {this.props.name}!</p>
        <p>
          {this.props.age > 18 &&
          this.props.age < 65 &&
          this.props.name === "John" ? (
            <Age age={this.props.age} />
          ) : (
            ""
          )}
        </p>
        {/* Second Way John */}
        {/* {this.props.age > 18 &&
          this.props.age < 65 &&
          this.props.name === "John" && <Age age={this.props.age} />}
        {!this.props.age && ""} */}
      </div>
    );
  }
}
