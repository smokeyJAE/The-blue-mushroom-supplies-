export default function handler(req, res) {
  const products = [
    { id: 1, name: "Syringe 10cc", price: 5.00 },
    { id: 2, name: "Spore Print - Golden Teacher", price: 20.00 },
    { id: 3, name: "Mason Jar w/ Lid", price: 8.00 }
  ];

  res.status(200).json(products);
}
