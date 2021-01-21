import React from 'react';

import { Header, Footer } from './components';
import { Home, Cart, NotFound } from './pages';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/cart" component={Cart} exact/> 
          <Route component={NotFound} exact />
        </Switch>
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
