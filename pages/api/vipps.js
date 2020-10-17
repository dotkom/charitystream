import mongoose from "mongoose";
import Cors from "cors";
import { Vipps } from "../../models/schema.js";
import { url } from "./state";

const cors = Cors();

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  const { method, headers } = req;

  await runMiddleware(req, res, cors);

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  if (headers.password !== process.env.POST_PASSWORD) {
    res.status(401).end();
    return;
  }

  switch (method) {
    case "POST":
      const vipps = new Vipps(req.body);
      await vipps.save();
      res.status(200).json(vipps);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
