import Button from "@/components/button/button";
import s from "./page.module.scss";
import Card from "@/components/card/card";
import { IProduct } from "@/components/card/card";



export default async function Home() {

  const response = await fetch('http://o-complex.com:1337/products?page=1&page_size=20', {
    next: {revalidate: 300}
  });

  const resObject = await response.json();
  const products: IProduct[] = resObject?.items;
  console.log('resObject: ', resObject)
  console.log('products: ', products)

  return (
    <div className={s.pageWrapper}>
      <div className={s.page}>
        <header className={s.header}></header>
        <div className={s.reviews}>

        </div>
        <div className={s.addedProducts}>
          <div className={s.products}>
            <header>Добавленные товары</header>
            <div className={s.products}>

            </div>
            <footer>
              <input></input>
              <Button >заказать</Button>
            </footer>
          </div>
        </div>
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
