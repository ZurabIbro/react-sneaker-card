import { useState } from 'react'
import './App.css'

function App() {
  const [inCart, setInCart] = useState(false)
  const [details, setDetails] = useState(false)

  const openDetail = () => {
    setDetails(true)
  }

  const addToCart = () => {
    setInCart(true)
  }
  const removeFromCart = () => {
    setInCart(false)
  }
  return (
    <div className='card'>
      <div>
        <img src="https://img.goodfon.ru/wallpaper/nbig/8/21/krossovok-iarko-krasnyi-fon-naik-svoboda-sportivnaia-obuv-sn.jpg" alt="" />
      </div>
      <div className='card-content'>
        <div className='card-header'>
          <div className='card-title'>
            <div >Nike Sneaker</div> 
            <div>$120</div>      
          </div>  
          <button
          onClick={openDetail} 
          className='detail-button'
          >Details</button>
        </div>
        <div className='card-footer' >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit sed unde culpa expedita nihil.</p>
          <button
          disabled={inCart}
          onClick={addToCart}
          >{inCart ? 'already in cart' : 'add to cart'}</button>
          {inCart && <div className='remove-from-cart' onClick={removeFromCart}>delete from cart</div>}

        </div>
        {details && 
          <div className='details-container'>
            <button className='detail-close-button' onClick={()=> setDetails(false)}>X</button>
            <p className='detail-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>}
      </div>
    </div>
  )
}

export default App
