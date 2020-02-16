import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../lib/reducers';
let middlewares;
if(window.__REDUX_DEVTOOLS_EXTENSION__){
   middlewares = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  middlewares = compose(
    applyMiddleware(thunk)
  );
}


const store = createStore(
  reducers,
  middlewares
);

export default store;
