import { ICardItem } from "@/shared/types/ICartItem";
import { IProduct } from "@/shared/types/IProduct";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: ICardItem[];
}

const initialState = {
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.items.push({ ...action.payload, amount: 1 });
      }

      console.log('state: ', JSON.parse(JSON.stringify(state.items?.[0])))
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {

      state.items.map((item) => {
        if(item.id === action.payload.id) {
          if(item.amount === 1) {
            console.log('AMOUNT 1')
            state.items = state.items.filter(item => item.id !== action.payload.id);
          } else {
            console.log('AMOUNT > 1')
            item.amount -= 1
          }
        }
      })

      console.log('state: ', JSON.parse(JSON.stringify(state.items?.[0])))
    },
    // updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
    //   const item = state.items.find(item => item.id === action.payload.id);
    //   if (item) {
    //     item.quantity = action.payload.quantity;
    //   }
    // },
    // clearCart: (state) => {
    //   state.items = [];
    // },

  }
})

export default cartSlice.reducer;