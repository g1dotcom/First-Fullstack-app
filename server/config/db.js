import mongoose from "mongoose";

const db = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongoDB connect....");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default db;
