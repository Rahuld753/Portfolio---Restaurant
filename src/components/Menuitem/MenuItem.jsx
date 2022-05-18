import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-head'>
      <h1 className='p__cormorant' style={{ color: "#DCCA87" }}>{title}</h1>
      <div/>
      <p className='p__cormorant'>{price}</p>
    </div>
    <div className='app__menuitem-sub'>
      <p className='p__opensans' style={{ color: "#AAA" }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
