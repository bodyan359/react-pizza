import { combineReducers } from 'redux';

import filtersReducer from './filters';
import pizzasReducer from './pizzas';

const rootReducers = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
});



export default rootReducers;