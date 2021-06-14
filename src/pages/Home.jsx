/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Categories,
  PizzaBlock,
  SortPopup,
  PizzaLoadingBlock,
} from "../components/";
import { useSelector, useDispatch } from "react-redux";

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoriesNames = [
  "Мясная",
  "Вегетарианская",
  "Гриль",
  "Острая",
  "Кальцоне",
];
const sortItems = [
  { name: "Популярности", type: "popular" },
  { name: "Цене", type: "price" },
  { name: "Алфавит", type: "name" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  // console.log(category, sortBy);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  // const handleAddPizzaToCart = (obj) => {
  //   dispatch({
  //     type: 'ADD_PIZZA_CART',
  //     payload: obj,
  //   });
  // };

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: "ADD_PIZZA_CART",
      payload: obj,
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoriesNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onAddPizzaToCart={handleAddPizzaToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(8)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}
export default Home;
