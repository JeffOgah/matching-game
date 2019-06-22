import React from "react";
import "./App.css";
import GameBoard from "./GameBoard.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: createGame(),
      check: [],
      match: [],
      display: Array(16).fill(false)
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(value,index) {
    let temp = [...this.state.display];
    temp[index] = true;
    let arr = [...this.state.check];
    let matched = false;
    arr = arr.concat(value);
    if (arr.length > 2) {
      arr = arr.slice(-1);
    }
    if (arr.length === 2) {
      matched = arr[0] === arr[1] ? true : false;
    }
    this.setState({
      check: arr,
      match: this.state.match.concat(matched),
      display: temp
    });
  }
  
  render() {
    // console.log(this.state.check, this.state.match)
    // console.log(this.state.display)
    return (
      <div className="App">
        <GameBoard
          board={this.state.board}
          onclick={this.handleClick}
          display={this.state.display}
        />
      </div>
    );
  }
}

export default App;

const createGame = () => {
  const x = [1, 2, 3, 4, 5, 6, 7, 8];
  const arr = [...x, ...x];
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
};
