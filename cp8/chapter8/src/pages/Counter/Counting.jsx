import { Component } from "react";

class Counting extends Component {
  state = {
    count: this.props.startNumber,
    merdeka: true,
  };

  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          backgroundColor: "yellow",
        }}
      >
        <div>Counting</div>
        <div>{this.state.count}</div>
        <div>{this.state.merdeka.toString()}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              merdeka: !this.state.merdeka,
            });
          }}
        >
          Tambah
        </button>
      </div>
    );
  }
}

export default Counting;
