import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {getTotalCartAmount, all_product,CartItems,removeFromCart,} = useContext(ShopContext);
  return (
    <div className='cart_items'>
<div className="cart-item-format-main">
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
</div>
<hr />

{
  all_product.map((e) => {
    if (CartItems[e.id] > 0) {
      return (
        <div key={e.id} className="cart-item-format cart-item-format-main">
          <img src={e.image} alt="" className="carticon-product-icon" />
          <p>{e.name}</p>
          <p>${e.new_price}</p>
          <button className="cart-items-quantity">{CartItems[e.id]}</button>
          <p>${e.new_price * CartItems[e.id]}</p>
          <img className='cart-icon-remove-icon' onClick={() => removeFromCart(e.id)} src={remove_icon} alt="" />
          
        </div>
      );
      
    } else {
      return null; // Return null or an appropriate fallback for other cases
}
})
}

<hr />
<div className="cart-item-down">
  <div className="cart-items-total">
    <h1>Cart Totals</h1>
    <div className="cart-items-total-items">
      <p>Subtotal</p>
      <p>${getTotalCartAmount()}</p>
    </div>
    <hr />
    <div className="cart-items-total-items">
      <p>Shipping fee</p>
      <p>Free</p>
      <hr />
      <div className="cart-items-total-items">
        <h3>Total</h3>
        <h3>${getTotalCartAmount()}</h3>
        </div>
      </div>
      <button>PROCEED TO CHECK OUT</button>
    </div>
    <div className="cart-items-promo-code">
      <p>If you have a promo code enter here</p>
      <div className="cart-item-promo-box">
        <input type="text" placeholder='promo code' />
        <button>Submit</button>
      </div>
    </div>
  
</div>
    </div>

  )
}

export default CartItems;