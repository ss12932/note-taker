const { Router } = require('express');
const router = Router();

const {
  getIndexMarkup,
  getNotesMarkup,
  deleteNote,
} = require('../../controllers/views');

router.get('/', getIndexMarkup);
router.post('/notes', getNotesMarkup);
router.delete('/:id', deleteNote);

module.exports = router;
