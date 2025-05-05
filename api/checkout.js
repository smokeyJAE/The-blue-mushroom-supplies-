export default function handler(req, res) {
  if (req.method === 'POST') {
    const { cart, email } = req.body;

    if (!cart || !email) {
      return res.status(400).json({ message: 'Missing info' });
    }

    res.status(200).json({ message: 'Order received', cart, email });
  } else {
    res.status(405).json({ message: 'Only POST allowed' });
  }
}
