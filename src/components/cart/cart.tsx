import React from 'react';
import s from './cart.module.scss';
import { useAppSelector } from '@/lib/hooks';
import { ICardItem } from '@/shared/types/ICartItem';
import { InputMask } from '@react-input/mask';

import Button from '../button/button';


type Props = {}

const Cart = (props: Props) => {

  const cart = useAppSelector((state) => state.cartReducer);
  console.log("cart: ", cart);


  return (
    <article className={s.cart}>
      <div className={s.container}>
        <header>Добавленные товары</header>
        
        <div className={s.cartItems}>
        {
          cart?.items?.map((cartItem: ICardItem) => <>
            <div className={s.item}>{cartItem?.title}</div>
            <div className={s.item}>x{cartItem?.amount}</div>
            <div className={s.item}>{cartItem?.price}</div>
          </>)
        }
        </div>

        <footer>
          <InputMask
            mask="+7 (___) ___-__-__"
            replacement={{ _: /\d/ }} // только цифры
            // value={phone}
            // onChange={handleChange}
            placeholder="+7 (999) 999-99-99"
            className={s.phone}

          />

          <Button onclick={() => console.log('ЗАКАЗАНО!')}>заказать</Button>
        </footer>
      </div>
    </article>
  )
}

export default Cart;