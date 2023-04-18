import mongoose from "mongoose";

import {
  Auction,
  Vipps,
  StreamLink,
  StretchGoal,
  Rulesheet,
  Bid,
} from "../../models/schema.js";

export const url = process.env.DATABASE_URI;

export default async function handler(_, res) {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: true,
  });

  // Get all the state we need for the page

  const auctions = await Auction.find({});
  const bids = await Bid.find({});
  const vipps = await Vipps.find({});
  const streamLink = await StreamLink.findOne().sort({ date: -1 }).limit(1);
  const stretchGoals = await StretchGoal.find({}).sort("goal");
  const topDonor = await Vipps.findOne({}).sort({ amount: -1 }).limit(1);
  const rulesheet = await Rulesheet.findOne({});

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  // Find totalAmount using the sum all vipps
  let totalAmountVipps = vipps.reduce((a, b) => {
    return a + b.amount;
  }, 0);

  const sumHighestBids = auctions.reduce((acc, curr) => acc + curr.price, 0);

  let state = JSON.stringify({
    auctions,
    totalAmount: totalAmountVipps + sumHighestBids,
    vipps: vipps.slice(vipps.length - 7, vipps.length),
    streamLink,
    stretchGoals,
    topDonor,
    rulesheet,
    bids,
  });

  res.end(state);
}
