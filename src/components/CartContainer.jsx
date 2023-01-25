import React from 'react'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartContainer = () => {
  const {cartItems, total, amount} = useSelector((store) => store.cart)
  if(amount<1){
    return <section>
      <header className='cart'>
        <h2>Your bag</h2>
        <h4 className='empty-cart'>currently empty</h4>
      </header>
    </section>
  }
  return (
    <section className='cart'>
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item)=>{
          return <CartItem key={item.id} {...item}/>
        })}
      </div>
      <footer>
        <hr></hr>
        <div className='cart-total'>
          <h4>total <pan>${total}</pan></h4>
        </div>
        <button className='btn clear-btn'>Clear cart</button>
      </footer>
    </section>
  )
}

export default CartContainer;
