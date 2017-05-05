import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0, num1: '', num2: '' };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.reset = this.reset.bind(this);
  }

  setNum1(e) {
    e.preventDefault();
    // const num1 = isNaN(parseInt(e.target.value)) ? '' : parseInt(e.target.value);
    const num1 = e.target.value ? parseInt(e.target.value) : '';
    this.setState({ num1 });
  }

  setNum2(e) {
    e.preventDefault();
    const num2 = e.target.value ? parseInt(e.target.value) : '';
    this.setState({ num2 });
  }

  add(e) {
    e.preventDefault();
    this.setState({ result: (this.state.num1 + this.state.num2) });
  }

  subtract(e) {
    e.preventDefault();
    this.setState({ result: (this.state.num1 - this.state.num2) });
  }

  multiply(e) {
    e.preventDefault();
    this.setState({ result: (this.state.num1 * this.state.num2) });
  }

  divide(e) {
    e.preventDefault();
    this.setState({ result: (this.state.num1 / this.state.num2) });
  }

  reset(e) {
    e.preventDefault();
    this.setState({ num1: '', num2: '', result: 0 });
  }

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <input type='text' value={num1} onChange={this.setNum1}></input>
        <input type='text' value={num2} onChange={this.setNum2}></input>
        <button onClick={this.add}>Add!</button>
        <button onClick={this.subtract}>Subtract!</button>
        <button onClick={this.multiply}>Multiply!</button>
        <button onClick={this.divide}>Divide!</button>
        <button onClick={this.reset}>RESET</button>
        <h1>{result}</h1>
      </div>
    );
  }
}

export default Calculator;
