import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface Item {
  id: number;
  date: string
  title: string;
  newPrice: number;
  weight: string;
  image: string;
  imageTwo: string;
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
  wishlist: Item[];
}

const initialState: CounterState = {
  wishlist: [
       
  {
    title: "Cashew Nut Flavor",
    image: "/assets/img/product/bread1.jpg",
    imageTwo: "/assets/img/product/bread1.jpg",
    category: "Spices",
    oldPrice: "$45.00",
    newPrice: 41,
    location: "In Store,online",
    brand: "Darsh Mart",
    sku: 24433,
    date: "",
    id: 6,
    quantity: 1,
    rating: 5,
    status: "Out Of Stock",
    weight: "200g",
  },
  {
 title: "Chocolaty Biscuit",
    image: "/assets/img/product/biscuit-flavor-1a.jpeg",
    imageTwo: "/assets/img/product/biscuit-flavor-1a.jpeg",
    category: "Spices",
    oldPrice: "$31.00",
    newPrice: 29,
    location: "online",
    brand: "Bhisma Organics",
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

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlistItems(state, action: PayloadAction<Item[]>) {
      state.wishlist = action.payload;
    },
    addWishlist(state, action: PayloadAction<Item>) {
      state.wishlist.push(action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
    },
    removeWishlist(state, action: PayloadAction<number>) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
    },
  },
});

export const { addWishlist, removeWishlist, setWishlistItems } = wishlistSlice.actions;

export default wishlistSlice.reducer;
