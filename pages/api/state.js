import mongoose from "mongoose";

import {
  Auction,
  Vipps,
  StreamLink,
  SlidoView,
  StretchGoal,
} from "../../models/schema.js";

const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const dbname = "Charity";
export const url = `mongodb+srv://${username}:${password}@mongo-db.a7ts5.mongodb.net/${dbname}?retryWrites=true&w=majority`;

export default async function handler(_, res) {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  // Get all the state we need for the page
  const auctions = await Auction.find({});
  const vipps = await Vipps.find({});
  const streamLink = await StreamLink.findOne().sort({ date: -1 }).limit(1);
  const slidoView = await SlidoView.findOne().sort({ date: -1 }).limit(1);
  const stretchGoals = await StretchGoal.find({}).sort("goal");
  const topDonor = await Vipps.findOne({}).sort({ amount: -1 }).limit(1);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  // Find totalAmount using the sum all vipps
  const totalAmount = vipps.reduce((a, b) => {
    return a + b.amount;
  }, 0);

  res.end(
    JSON.stringify({
      auctions,
      totalAmount,
      vipps: vipps.slice(vipps.length - 7, vipps.length),
      streamLink,
      slidoView,
      stretchGoals,
      topDonor,
    })
  );
}
