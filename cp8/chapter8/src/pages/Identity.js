import { Component } from "react";

class Identity extends Component {
  // kita hit ke backend dulu get user detail
  // setelah dapat response user detail
  // tampilkan dalam screen

  render() {
    return (
      <>
        <div>Identity Section</div>
        <div>{this.props.user.name}</div>
        <div>{this.props.user.address}</div>
      </>
    );
  }
}

export default Identity;
