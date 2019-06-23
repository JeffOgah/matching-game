import React from "react";
import "./App.css";
import GameBoard from "./GameBoard.js";
import GameWin from "./GameWin.js";
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
      win: "",
      display: Array(16).fill("invisible"),
      timer: [0, 0],
      moves: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
    this.newGame = this.newGame.bind(this);
    this.handleWin = this.handleWin.bind(this);
    this.tick = this.tick.bind(this);
  }

  tick() {
    let sec = this.state.timer[1];
    let min = this.state.timer[0];
    sec++;
    if (sec === 60) {
      min++;
      sec = 0;
    }
    this.setState({
      timer: [min, sec]
    });
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
    if (this.state.found.length === 2) {
      this.handleWin()
    }
  }

  handleClick(value, index) {
    //Check if timer is 0 and start coundown
    if (this.state.timer[0] === 0 && this.state.timer[1] === 0) {
      this.timeID = setInterval(() => {
        this.tick();
      }, 1000);
    }

    //Flip card on click
    let temp = [...this.state.display];
    temp[index] = "visible";

    //Hold value of clicked cards to compare
    let arr = [...this.state.check];
    if (arr.length === 1 && arr[0].includes(index)) {
    } else {
      if (this.state.found.includes(value)) {
      } else {
        arr.push([value, index]);
      }
    }

    //timeout to prevent async calls on click
    setTimeout(() => {}, 1000);
    this.setState({
      check: arr,
      display: temp
    });

    //compare cards when two consecutive are open
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
      win: "",
      display: Array(16).fill("invisible"),
      timer: [0, 0],
      moves: 0
    });
    clearInterval(this.timeID);
  }

  handleWin() {
    clearInterval(this.timeID);
    this.setState({
      win: <GameWin newgame={this.newGame}/>
    })
    
  }
  render() {
    return (
      <div className="app m-auto bg-light p-3">
        <h2 className="text-center mb-3">Matching Game</h2>
        <div className="d-flex justify-content-around my-3">
          <span>Moves: {this.state.moves}</span>
          <span>{`${"0"
            .concat(String(this.state.timer[0]))
            .slice(-2)} : ${"0"
            .concat(String(this.state.timer[1]))
            .slice(-2)}`}</span>
          <span onClick={this.newGame}>
            <img className="icon" src={restart} alt="restart" />
          </span>
        </div>
        <GameBoard
          board={this.state.board}
          onclick={this.handleClick}
          display={this.state.display}
        />
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
        {this.state.win}
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
