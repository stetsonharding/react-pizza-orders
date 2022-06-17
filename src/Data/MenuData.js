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

/*Split Menu Data in to food sections*/
export const foodSections = MenuData.reduce((sections, item) => {
  //create object with key as section name and value to empty array.
  if (!sections[item.section]) {
    sections[item.section] = [];
  }
  //if object of section is found, push item onto array thats been created for that particular section.
  sections[item.section].push(item);

  //return object of arrays.
  return sections;
}, {});
