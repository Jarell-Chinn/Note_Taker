const router = require("express").Router();
// import unique identifier package

// - `/api/notes` should read the `db.json` file and return all saved notes as JSON.
router.get("", (req, res) => {
  // READ db.json
});
// `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json`

// unique identifier package
router.post("", (req, res) => {
  // Reading the file
  // parsing the file into an array
  // pushing new note to array
  // write file
});

router.delete("", (req, res) => {
  // Read file
  // parse into array
  // filter out note with the Id that would be passed in
  // write to file
});

module.exports = router;
