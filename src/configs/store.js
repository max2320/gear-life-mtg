import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../ducks/reducers';

let middlewares = compose(
  applyMiddleware(thunk)
);

if(window.__REDUX_DEVTOOLS_EXTENSION__){
   middlewares = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const store = createStore(
  reducers,
  middlewares
);

export default store;
