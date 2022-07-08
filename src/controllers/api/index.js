const path = require('path');

const getAllNotes = (req, res) => {
  return res.sendFile(path.join(__dirname, '../../db/db.json'));
};
const postNewNote = (req, res) => {
  // controller logic
  res.json({ message: 'postNewNote controller has been reached' });
};
const deleteNote = (req, res) => {
  // controller logic
  res.json({ message: 'deleteNote controller has been reached' });
};
module.exports = {
  getAllNotes,
  postNewNote,
  deleteNote,
};
