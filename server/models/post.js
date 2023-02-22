import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
  },
  movie: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});
export default mongoose.model("post", postSchema);
