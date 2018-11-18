import React, { Component } from "react";

class Test extends Component {
  //當父組件的Render函數被運行時，他的子組件的Redner都會被重新執行
  render() {
    return <div>{this.props.content}</div>;
  }
}

export default Test;
