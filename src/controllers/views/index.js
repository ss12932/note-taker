const path = require('path');

const getIndexMarkupFile = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
};
const getNotesMarkupFile = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/notes.html'));
};

module.exports = {
  getIndexMarkupFile,
  getNotesMarkupFile,
};
