import React, { useState, useEffect } from 'react';

import { Container } from './style';
import api from '../../services/api';

interface IProduct {
  id: number;
  name: string;
  photo: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, []);

  const handleCart = (index: number) => {
    let push: any = [...cart, cart.push(data[index])]
    setCart(push)
    console.log(cart);
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore)
  }
  
  return (
    <Container>
        <div className="nav">
          <div>
            <img src="https://image.flaticon.com/icons/png/512/4297/4297041.png" alt="logo" width="100px" height="auto"/>
          </div>
          <div className="cart">
            <img src="https://image.flaticon.com/icons/png/512/4297/4297127.png" alt="cart" width="50px" height="auto" />
            <p>( {cart.length} ) - Itens</p>
          </div>
        </div>
        <section>
        { data.map( (prod, index) => (
          <div className="product-container" key={ prod.id }>
            <img src={ prod.photo } alt="produto" width="200" height="200"/>
            <h4>{ prod.name }</h4>
            <span>{ prod.description }</span>
            <h6>R$ { prod.price }</h6>
            <button onClick={ () => handleCart(index) }>Add to cart</button>
          </div>
        )) }
      </section>
    </Container>
  )
}

export default Home;
