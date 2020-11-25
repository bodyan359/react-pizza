import React from 'react'
import { Categories, PizzaBlock, SortPopup} from '../components/';

function Home({ items }) {
  console.log(items);

    return (
      <div className="container">
        <div className="content__top">
          <Categories 
          onClick={(categoriesName) => (categoriesName)} 
          items={[
            'Meat',
            'Vege',
            'Grill',
            'Spicy',
            'Calzone'
          ]}
          />
          <SortPopup 
          onClick={(sortBy) => (sortBy)}
          items ={[
            'Popularity',
            'Alphabetical',
            'Price'
          ]}
            />
          </div>
        <h2 className="content__title">All Pizza's</h2>
        <div className="content__items">
          {
            items.map(obj =>  <PizzaBlock key={obj.id} {...obj} />)
          }
  </div>
</div>
    )
}
export default Home;