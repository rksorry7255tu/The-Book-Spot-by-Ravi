const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn.js");
const cors = require("cors");
const User = require("./routes/user.js");
const Books = require("./routes/book.js");
const Favourite = require("./routes/favourite.js");
const Cart = require("./routes/cart.js");
const Order = require("./routes/order.js");
app.use(cors());

app.use(express.json());
//routes
app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);

app.get("/", (req, res) => {
  res.send("hello from backend");
});

//creating port
app.listen(process.env.PORT || 3000, () => {
  console.log("server started");
});
