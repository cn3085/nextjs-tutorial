export default function handler(req, res) {
  res.status(200).json({ name: req.cookies.a_name });
}