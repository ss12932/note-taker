const path = require('path');

const getIndexMarkupFile = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
};
const getNotesMarkupFile = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
};
const deleteNote = (req, res) => {
  // controller logic
  res.json({ message: 'deleteNote controller has been reached' });
};

module.exports = {
  getIndexMarkupFile,
  getNotesMarkupFile,
  deleteNote,
};
