'use client';
import React from 'react';
import s from './card.module.scss';
import Button from '../button/button';
import { useState } from 'react';
import Image from 'next/image';

export interface IProduct {
  description: string;
  id: number;
  image_url: string;
  price: number;
  title: string;
}

const Card = ({price, title, description, image_url, id}: IProduct) => {
  // const isButton: boolean = true;
  const isButton: boolean = false;

  const [amount, setAmount] = useState(0);

  // useEffect(
  //   setAmount
  // , [amount])

  const handleIncrement = () => setAmount(amount + 1);

  const handleDecrement = () => {
    if(amount > 0) {
      setAmount(amount - 1)
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
            isButton 
            ? <Button onclick={() => setAmount(1)}>купить</Button>
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