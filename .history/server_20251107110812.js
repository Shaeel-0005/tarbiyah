// server.js
import express from "express";

const app = express();

// optional: serve static files from "public" if you have them
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Salam ✨ Your Render app is live!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
