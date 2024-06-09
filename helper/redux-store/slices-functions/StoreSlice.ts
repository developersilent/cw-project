import { StoreValues } from "@/types/Types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItemType {
  CARTITEMS: StoreValues[];
}

interface removeProps {
  id: number;
  title: string;
}

const initialState: CartItemType = {
  CARTITEMS: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<StoreValues>) => {
      const itemIndex = state.CARTITEMS.findIndex(
        (item) =>
          item.id === action.payload.id && item.title === action.payload.title
      );

      if (itemIndex >= 0) {
        // Check if count is defined, if not, set it to 1
        state.CARTITEMS[itemIndex].count =
          (state.CARTITEMS[itemIndex].count ?? 0) + 1;
      } else {
        state.CARTITEMS.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<removeProps>) => {
      state.CARTITEMS = state.CARTITEMS.filter(
        (item) =>
          item.id !== action.payload.id && item.title !== action.payload.title
      );
    },
    decreaseQuantity: (state, action: PayloadAction<StoreValues>) => {
      const itemIndex = state.CARTITEMS.findIndex(
        (item) =>
          item.id === action.payload.id && item.title === action.payload.title
      );

      if (itemIndex !== -1) {
        state.CARTITEMS[itemIndex].count = Math.max(
          0,
          (state.CARTITEMS[itemIndex].count ?? 0) - 1
        );
        if (state.CARTITEMS[itemIndex].count === 0) {
          state.CARTITEMS.splice(itemIndex, 1);
        }
      }else{
        removeFromCart({ id: action.payload.id, title: action.payload.title });
      }
    },
    ClearAllItems: (state) => {
      state.CARTITEMS = [];
    }
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, ClearAllItems } =
  CartSlice.actions;
export const cartReducer = CartSlice.reducer;
