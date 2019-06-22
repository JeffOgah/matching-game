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
    this.checkMatch = this.checkMatch.bind(this);
  }
  checkMatch(a, b) {
    let matched = a[0] === b[0];
    let temp = [...this.state.display];
    if (matched) {
      temp[a[1]] = true;
      temp[b[1]] = true;
    } else {
      temp[a[1]] = false;
      temp[b[1]] = false;
    }
    this.setState({
      check: [],
      display: temp
    });
  }

  handleClick(value, index) {
    //Flip card on click
    let temp = [...this.state.display];
    temp[index] = true;

    let arr = [...this.state.check];
    if (arr.length === 1 && arr[0].includes(index)) {
    } else {
      arr.push([value, index]);
    }

    this.setState({
      check: arr,
      display: temp
    });
    setTimeout(() => {
      if (this.state.check.length === 2) {
        this.checkMatch(this.state.check[0], this.state.check[1]);
      }
    }, 500);
  }

  render() {
    return (
      <div className="app container-fluid ">
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
  const x = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const arr = [...x, ...x];
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
};
