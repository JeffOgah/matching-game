import React from "react";
import "./App.css";
import GameBoard from "./GameBoard.js";
import camera from "./images/camera.png";
import idea from "./images/idea.png";
import locked from "./images/locked.png";
import music from "./images/music.png";
import pin from "./images/pin.png";
import radio from "./images/radio.png";
import star from "./images/star.png";
import disc from "./images/disc.png";
import github from "./images/github.svg";
import twitter from "./images/twitter.svg";
import linkedin from "./images/linkedin.svg";
import restart from "./images/restart.svg";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: createGame(),
      check: [],
      found: [],
      display: Array(16).fill("invisible"),
      timer: 0,
      moves: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
    this.newGame = this.newGame.bind(this);
  }
  checkMatch(a, b) {
    let matched = a[0] === b[0];
    let arr = [...this.state.found];
    let temp = [...this.state.display];
    if (matched) {
      temp[a[1]] = temp[b[1]] = "visible";
      arr = arr.concat(a[0], b[0]);
    } else {
      temp[a[1]] = temp[b[1]] = "invisible";
    }
    this.setState({
      check: [],
      display: temp,
      found: arr,
      moves: this.state.moves + 1
    });
  }

  handleClick(value, index) {
    //Flip card on click
    let temp = [...this.state.display];
    temp[index] = "visible";

    let arr = [...this.state.check];
    if (arr.length === 1 && arr[0].includes(index)) {
    } else {
      if (this.state.found.includes(value)) {
      } else {
        arr.push([value, index]);
      }
    }
    setTimeout(() => {}, 1000);
    this.setState({
      check: arr,
      display: temp
    });
    setTimeout(() => {
      if (this.state.check.length === 2) {
        this.checkMatch(this.state.check[0], this.state.check[1]);
      }
    }, 200);
  }
  newGame() {
    this.setState({
      board: createGame(),
      check: [],
      found: [],
      display: Array(16).fill("invisible"),
      timer: 0,
      moves: 0,
      disc
    });
  }
  render() {
    let checkWin = [];
    if (this.state.found.length === 2) {
      checkWin.push(<div className="you-win">You Win!</div>);
      console.log(checkWin);
    }
    return (
      <div className="app m-auto bg-light p-3">
        <h2 className="text-center mb-3">Matching Game</h2>
        <div className="d-flex justify-content-around my-3">
          <span>Moves: {this.state.moves}</span>
          <span>{this.state.timer}</span>
          <span onClick={this.newGame}>
            <img
              className="icon"
              src={restart}
              alt="restart"
            />
          </span>
        </div>
        <GameBoard
          board={this.state.board}
          onclick={this.handleClick}
          display={this.state.display}
        />
        {checkWin}
        <div className="text-center">
          <p className="m-0 mt-2">Made by Jeff</p>
          <span>
            <a
              href="https://github.com/jeffogah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon mx-1" src={github} alt="github" />
            </a>
          </span>
          <span>
            <a
              href="https://twitter.com/jeff_ogah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon mx-1" src={twitter} alt="twitter" />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/jeffrey-ogah-55472216a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon mx-1" src={linkedin} alt="linkedin" />
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default App;

const createGame = () => {
  const x = [camera, idea, locked, music, pin, radio, star, disc];
  const arr = [...x, ...x];
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
};
