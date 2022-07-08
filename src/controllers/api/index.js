const path = require('path');
const fs = require('fs');
const ShortUniqueId = require('short-unique-id');

const getAllNotes = (req, res) => {
  res.sendFile(path.join(__dirname, '../../db/db.json'));
};
const postNewNote = (req, res) => {
  const uid = new ShortUniqueId({ length: 10 });
  let notes = req.body;
  const notesArray = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../../db/db.json'))
  );
  notes.id = uid();
  notesArray.push(notes);
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notesArray)
  );
  res.json(notesArray);
};
const deleteNote = (req, res) => {
  res.json({ message: 'deleteNote controller has been reached' });
};
module.exports = {
  getAllNotes,
  postNewNote,
  deleteNote,
};
