import mongoose from "mongoose";

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App Listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Error: ", error);
  });

// one type of adding mongo connection, app listening

// const app = express();
// const port = process.env.PORT || 8000;

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });
//     app.listen(port, () => {
//       console.log(`App Listening on port ${port}`);
//     });
//   } catch (error) {
//     console.log("Error: ", error);
//     throw error;
//   }
// })();
