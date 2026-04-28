interface Category {
  name: string;
  persantine: string;
  icon: string;
  image: string;
  item: number;
  num: number;
  number: number;
}

const categoryslider: Category[] = [
  {
    persantine: "30%",
    icon: "fi fi-tr-peach",
    image: "/assets/img/product/coconutstyle.png",
    name: "Coconut Flavour",
    item: 125,
    num: 1,
    number: 200,
  },
  {
    persantine: "",
    icon: "fi fi-tr-bread",
    image: "/assets/img/product/cashewNut.png",
    name: "Nut",
    item: 201,
    num: 2,
    number: 400,
  },
  {
    persantine: "15%",
    icon: "fi fi-tr-corn",
    image: "/assets/img/product/biscuitFlavor.png",
    name: "Biscuit Flavour",
    item: 49,
    num: 3,
    number: 600,
  },
  
  {
    persantine: "",
    icon: "fi fi-tr-french-fries",
    image: "/assets/img/product/bananaFlavour.png",
    name: "Banana Flavor",
    item: 291,
    num: 1,
    number: 800,
  },
  {
    persantine: "",
    icon: "fi fi-tr-french-fries",
    image: "/assets/img/product/chololateFlavor.png",
    name: "Chocolate Flavor",
    item: 291,
    num: 1,
    number: 800,
  },
  
];
export default categoryslider;
