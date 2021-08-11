import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current /*현재 state값을 표기*/) => ({
      count: current.count - 1,
    }));
  }; /* setState는 state를 바꾸고 render()함수를 실행시킴 */

  componentDidMount() {
    console.log(
      "Component rendered"
    ); /* 새로고침등 컴포넌트가 처음 불러와질때 */
  }
  componentDidUpdate() {
    console.log(
      "I just updated"
    ); /* 동적함수의 작동으로 페이지에 표시된 수치가 바뀔때 */
  }
  componentWillUnmount() {
    console.log(
      "Goodbye, cruel world"
    ); /* 컴포넌트의 내용이 바뀌어 새로 표시해야할때, 컴포넌트가 종료될때 */
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
