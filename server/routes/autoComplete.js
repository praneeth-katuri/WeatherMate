const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  const query = req.query.query;
  if (!query) return res.status(400).json({ error: "Missing query parameter" });

  try {
    const response = await axios.get(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}&limit=5&sort=-population`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      }
    );

    res.json(response.data.data || []);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch suggestions" });
  }
});

module.exports = router;
