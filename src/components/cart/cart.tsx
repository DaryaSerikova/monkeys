'use client';
import React, { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';
import { ICardItem } from '@/shared/types/ICartItem';
import { InputMask } from '@react-input/mask';
import Button from '../button/button';
import s from './cart.module.scss';


type Props = {}

const Cart = (props: Props) => {

  const cart = useAppSelector((state) => state.cartReducer);
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string>('');


  const getItemsBackend = (arr: ICardItem[]) => arr?.map(
    (cartItem: ICardItem) => ({id: cartItem?.id, amount: cartItem?.amount}));
  

  const getInfoForBackend = () => {
    const cartArray = getItemsBackend(cart?.items);
    const resObj = {
      phone: phone.replace(/[^\d]/g, ""),
      cart: cartArray,
    }
    const result = JSON.stringify(resObj);
    return result;
  }

  const checkPhone = (phoneNumber: string) => {

    if (phoneNumber.length !== 18) {
      if (phoneNumber === '') {
        // console.log('Введите номер телефона!')
        setError('Введите номер телефона!');
        return false;
      } else {
        // console.log('Номер введен не полностью!')
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