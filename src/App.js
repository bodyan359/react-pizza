import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';
//console.log(logoSvg);

function App() {
const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((resp) => resp.json())
    .then(json => {
      setPizzas(json.pizzas);
    });
  }, []);

//  console.log(pizzas);

  return (
  <div className="wrapper">
    <Header />
    <div className="content">
    <Route path="/" render={() => <Home items={pizzas} />} exact/>
    <Route path="/cart" component={Cart} exact/> 
    </div>
  </div>
  );
}

export default App;
