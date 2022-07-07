const getAllNotes = (req, res) => {
  // controller logic
  res.json({ message: 'getAllNotes controller has been reached' });
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
