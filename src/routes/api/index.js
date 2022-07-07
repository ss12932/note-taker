const { Router } = require('express');
const router = Router();

const {
  getAllNotes,
  postNewNote,
  deleteNote,
} = require('../../controllers/api');

router.get('/', getAllNotes);
router.post('/', postNewNote);
router.delete('/:id', deleteNote);

module.exports = router;
