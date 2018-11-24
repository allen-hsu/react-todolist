import React, { Component } from "react";
import { connect } from "react-redux";

const TodoList = props => {
  const {
    inputValue,
    changeInputValue,
    handleClick,
    handleItemDelete,
    list
  } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              onClick={() => {
                handleItemDelete(index);
              }}
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
// class TodoList extends Component {
//   render() {
//     const {
//       inputValue,
//       changeInputValue,
//       handleClick,
//       handleDelete,
//       list
//     } = this.props;
//     return (
//       <div>
//         <div>
//           <input value={inputValue} onChange={changeInputValue} />
//           <button onClick={handleClick}>提交</button>
//         </div>
//         <ul>
//           {list.map((item, index) => {
//             return (
//               <li onClick={handleDelete} key={index}>
//                 {item}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

const mapStateToProps = (state, ownProps) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

//store.dispatch, props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeInputValue(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: "add_todo_item"
      };
      dispatch(action);
    },
    handleItemDelete(index) {
      const action = {
        type: "delete_todo_item",
        value: index
      };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
