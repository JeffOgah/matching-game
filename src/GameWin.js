import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import good from "./images/star.png";
import bad from "./images/dark-star.svg";
class GameWin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    let rate = [];
    const temp = "good "
      .repeat(this.props.rating)
      .concat("bad ".repeat(3 - this.props.rating));
    let stars = temp.split(" ");
    let check;
    for (let i = 0; i < 3; i++) {
      check = String(stars[i])==="good"? good : bad;
      rate.push(<img className="icon" src={check} alt={stars[i]} key={i}/>);
     }
      return (
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalBody>
              <div className="text-center mb-4">
                <h3 className="text-center">You Win!</h3>
                {rate}
                <div className="d-flex justify-content-around">
                  <span>Moves: {this.props.moves}</span>
                  <span>
                    Time:
                    {` ${"0"
                      .concat(String(this.props.time[0]))
                      .slice(-2)} : ${"0"
                      .concat(String(this.props.time[1]))
                      .slice(-2)}`}
                  </span>
                </div>
              </div>
              <Button color="primary" onClick={this.props.newgame}>
                New game
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalBody>
          </Modal>
        </div>
      );
    }
}
export default GameWin;
