const kinds = [
  { _id: 1, name: "Casual" },
  { _id: 2, name: "Sports" },
  { _id: 3, name: "Suit" },
  { _id: 4, name: "Belt" },
  { _id: 5, name: "Cap" },
  { _id: 6, name: "Socks" },
  { _id: 7, name: "Underwear" },
];

const price = [
  { _id: 0, name: "All Products", array: [] },
  { _id: 1, name: "$0 to $49", array: [0, 50] },
  { _id: 2, name: "$50 to $99", array: [50, 99] },
  { _id: 3, name: "$100 to $149", array: [100, 149] },
  { _id: 4, name: "$150 to $249", array: [150, 249] },
  { _id: 5, name: "More than $250", array: [250, 20000] },
];

export { kinds, price };
