'use client'

import s from "./page.module.scss";
import Card from "@/components/card/card";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { fetchProducts } from "@/lib/slices/productSlice";
import { fetchReviews } from "@/lib/slices/reviewSlice";
import Review from "@/components/review/review";
import Cart from "@/components/cart/cart";



export default function Home() {

  const { products } = useAppSelector(state => state.productReducer);
  const { reviews } = useAppSelector(state => state.reviewReducer)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchReviews())
  }, [dispatch]);

  return (
    <div className={s.pageWrapper}>
      <div className={s.page}>

        <header className={s.header}>
          <h2 className={s.h2}>
            тестовое задание
          </h2>
        </header>

        <div className={s.reviews}>
          {reviews?.map((review) => 
            <Review 
              id={review.id} 
              text={review?.text} 
            />
          )}
        </div>


        <Cart />


        <div className={s.cards}>
          {products?.map((product) => 
            <Card 
              description={product?.description}
              id={product?.id}
              image_url={product?.image_url}
              price={product?.price}
              title={product?.title}
              key={product?.id}

            />)}

        </div>
      </div>
    </div>
  );
}
