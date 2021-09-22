export default [
  { id: 0, name: "Google", price: randomCost(110) },
  { id: 1, name: "Yahoo", price: randomCost(56) },
  { id: 2, name: "Facebook", price: randomCost(75) },
  { id: 3, name: "Microsoft", price: randomCost(89) },
  { id: 4, name: "Asus", price: randomCost(33) },
  { id: 5, name: "Amazon", price: randomCost(90) },
  { id: 6, name: "Ford", price: randomCost(5) },
  { id: 6, name: "Toyota", price: randomCost(16) },
];

function randomCost(n) {
  return Math.round(n * (1 + Math.random() - 0.5));
}
