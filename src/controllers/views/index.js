const getIndexMarkupFile = (req, res) => {
  // controller logic
  res.json({ message: 'getIndexMarkupFile controller has been reached' });
};
const getNotesMarkupFile = (req, res) => {
  // controller logic
  res.json({ message: 'getNotesMarkupFile controller has been reached' });
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
