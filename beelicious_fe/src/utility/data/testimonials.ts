interface Blog {
    name: string;
    image: string;
    date: string;
    title: string;
    description: string;
}

const testimonials: Blog[] = [
    {
        image: "/assets/img/product/Blessing-ceo.png",
        name: "Blessing .O",
        date: "June 30,2022",
        title: "(Owner)",
        description:
            "I am Blessing, founder and CEO of Beelicious Bites, and what started as a lifelong passion for the magic of fresh-baked bread and decadent cakes has grown into a beloved bakery dedicated to bringing joy to every table. Inspired by childhood memories of warm kitchens and the way a perfect loaf or slice can turn an ordinary moment into something special, we bake daily in small batches using only the finest ingredients and time-honored techniques with a touch of creativity. Every creation from our signature cake breads to custom celebration cakes is made with care and intention, because we believe great food is about connection, comfort, and celebration. Thank you for trusting us to sweeten your days. I am honored to be part of your stories, one delicious bite at a time.",
    },
    
  
];
export default testimonials;
