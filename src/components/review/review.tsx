import React from 'react';
import { IReview } from '@/shared/types/IReview';
import parse from 'html-react-parser';
import s from './review.module.scss';


const Review = ({text}: IReview) => {
  const htmlText = parse(text);
  

  return (
    <div className={s.wrapperReview}>
      <div className={s.review}>
        {htmlText}  
      </div>
    </div>
  )
}

export default Review;