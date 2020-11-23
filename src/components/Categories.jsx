import React from 'react'

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

function Categories ({items, onClick}) {
  // useState >>> when i need say that element need something to change
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (categoriesName) => {
    setActiveItem(categoriesName);
  }
    return (
            <div className="categories">
            <ul>
              <li
              className={activeItem === null ? 'active' : ''} 
              onClick={() => onSelectItem(null)}>All</li>
               {items &&
                 items.map(categoriesName => 
                    <li className={activeItem === categoriesName ? 'active' : ''} 
                        onClick={() => onSelectItem(categoriesName)} 
                        key={categoriesName}>
                        {categoriesName}
                    </li>)
               }
            </ul>
          </div>
    );
}

export default Categories;
