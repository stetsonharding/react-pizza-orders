export const MenuData = [
  {
    id: 1,
    name: "Blitz Classic Burger",
    img: "/assets/Menu-Items/Burger.jpeg",
    section: "sandwitch",
  },
  {
    id: 2,
    name: "Blitz Burger",
    img: "/assets/Menu-Items/Burger2.jpg",
    section: "sandwitch",
  },
  {
    id: 3,
    name: "Blitz Chicken Pizza",
    img: "/assets/Menu-Items/ChickenPizza.jpg",
    section: "Pizza",
  },
  {
    id: 4,
    name: "Blitz Custom Pizza",
    img: "/assets/Menu-Items/pizza2.jpeg",
    section: "Pizza",
  },
  {
    id: 5,
    name: "Blitz Ribs",
    img: "/assets/Menu-Items/Ribs.jpeg",
    section: "Meats",
  },
  {
    id: 6,
    name: "Blitz Salad",
    img: "/assets/Menu-Items/salad.jpeg",
    section: "Salad",
  },
  {
    id: 7,
    name: "Blitz Chicken Sandwitch",
    img: "/assets/Menu-Items/sandwitch.jpeg",
    section: "sandwitch",
  },
  {
    id: 8,
    name: "Blitz Steak & Fries",
    img: "/assets/Menu-Items/steak.jpeg",
    section: "Meats",
  },
];

/*Splitting Menu Data in to food sections, based on the section key value pair.*/

export const foodSections = MenuData.reduce((sections, item) => {
  if (!sections[item.section]) {
    sections[item.section] = [];
  }

  sections[item.section].push(item);

  return sections;
}, {});

console.log(foodSections);
