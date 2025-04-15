require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimiter = require("./middleware/rateLimiter");

const autocompleteRoute = require("./routes/autoComplete");
const weatherRoute = require("./routes/weather");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", rateLimiter);
app.use("/api/autocomplete", autocompleteRoute);
app.use("/api/weather", weatherRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
