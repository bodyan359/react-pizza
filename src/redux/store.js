import { createStore } from 'redux';
import rootReducers from './reducers';

const store = createStore(
    rootReducers, /* preload state */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store;