const path = require('path');
const fs = require('fs');
const ShortUniqueId = require('short-unique-id');

const getAllNotes = (req, res) => {
  res.sendFile(path.join(__dirname, '../../db/db.json'));
};
const postNewNote = (req, res) => {
  const uid = new ShortUniqueId({ length: 10 });
  const notes = req.body;
  const notesArray = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../../db/db.json'))
  );
  notes.id = uid();
  notesArray.push(notes);
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notesArray)
  );
  res.json({ success: true, message: 'New note successfully saved' });
};
const deleteNote = (req, res) => {
  const removedNoteId = req.params.id;
  const notesArray = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../../db/db.json'))
  );
  const filterNotesArray = notesArray.filter((el) => el.id !== removedNoteId);
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(filterNotesArray)
  );
  res.json({ success: true, message: 'Note has been successfully deleted' });
};
module.exports = {
  getAllNotes,
  postNewNote,
  deleteNote,
};
