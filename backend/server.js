const express = require("express");
const cors = require("cors");
require("dotenv").config();

const aiRoutes = require("./routes/ai");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://aistudyassistantfrontend.onrender.com",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", aiRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Study Assistant Backend Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
