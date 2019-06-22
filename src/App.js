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

  checkMatch() {
    let matched = this.state.check[0][0] === this.state.check[1][0] ? true : false;

    if (this.state.match === true) {
      console.log(this.state.match);
    }
  }

  handleClick(value, index) {
    //Flip card on click
    let temp = [...this.state.display];
    temp[index] = true;

    let arr = [...this.state.check];

    arr.push([value, index]);
    if (arr.length > 2) {
      arr = arr.slice(-1);
    }
    this.setState({
      check: arr,
      display: temp
    });
    if (this.state.check.length === 2) {
      this.checkMatch();
    }
  }

  render() {
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
