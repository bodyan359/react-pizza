import React from 'react'

function Categories ({items, onClick}) {
  // state = {
  //   activeItem: 3,
  // };
 // console.log(items);
    return (
            <div className="categories">
            <ul>
              <li className="active">All</li>
               {
                 items.map(categoriesName => 
                 <li className={1 === categoriesName ? 'active' : ''} onClick={() => onClick(categoriesName)} key={categoriesName}>
                   {categoriesName}
                   </li>)
               }
            </ul>
          </div>
    );
}

export default Categories;
