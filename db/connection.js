const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((instance) => {
    console.log(`connected on ${instance.connections[0].name}`);
  })
  .catch((err) => console.log(`Got an error see details, ${err}`));
