import React from 'react';
import s from './card.module.scss';

type Props = {}

const Card = (props: Props) => {
  return (
    <article className={s.card}>
      <div className={s.picture}>picture</div>
      <div className={s.body}>
        <header className={s.title}>
          {/* title */}

        </header>
        <p className={s.text}>
          {/* text */}
          Описание описание описание описание описание. ауццау, описание  fe описание. fefe.
        </p>
        <footer>
          {/* price */}
          {/* button */}
          {/* counter */}
        </footer>
      </div>

    </article>
  )
}

export default Card