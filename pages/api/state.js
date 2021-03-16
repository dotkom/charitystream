import mongoose from "mongoose";

import {
  Auction,
  Vipps,
  StreamLink,
  StretchGoal,
} from "../../models/schema.js";

const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const dbname = "Charity";
export const url = process.env.DATABASE_URL;

export default async function handler(_, res) {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    user: username,
    pass: password,
    dbName: dbname,
    authSource: "admin",
  });

  // Get all the state we need for the page

  const auctions = await Auction.find({});
  const vipps = await Vipps.find({});
  const streamLink = await StreamLink.findOne().sort({ date: -1 }).limit(1);
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
      streamLink: "testlink.poopoo",
      stretchGoals,
      topDonor,
    })
  );
}
