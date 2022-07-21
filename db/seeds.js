require("./connection");

////Example seeds

// const Item = require("../models/Item");

// const items = [
//   {
//     type: "Drink",
//     roast: "Dark",
//     cost: 10.5,
//     quantity: 5,
//     description: "Ice blended coffee with caramel",
//     image:
//       "https://thesupermomlife.com/wp-content/uploads/2022/02/starbuckscaramelfrappuccinocopycat_2-scaled.jpg",
//     name: "Caramel Frap",
//     inStock: true,
//     uniqueIdentifier: "322u",
//   },
//   {
//     type: "Drink",
//     roast: "light",
//     cost: 10.5,
//     quantity: 5,
//     description: "Ice blended matcha",
//     image:
//       "https://thesupermomlife.com/wp-content/uploads/2022/02/starbuckscaramelfrappuccinocopycat_2-scaled.jpg",
//     name: "Matcha Frap",
//     inStock: true,
//     uniqueIdentifier: "324u",
//   },
// ];

// Item.deleteMany({})
//   .then(() => {
//     return Item.insertMany(items);
//   })
//   .then((insertedItems) => {
//     console.log(insertedItems);
//   })
//   .catch((err) => console.error(err))
//   .finally(() => {
//     process.exit();
//   });
