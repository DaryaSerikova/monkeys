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
    addToCart: (state: CartState, action: PayloadAction<IProduct>) => {
      
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.items.push({ ...action.payload, amount: 1 });
      }
    },
    addLSToCart: (state: CartState, action: PayloadAction<ICardItem[]> ) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state: CartState, action: PayloadAction<IProduct>) => {

      state.items.map((item: ICardItem) => {
        if(item.id === action.payload.id) {
          if(item.amount === 1) {
            state.items = state.items.filter(item => item.id !== action.payload.id);
          } else {
            item.amount -= 1
          }
        }
      })
      // console.log('state: ', JSON.parse(JSON.stringify(state.items?.[0])))
    },
  }
})

export default cartSlice.reducer;