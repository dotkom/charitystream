//auctionindex
//higest amount
import mongoose from "mongoose";
import { Bid, Auction } from "../../models/schema.js";
import { url } from "./state";

export default async function handler(req, res) {
  const { method } = req;

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  let document = await Auction.findOneAndUpdate(
    { i: req.body.i },
    { highestBid: req.body.id }
  );

  switch (method) {
    case "POST":
      res.status(200).json(document);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
