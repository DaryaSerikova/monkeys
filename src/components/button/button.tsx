import React from 'react';
import s from './button.module.scss'


interface IButton {
  children: React.ReactNode | string;
  onclick: () => void;
}

const Button = ({children, onclick}: IButton) => {
  return (
    <button 
      className={s.button}
      onClick={onclick}
    >{children}</button>
  )
}

export default Button;