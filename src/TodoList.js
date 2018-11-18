import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    //當組件的state or props發生改變的時候 render 函數就會重新執行
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">輸入內容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      );
      // return (
      //   <li
      //     key={index}
      //     onClick={this.handleItemDelete.bind(this, index)}
      //     dangerouslySetInnerHTML={{ __html: item }}
      //   />
      // );
    });
  }
  handleInputChange(e) {
    //異步 setState
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));

    // this.setState(() => {
    //   return {
    //     inputValue: e.target.value
    //   };
    // });
    //舊的寫法
    // this.setState({
    //   inputValue: e.target.value
    // });
  }
  handleBtnClick() {
    //prevState 是上一次的狀態
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }));
    // this.setState({
    //   //...this.state.list 展開運算符，會把舊有的數據Clone一份
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ""
    // });
  }
  handleItemDelete(index) {
    //immutable
    //state不允許我們做任何的改變

    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
    //舊的方法
    //immutable
    //state不允許我們做任何的改變
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list: list
    // });
    // console.log(index);
  }
}

export default TodoList;