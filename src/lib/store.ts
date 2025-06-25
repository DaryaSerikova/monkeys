import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import reviewReducer from './slices/reviewSlice';
import cartReducer from './slices/cartSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      productReducer,
      reviewReducer,
      cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']
export type AppDispatch = AppStore['dispatch']
