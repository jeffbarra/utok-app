import mongoose from "mongoose";

// Data Structure
const tikTokSchema = mongoose.Schema({
  video: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

// Collection name inside the database
export default mongoose.model("Videos", tikTokSchema); // Collection name will be "videos"
