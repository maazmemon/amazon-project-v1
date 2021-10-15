import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header">

          <Link to="/">
          <img className="header--logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"/>
          </Link>
          <div className="header--search">
          <input className="header--searchInput" type="text" />
          

          <SearchIcon class="header--SearchIcon"/>
          </div>  

          <div className="header--nav">
          <div classname='emoji'>🏳️‍🌈 </div>
            <div className="header--option">
            
            <span className="header--optionLineOne">Hello Guest</span>
            <span className="header--optionLineTwo">Sign In</span>
            </div>

            <div className="header--option">
                <span className="header--optionLineOne">Return</span>
            <span className="header--optionLineTwo">& Order</span>
            </div>

            <div className="header--option">
                <span className="header--optionLineOne">Your</span>
            <span className="header--optionLineTwo">Prime</span>
            </div>

          </div>  
<Link to="/checkout">
<div class="header--optionbasket"> 
  <ShoppingCartOutlinedIcon/>
  <span classname="header--optionLineTwo header--basketcount">0</span>
</div>
</Link>
        </div>
    ) 
}

export default Header;