const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
// import unique identifier package

// - `/api/notes` should read the `db.json` file and return all saved notes as JSON.
router.get("/", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "Something went wrong reading the notes. " });
    }
    const notes = JSON.parse(data);
    res.json(notes);
  });

  // READ db.json
});
// `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json`

// unique identifier package
router.post("/", (req, res) => {
  // Reading the file
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "Something went wrong reading the notes. " });
    }
    // parsing the file into an array
    const notes = JSON.parse(data);
    const newNote = req.body;
    // apply unquie identifier
    newNote.id = uuidv4();
    // pushing new note to array
    notes.push(newNote);

    // write file
    fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Was not able to save note" });
      }
      res.json(newNote);
    });
  });
});

// router.delete("", (req, res) => {
// Read file
// parse into array
// filter out note with the Id that would be passed in
// write to file
// });

module.exports = router;
