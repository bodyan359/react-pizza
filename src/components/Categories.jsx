import React from 'react';
import PropTypes from 'prop-types';

// class Categories extends React.Component {
//   state = {
//     activeItem: 'All',
//   };

//   onSelectItem = (categoriesName) => {
//     // understable for javascript and reactjs
//     this.setState({
//       activeItem: categoriesName,
//     });
//   };
//   render() {
//     const {items, onClick} = this.props;
    
//       return(
//       <div className="categories">
//           <ul>
//                <li>All</li>
//                 {
//                   items.map(categoriesName => 
//                   <li className={this.state.activeItem === categoriesName ? 'active' : ''} 
//                   onClick={() => this.onSelectItem(categoriesName)} key={categoriesName}>
//                     {categoriesName}
//                   </li>)
//                 }
//           </ul>
//       </div>
//     )
//   }

// }

const Categories = React.memo(function Categories ({activeCategory, items, onClickCategory}) {

    return (
            <div className="categories">
            <ul>
              <li
              className={activeCategory === null ? 'active' : ''} 
              onClick={() => onClickCategory(null)}>All</li>
               {items &&
                 items.map((categoriesName, index) => 
                    <li className={activeCategory === index ? 'active' : ''} 
                        onClick={() => onClickCategory(index)} 
                        key={categoriesName}>
                        {categoriesName}
                    </li>)
               }
            </ul>
          </div>
    );
}
);

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
