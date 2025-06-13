import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

// const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Server is running at http://localhost:${config.port}`);
      console.log("Press Ctrl+C to quit. You have to shut your mouth up!");
    });
  } catch (error) {
    console.log(error);
  }
}

main();
