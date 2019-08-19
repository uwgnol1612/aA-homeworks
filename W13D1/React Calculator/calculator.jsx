import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //your code here
    this.state = {num1: "", num2: "", result: 0};

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }


  //your code here

  render(){
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input onChange = {this.setNum1} value = {num1}></input>
        <input onChange = {this.setNum2} value = {num2}></input>
        <button onClick={this.clear}>Clear</button>
        <br />
        <button onClick = {this.add}>+</button>
        <button onClick = {this.minus}>-</button>
        <button onClick = {this.multiply}>*</button>
        <button onClick = {this.divide}>/</button>
      </div>
    );
  }

  add(e) {
    e.preventDefault();
    let result = this.state.num1 + this.state.num2;
    this.setState({result});
  }

  minus(e) {
    e.preventDefault();
    let result = this.state.num1 - this.state.num2;
    this.setState({ result });

  }

  multiply(e) {
    e.preventDefault();
    let result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  divide(e) {
    e.preventDefault();
    let result = this.state.num1 / this.state.num2;
    this.setState({ result });

  }

  setNum1(e) {
    if (e.target.value) {
      const num1 = parseInt(e.target.value)
      this.setState({num1})
    } else {
      this.setState({num1: ""})
    }

  }

  setNum2(e) {
    if (e.target.value) {
      const num2 = parseInt(e.target.value)
      this.setState({ num2 })
    } else {
      this.setState({ num2: "" })
    }

  }

  clear(e) {
    e.preventDefault();
    this.setState({ num1: "", num2: "", result: 0 });
  }
}

export default Calculator;
