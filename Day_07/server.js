const express = require("express");

const app = express();
app.use(express.json()); // To read JSON data

const PORT = 3000;

// Sample data
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Shushar" }
];


// 🔹 GET - Get all users
app.get("/users", (req, res) => {
  res.json(users);
});


// 🔹 GET - Get single user by ID
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});


// 🔹 POST - Add new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});


// 🔹 PUT - Update user
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = req.body.name;
  res.json(user);
});


// 🔹 DELETE - Remove user
app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: "User deleted successfully" });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});