import React, {Component} from 'react';

class Button extends Component {
  showAlert() {
    console.log('ciao');
  }



  render() {
    return (
      <div>
        <button onClick={this.showAlert}>{this.props.children}</button>
      </div>
    );
  }
}
export default Button;
