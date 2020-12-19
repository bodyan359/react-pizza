import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { Header } from './components';
import { Home, Cart } from './pages';
import { useDispatch } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
      <Route path="/" component={Home} exact/>
      <Route path="/cart" component={Cart} exact/> 
      </div>
    </div>
    );
  }
  
export default App;
  
// export default connect(
//   (state) => {
//     return {
//       items: state.pizzas.items,
//       filters: state.filters,
//     };
//   },
//   (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzas(items)),
//     };
//   },
// )(App);
