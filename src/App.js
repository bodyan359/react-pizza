import React from 'react';

import { Header, Footer } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
    <div className="wrapper">
      <Header />
      <div className="content">
      <Route path="/" component={Home} exact/>
      <Route path="/cart" component={Cart} exact/> 
      </div>
    </div>
    <Footer />
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
