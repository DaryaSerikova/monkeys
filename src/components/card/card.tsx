'use client';
import React from 'react';
import s from './card.module.scss';
import Button from '../button/button';
import { useState } from 'react';
import Image from 'next/image';
import { IProduct } from '@/shared/types/IProduct';
import { useAppDispatch } from '@/lib/hooks';
import { cartSlice } from '@/lib/slices/cartSlice';


const Card = (props: IProduct) => {

  const {price, title, description, image_url, id} = props;
  const dispatch = useAppDispatch();
  const { addToCart, removeFromCart } = cartSlice.actions;

  const [amount, setAmount] = useState<number>(0);


  const handleIncrement = () => {
    console.log('amount: ', amount + 1)

    dispatch(addToCart(props));
    console.log(props)
    setAmount(amount + 1);
  }

  const handleDecrement = () => {
    if(amount > 0) {
      dispatch(removeFromCart(props));
      setAmount(amount - 1);
    } 
  }




  return (
    <article className={s.card}>
      <div className={s.imageWrapper}>
        <Image
          src={image_url}
          layout='responsive'
          width={500}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={`${title} ${id}`}
        />
      </div>
      <div className={s.body}>
        <div className={s.cardTop}>
          <header className={s.title}>
            {title}
          </header>
          <p className={s.text}>
            {description}
          </p>
        </div>
        <footer className={s.footer}>
          <div className={s.price}>цена: {price}₽</div>
          {
            amount === 0 
            // ? <Button onclick={() => setAmount(1)}>купить</Button>
            ? <Button onclick={handleIncrement}>купить</Button>
            : <div className={s.counter}>
            <Button onclick={handleDecrement}>-</Button>
            <div className={s.amount}> {amount} </div>
            <Button onclick={handleIncrement}>+</Button>
            </div>
          }
          

          {/* button */}
          {/* counter */}
        </footer>
      </div>

    </article>
  )
}

export default Card;