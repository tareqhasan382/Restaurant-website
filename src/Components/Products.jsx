import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';
function Products() {
  return (
    <div id='products'>
        <h3>CHOOSE & ENJOY</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aut porro, molestiae necessitatibus omnis minima obcaecati earum sit architecto. Dolore perferendis corporis saepe aspernatur sit modi animi, libero odit ipsam.</p>
        <div className='a-container'>
        <Productbox image={pimage1} title="Luger Burger"/>
        <Productbox image={pimage2} title="Luger Burger"/>
        <Productbox image={pimage1} title="Luger Burger"/>
        </div>
    </div>
  );
}

export default Products;
