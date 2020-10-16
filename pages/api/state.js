import mongoose from 'mongoose';

export default function handler(req, res) {
  const Comment = new Schema({
    name: { type: String, default: 'hahaha' },
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    date: { type: Date, default: Date.now },
    buff: Buffer
  });

  await mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

  res.status(200).json(people)
}
