const path = require('path');

const getIndexMarkupFile = (req, res) => {
  return res.sendFile(path.join(__dirname, '../../../public/index.html'));
};
const getNotesMarkupFile = (req, res) => {
  return res.sendFile(path.join(__dirname, '../../../public/index.html'));
};

module.exports = {
  getIndexMarkupFile,
  getNotesMarkupFile,
};
