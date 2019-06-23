import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';

class GameWin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        
          <ModalBody>
            <div className="">
                You Win!
            </div>
            <Button color="primary" onClick={this.props.newgame}>New game</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default GameWin;