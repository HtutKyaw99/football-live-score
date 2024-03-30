const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 8000;

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "http://api.football-data.org/v4/matches",
      {
        headers: {
          "X-Auth-Token": "3ac24f3108ee4cc2878b08e44ec65ca6",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.get("/games", (req, res) => {
  res.json("Hello Bro ! Congs");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
