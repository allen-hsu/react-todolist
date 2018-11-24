// import { createStore, applyMiddleware, compose } from "redux";
// import reducer from "./reducer";
// import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
// import todoSagas from "./sagas";
// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//   : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(sagaMiddleware)
//   //applyMiddleware(thunk)
//   // other store enhancers if any
// );

// const store = createStore(reducer, enhancer);
// sagaMiddleware.run(todoSagas);
// export default store;

import { createStore } from "redux";
import reducer from "./reducer";
const store = createStore(reducer);
export default store;
