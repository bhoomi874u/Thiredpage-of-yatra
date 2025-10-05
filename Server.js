const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Dummy login data
const users = [
  { email: "test@example.com", password: "12345" },
  { email: "bhoomi@example.com", password: "mca2025" }
];

// POST /login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true, message: "Login successful!" });
  } else {
    res.status(401).json({ success: false, message: "Invalid email or password!" });
  }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
