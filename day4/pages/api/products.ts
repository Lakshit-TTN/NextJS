import { NextApiRequest, NextApiResponse } from "next";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
