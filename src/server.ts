import app from "./app";

const port = 3000;

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect();

}


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log("Press Ctrl+C to quit.");
});