import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>Welcome Sharath</div>
    ) : (
      <div>Welcome Guest</div>
    );
    // let Message;
    // if (this.state.isLoggedIn) {
    //   Message = <div>Welcome Sharath</div>;
    // } else {
    //   Message = <div>Welcome Guest</div>;
    // }
    // return <div>{Message}</div>;
    // return (
    //   <div>
    //     <div>Welcome Sharath</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
