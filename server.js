const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect MongoDB
connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/trends", require("./routes/api/trends"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));