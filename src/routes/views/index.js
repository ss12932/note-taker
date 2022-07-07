const { Router } = require('express');
const router = Router();

const {
  getIndexMarkupFile,
  getNotesMarkupFile,
  deleteNote,
} = require('../../controllers/views');

router.get('/', getIndexMarkupFile);
router.post('/notes', getNotesMarkupFile);
router.delete('/:id', deleteNote);

module.exports = router;
