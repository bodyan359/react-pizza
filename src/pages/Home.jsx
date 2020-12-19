import React from 'react'
import { Categories, PizzaBlock, SortPopup} from '../components/';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

  const categoriesNames = [
    'Meat',
    'Vege',
    'Grill',
    'Spicy',
    'Calzone'
  ];
  const sortItems = [{name: 'Popularity', type: 'popular'}, 
  {name: 'Price', type: 'price'},
  {name: 'Alphabetical', type: 'abc'}
  ];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const onSelectCategory = categoriesName => {
    dispatch(setCategory(categoriesName));
  };
    return (
      <div className="container">
        <div className="content__top">
          <Categories 
          onClickItem={onSelectCategory} 
          items={categoriesNames}
          />
          <SortPopup 
          onClick={(sortBy) => (sortBy)}
          items ={sortItems}
            />
          </div>
        <h2 className="content__title">All Pizza's</h2>
        <div className="content__items">
          { items &&
            items.map((obj) =>  (
            <PizzaBlock key={obj.id} {...obj} />
            ))}
  </div>
</div>
    )
}
export default Home;