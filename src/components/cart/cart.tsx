'use client';
import React from 'react';
import s from './cart.module.scss';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { ICardItem } from '@/shared/types/ICartItem';
import { InputMask } from '@react-input/mask';
import { useState, useEffect } from 'react';
import Button from '../button/button';
import { cartSlice } from '@/lib/slices/cartSlice';


type Props = {}

const Cart = (props: Props) => {

  const cart = useAppSelector((state) => state.cartReducer);
  // const dispatch = useAppDispatch();
  // const { addLSToCart } = cartSlice.actions;

  console.log("cart: ", cart);
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string>('');

  // useEffect(() => {
  //   const phoneLS = localStorage.getItem('phone');
  //   if (phoneLS) setPhone(phoneLS);
  //   const cartLS = JSON.parse(`${localStorage.getItem('cart')}`);
  //   console.log('cartLS: ', cartLS);

  //   console.log('-------');
  //   console.log('cartLS(local storage)', JSON.parse(`${cartLS}`));
  //   console.log('cart (redux)', cart?.items)
  //   if(cart?.items?.length === 0 && cartLS?.length !== 0) {
  //     dispatch(addLSToCart(cartLS))
  //   }
  // }, []);

  // useEffect(() => {
  //   if(cart?.items?.[0] !== null) localStorage.setItem('cart', JSON.stringify(cart?.items))
  // }, [cart]);

  const getItemsBackend = (arr: ICardItem[]) => arr?.map(
    (cartItem: ICardItem) => ({id: cartItem?.id, amount: cartItem?.amount}));
  

  const getInfoForBackend = () => {
    const cartArray = getItemsBackend(cart?.items);
    const resObj = {
      phone: phone.replace(/[^\d]/g, ""),
      cart: cartArray,
    }
    const result = JSON.stringify(resObj);
    console.log(result)
    return result;
  }

  const checkPhone = (phoneNumber: string) => {
    console.log("phone ", phone)

    if (phoneNumber.length !== 18) {
      if (phoneNumber === '') {
        console.log('Введите номер телефона!')
        setError('Введите номер телефона!');
        return false;
      } else {
        console.log('Номер введен не полностью!')
        setError('Номер введен не полностью!')
        return false;
      }
    }
    setError('');
    return true;
  }

  const handleOrder = () => {
    const isAccess: boolean = checkPhone(phone);
    if (isAccess) {
      getInfoForBackend();
      localStorage.removeItem('phone');
      // localStorage.removeItem('cart');
      setPhone('');
      console.log('ЗАКАЗАНО!')
    } else {
      console.log('НЕ ЗАКАЗАНО')
    }
  }

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    localStorage.setItem('phone', e.target.value);
  }

  return (
    <article className={s.cart}>
      <div className={s.container}>
        <header className={s.header}>
          <p>Добавленные</p> 
          <p>товары</p>
        </header>
        
        <div className={s.cartItems}>
        {
          cart?.items?.map((cartItem: ICardItem) => <>
            <div className={s.item}>{cartItem?.title}</div>
            <div className={s.item}>x{cartItem?.amount}</div>
            <div className={s.item}>{cartItem?.price}₽</div>
          </>)
        }
        </div>

        <footer className={s.footer}>
          <InputMask
            mask="+7 (___) ___ __-__"
            replacement={{ _: /\d/ }} // только цифры
            value={phone}
            onChange={handlePhone}
            placeholder="+7 (999) 999 99-99"
            className={s.phone}

          />

          <Button onclick={handleOrder}>заказать</Button>
        </footer>
      </div>
    </article>
  )
}

export default Cart;