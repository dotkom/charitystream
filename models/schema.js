import mongoose from "mongoose";

delete mongoose.connection.models['Auction'];
delete mongoose.connection.models['Sales'];
delete mongoose.connection.models['Vips'];

const AuctionSchema = new mongoose.Schema(
  {
    description: { type: String, default: "NULL" },
    price: { type: Number, default: 0 },
  },
  { autoCreate: true }
);
export const Auction = mongoose.model("Auction", AuctionSchema);

const SalesSchema = new mongoose.Schema(
  {
    current: { type: Number, default: 0 },
  },
  { autoCreate: true }
);
export const Sales = mongoose.model("Sales", SalesSchema);

const VipsSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    amount: { type: Number, default: 0 },
  },
  { autoCreate: true }
);
export const Vips = mongoose.model("Vips", VipsSchema);
