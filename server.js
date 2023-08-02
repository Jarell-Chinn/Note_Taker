const express = require("express");
const path = require("path");
const routes = require("./routes/index");
// GET *
// GET /notes
// GET /api/notes
// POST api/notes

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", routes);

// app.get("/hello", (req, res) => {
//   res.send("wwww");
// });

// GET /notes` should return the `notes.html` file.
// html routes
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//  `GET *` should return the `index.html` file.

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// starting server
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
