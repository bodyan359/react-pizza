import axios from 'axios';
 
export const setLoading = (payload) => ({
    type: 'SET_LOADING',
    payload,
});

// async action
export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch({
        type: 'SET_LOADING',
        payload: false,
      });
    
      axios
        .get(
          `http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${
            sortBy.type
          }&_order=${sortBy.order}`,
        )
        .then(({ data }) => {
          dispatch(setPizzas(data));
        });
};


// for save pizzas
export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});