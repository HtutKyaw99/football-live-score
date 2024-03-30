const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/api/matches", async (req, res) => {
  try {
    const response = await axios.get(
      "http://api.football-data.org/v4/matches",
      {
        headers: {
          "X-Auth-Token": process.env.API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
