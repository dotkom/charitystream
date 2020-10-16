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
const url = `mongodb+srv://${username}:${password}@cluster.au8e8.mongodb.net/${dbname}?retryWrites=true&w=majority`;

export default async function handler(_, res) {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  const auctions = await Auction.find({});
  const vipps = await Vipps.find({});
  const streamLink = await StreamLink.findOne().sort({ date: -1 }).limit(1);
  const slidoView = await SlidoView.findOne().sort({ date: -1 }).limit(1);
  const stretchGoals = await StretchGoal.find({}).sort('goal');

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const saldo = vipps.reduce((a,b) => {
    return a + b.amount
  }, 0)

  res.end(
    JSON.stringify({
      auctions,
      saldo: saldo,
      vipps: vipps.reverse(),
      streamLink,
      slidoView,
      stretchGoals,
    })
  );
}
