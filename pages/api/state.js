import mongoose from "mongoose";

import {
  Auction,
  Saldo,
  Vips,
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
  const saldo = await Saldo.find({});
  const vips = await Vips.find({});
  const streamLink = await StreamLink.findOne().sort({ date: -1 }).limit(1);
  const slidoView = await SlidoView.findOne().sort({ date: -1 }).limit(1);
  const stretchGoal = await StretchGoal.find({});

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  res.end(
    JSON.stringify({
      auctions,
      saldo,
      vips,
      streamLink,
      slidoView,
      stretchGoal,
    })
  );
}
