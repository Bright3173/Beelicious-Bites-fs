import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  title: string;
  newPrice: number;
  weight: string;
  image: string;
  imageTwo: string;
  date: string;
  status: string;
  rating: number;
  oldPrice: any;
  location: string;
  brand: string;
  sku: number;
  category: string;
  quantity: number;
}
export interface CounterState {
  compare: Item[];
}

const initialState: CounterState = {
  compare: [
    {
      title: "Nut ",
      image: "/assets/img/product/cashewnut-flavor.jpeg",
      imageTwo: "/assets/img/product/cashewnut-flavor.jpeg",
      category: "Spices",
      newPrice: 29,
      oldPrice: "$50",
      location: "online",
      brand: "Bhisma Organics",
      sku: 24433,
      date: "",
      id: 7,
      quantity: 1,
      rating: 2,
      status: "In Stock",
      weight: "250 g",
    },
    {
      title: " Banana",
       image: "/assets/img/product/vanilla-bread.jpeg",
    imageTwo: "/assets/img/product/vanilla-bread.jpeg",
      category: "Spices",
      oldPrice: 45,
      newPrice: 41,
      location: "online",
      brand: "D mart",
      sku: 24433,
      date: "",
      id: 6,
      quantity: 1,
      rating: 5,
      status: "In Stock",
      weight: "200g",
    },
    {
      title: "Coconut",
      image: "/assets/img/product/coconut-flavor2.jpeg",
      imageTwo: "/assets/img/product/coconut-flavor2.jpeg",
      category: "Spices",
      oldPrice: 31,
      newPrice: 29,
      location: "In Store",
      brand: "D mart",
      sku: 24433,
      date: "",
      id: 7,
      quantity: 1,
      rating: 2,
      status: "In Stock",
      weight: "250g",
    },
  ],
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    setCompareItem(state, action: PayloadAction<Item>) {
      state.compare.push(action.payload);
    },

    addCompare(state, action: PayloadAction<Item>) {
      state.compare.push(action.payload);
    },
    removeCompareItem(state, action: PayloadAction<number>) {
      state.compare = state.compare.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { addCompare, removeCompareItem, setCompareItem } =
  compareSlice.actions;
export default compareSlice.reducer;
