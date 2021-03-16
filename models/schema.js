import mongoose from "mongoose";

delete mongoose.connection.models["Auction"];
delete mongoose.connection.models["Vipps"];
delete mongoose.connection.models["StreamLink"];
delete mongoose.connection.models["StretchGoal"];
delete mongoose.connection.models["Bid"];
delete mongoose.connection.models["Rulesheet"];

const AuctionSchema = new mongoose.Schema(
  {
    id: { type: Number },
    description: { type: String, default: "NULL" },
    price: { type: Number, default: 0 },
  },
  { autoCreate: true }
);
export const Auction = mongoose.model("Auction", AuctionSchema);

const VippsSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    amount: { type: Number, default: 0 },
  },
  { autoCreate: true, timestamps: true }
);
export const Vipps = mongoose.model("Vipps", VippsSchema);

const StreamLinkSchema = new mongoose.Schema(
  {
    link: { type: String, default: "" },
  },
  { autoCreate: true }
);
export const StreamLink = mongoose.model("StreamLink", StreamLinkSchema);

const StretchGoalSchema = new mongoose.Schema(
  {
    description: { type: String, default: "" },
    goal: { type: Number, default: 0 },
  },
  { autoCreate: true }
);
export const StretchGoal = mongoose.model("StretchGoal", StretchGoalSchema);

const BidSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    description: { type: String, default: "" },
    item: { type: Number, default: "" },
    amount: { type: Number, default: 0 },
  },
  { autoCreate: true, timestamps: true }
);
export const Bid = mongoose.model("Bid", BidSchema);

const RulesheetSchema = new mongoose.Schema(
  {
    markdown: { type: String, default: "" },
  },
  { autoCreate: true, timestamps: true }
);
export const Rulesheet = mongoose.model("Rulesheet", RulesheetSchema);
