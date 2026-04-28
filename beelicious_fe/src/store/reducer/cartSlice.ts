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
  items: Item[];
  orders: object[];
}

const defaultItems: Item[] = [
  {
    title: "Chocolaty Biscuit",
    image: "/assets/img/product/black-chocolate1b.jpeg",
    imageTwo: "/assets/img/product/black-chocolate1b.jpeg",
    category: "Biscuit",
    oldPrice: "$22.00",
    newPrice: 32,
    location: "In Store",
    brand: "Peoples Store",
    sku: 24433,
    id: 5,
    quantity: 1,
    rating: 4,
    status: "Out Of Stock",
    weight: "1pack",
    date: "",
  },
  {
    title: "Cashew Nut Flavor",
    image: "/assets/img/product/bread1.jpg",
    imageTwo: "/assets/img/product/bread1.jpg",
    category: "Nut",
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
    category: "Chocolaty",
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
  {
   title: "Coconut",
    image: "/assets/img/product/coconut-flavor-1c.jpeg",
    imageTwo: "/assets/img/product/coconut-flavor-1c.jpeg",
    category: "Nut",
    oldPrice: "$10.00",
    newPrice: 9,
    location: "In Store,online",
    brand: "Peoples Store",
    sku: 24433,
    date: "",
    id: 8,
    quantity: 1,
    rating: 4,
    status: "Out Of Stock",
    weight: "500g",
  },
];

const defaultOrders: object[] = [
  {
    orderId: "65820",
    date: "2024-08-23T06:45:41.989Z",
    shippingMethod: "free",
    totalItems: 3,
    totalPrice: 194.4,
    status: "Completed",
    products: [
      {
        title: "Nut",
        sale: "",
        image: "/assets/img/product/coconut-flavour2.jpeg",
    imageTwo: "/assets/img/product/coconut-flavour2.jpeg",
        category: "Nut",
        oldPrice: "$2.00",
        newPrice: 1,
        location: "In Store,online",
        brand: "Darsh Mart",
        sku: 24433,
        itemLeft: "",
        id: 3,
        quantity: 1,
        rating: 1,
        status: "In Stock",
        weight: "100 g",
      },
      {
       title: "Coconut ",
        sale: "",
        image: "/assets/img/product/coconut-flavor-1b.jpeg",
    imageTwo: "/assets/img/product/bread4.jpg",
        category: "Nut",
        // oldPrice: 22,
        newPrice: 15,
        location: "online",
        brand: "Nut",
        sku: 24433,
        itemLeft: "3 left",
        id: 4,
        quantity: 1,
        rating: 2,
        status: "In Stock",
        weight: "",
      },
      {
         title: "Chocolaty Biscuit",
        sale: "",
       image: "/assets/img/product/black-chocolate1b.jpeg",
    imageTwo: "/assets/img/product/chocolate1.jpeg",
        category: "Chocolaty",
        // oldPrice: 22,
        newPrice: 32,
        location: "In Store",
        brand: "Peoples Store",
        sku: 24433,
        itemLeft: "1 left",
        id: 5,
        quantity: 1,
        rating: 4,
        status: "Out Of Stock",
        weight: "1 pack",
      },
    ],
    address: {
      id: "1724395538835",
      firstName: "John",
      lastName: "Smith",
      address: "    My Street, Big town BG23 4YZ",
      city: "Miami",
      postalCode: "395004",
      country: "AM",
      state: "SU",
      countryName: "Armenia",
      stateName: "Miami",
    },
  },
  {
    orderId: "31264",
    date: "2024-08-23T07:00:36.339Z",
    shippingMethod: "free",
    totalItems: 3,
    totalPrice: 181.2,
    status: "Completed",
    products: [
      {
        title: "Banana ",
        sale: "New",
       image: "/assets/img/product/banana-flavor1a.jpeg",
    imageTwo: "/assets/img/product/banana-flavor1b.jpeg",
        category: "Spices",
        oldPrice: "$31.00",
        newPrice: 29,
        location: "online",
        brand: "Bhisma Organics",
        sku: 24433,
        itemLeft: "",
        id: 7,
        quantity: 1,
        rating: 2,
        status: "In Stock",
        weight: "250 g",
      },
      {
         title: "Coconut",
        sale: "New",
      image: "/assets/img/product/vanilla-flavor.jpeg",
    imageTwo: "/assets/img/product/vanilla-flavor.jpeg",
        category: "Nut",
        oldPrice: "$10.00",
        newPrice: 9,
        location: "In Store,online",
        brand: "Peoples Store",
        sku: 24433,
        itemLeft: "",
        id: 8,
        quantity: 1,
        rating: 4,
        status: "Out Of Stock",
        weight: "500 g",
      },
     
    ],
    address: {
      id: "1724395538835",
      firstName: "Jane",
      lastName: "Favor",
      address: "    My Street, Big town BG23 4YZ",
      city: "Los Vegas",
      postalCode: "395004",
      country: "AM",
      state: "Michigan",
      countryName: "USA",
      stateName: "Grand Rapids",
    },
  },
  {
    orderId: "47394",
    date: "2024-08-23T07:01:13.747Z",
    shippingMethod: "free",
    totalItems: 3,
    totalPrice: 106.8,
    status: "Pending",
    products: [
      {
        title: "Chocolaty  ",
        sale: "",
       image: "/assets/img/product/chocolate-5.jpeg",
    imageTwo: "/assets/img/product/chocolate-5.jpeg",
        category: "Spices",
        // oldPrice: 22,
        newPrice: 32,
        location: "In Store",
        brand: "Peoples Store",
        sku: 24433,
        itemLeft: "1 left",
        id: 5,
        quantity: 1,
        rating: 4,
        status: "Out Of Stock",
        weight: "1 pack",
      },
      
      {
       title: "Nut ",
        sale: "New",
       image: "/assets/img/product/cashewnut-flavor.jpeg",
    imageTwo: "/assets/img/product/cashewnut-flavor.jpeg",
        category: "Spices",
        oldPrice: "$31.00",
        newPrice: 29,
        location: "online",
        brand: "Bhisma Organics",
        sku: 24433,
        itemLeft: "",
        id: 7,
        quantity: 1,
        rating: 2,
        status: "In Stock",
        weight: "250 g",
      },
      {
          title: " Banana",
        sale: "New",
        image: "/assets/img/product/vanilla-bread.jpeg",
    imageTwo: "/assets/img/product/vanilla-bread.jpeg",
        category: "Sauces",
        oldPrice: "$10.00",
        newPrice: 9,
        location: "In Store,online",
        brand: "Peoples Store",
        sku: 24433,
        itemLeft: "",
        id: 8,
        quantity: 1,
        rating: 4,
        status: "Out Of Stock",
        weight: "500 g",
      },
    ],
     address: {
      id: "1724395538835",
      firstName: "Jane",
      lastName: "Favor",
      address: "    My Street, Big town BG23 4YZ",
      city: "Los Vegas",
      postalCode: "395004",
      country: "AM",
      state: "Michigan",
      countryName: "USA",
      stateName: "Grand Rapids",
    },
  },
];

const initialState: CounterState = {
  items: defaultItems,
  orders: defaultOrders,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
    addItem(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("products", JSON.stringify(state.items));
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("products", JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items = [];
      if (typeof window !== "undefined") {
        localStorage.setItem("products", JSON.stringify(state.items));
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        if (typeof window !== "undefined") {
          localStorage.setItem("products", JSON.stringify(state.items));
        }
      }
    },
    updateItemQuantity: (state, action) => {
      state.items = action.payload;
    },
    addOrder(state, action: PayloadAction<any>) {
      const newOrder = action.payload;
      const loginUser =
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("login_user") || "{}")
          : {};

      if (loginUser?.uid) {
        const storedOrders = JSON.parse(localStorage.getItem("orders") || "{}");
        let userOrders = storedOrders[loginUser.uid] || defaultOrders;

        if (newOrder) {
          userOrders = [...userOrders, newOrder];
          storedOrders[loginUser.uid] = userOrders;
          localStorage.setItem("orders", JSON.stringify(storedOrders));
        }
      }
    },
    setOrders(state, action: PayloadAction<any[]>) {
      state.orders = action.payload;
    },
  },
});

export const {
  setItems,
  addItem,
  removeItem,
  clearCart,
  updateQuantity,
  updateItemQuantity,
  addOrder,
  setOrders,
} = cartSlice.actions;

export default cartSlice.reducer;
