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

  const auctions = await Auction.find({});

  for (let auction of auctions) {
    let highestBidder = await Bid.find({ item: auction.i })
      .sort({ amount: -1 })
      .limit(1);
    if (highestBidder.length > 0) {
      auction.highestBid = highestBidder[0].name;
      auction.price = highestBidder[0].amount;
    } else {
      auction.highestBid = null;
      auction.price = 0;
    }
    await auction.save();
  }

  switch (method) {
    case "POST":
      res.status(200).json("Ok :)");
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
