import mongoose from "mongoose";
import { Bid } from "../../models/schema.js";
import { url } from "./state";

export default async function handler(req, res) {
  const { method } = req;

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  console.log(req.body);

  switch (method) {
    case "POST":
      const bid = new Bid(req.body);
      await bid.save();
      res.status(200).json(bid);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
