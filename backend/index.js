const express = require("express");
const app = express();
const cors = require("cors");
const productsData = require("./data/products");
const cartData = require("./data/cart");
const api = require("./routes/api");

app.use(cors());

app.use("/api", api);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
