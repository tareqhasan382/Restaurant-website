import React from 'react';

function Header() {
  return (
    <div id='main'>
      <div className='header-heading'>
          <h3>Its Great Time For A Good Taste of Burger</h3>
          <h1><span>BURGER</span> For<br/>WEEk</h1>
          <p className='details'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ipsam doloribus! Provident ipsum delectus, sunt dolores dignissimos natus animi tenetur aperiam reprehenderit doloribus obcaecati atque eaque et accusantium cupiditate consectetur.</p>
          <div className='header-btns'>
              <a href="#" className='header-btn'>Order</a>
          </div>
      </div>
    </div>
  );
}

export default Header;
