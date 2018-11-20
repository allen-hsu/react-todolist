import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) return true;
    return false;
  }
  render() {
    const { content } = this.props;
    return <div onClick={this.handleClick}>{content}</div>;
  }
  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }

  // 一個組件要從父組建接受了參數
  // 只要父組件的Render函數被重新執行了，子組件的這個生命函數就會被執行
  // 如果這個組件第一次存在於父組件中，不會被執行。
  // 如果這個組件之前就已經存在於父組件中，才會執行。
  componentWillReceiveProps() {
    console.log("child componentWillReceiveProps");
  }

  //當組件即將被從這個頁面中移除的時候執行
  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
};

TodoItem.defaultProps = {
  test: "hello world"
};

export default TodoItem;
