import burger from "../assets/Menu-Items/Burger.jpeg";
import burger2 from "../assets/Menu-Items/burger2.jpg";
import chickenPizza from "../assets/Menu-Items/ChickenPizza.jpg";
import pizza2 from "../assets/Menu-Items/pizza2.jpeg";
import ribs from "../assets/Menu-Items/Ribs.jpeg";
import salad from "../assets/Menu-Items/salad.jpeg";
import sandwitch from "../assets/Menu-Items/sandwitch.jpeg";
import steak from "../assets/Menu-Items/steak.jpeg";
import beverage from "../assets/Menu-Items/Beverage.PNG";

//Formatting price for USD.
export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export const MenuData = [
  {
    id: 1,
    name: "Blitz Classic Burger",
    img: `${burger}`,
    section: "sandwitch",
    price: 10.5,
  },
  {
    id: 2,
    name: "Blitz Burger",
    img: `${burger2}`,
    section: "sandwitch",
    price: 13.5,
  },
  {
    id: 3,
    name: "Blitz Chicken Pizza",
    img: `${chickenPizza}`,
    section: "Pizza",
    price: 13.84,
  },
  {
    id: 4,
    name: "Blitz Custom Pizza",
    img: `${pizza2}`,
    section: "Pizza",
    price: 13.5,
  },
  {
    id: 5,
    name: "Blitz Ribs",
    img: `${ribs}`,
    section: "Meats",
    price: 17.99,
  },
  {
    id: 6,
    name: "Blitz Salad",
    img: `${salad}`,
    section: "Salad",
    price: 8.99,
  },
  {
    id: 7,
    name: "Blitz Chicken Sandwitch",
    img: `${sandwitch}`,
    section: "sandwitch",
    price: 10.99,
  },
  {
    id: 8,
    name: "Blitz Steak & Fries",
    img: `${steak}`,
    section: "Meats",
    price: 19.99,
  },
  {
    name: "Soda",
    price: 1,
    img: `${beverage}`,
    section: "Beverages",
    beverages: ["Coke", "Sprite", "Dr. Pepper"],
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
