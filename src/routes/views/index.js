const { Router } = require('express');
const router = Router();

const {
  getIndexMarkupFile,
  getNotesMarkupFile,
  deleteNote,
} = require('../../controllers/views');

router.get('/', getIndexMarkupFile);
router.get('/notes', getNotesMarkupFile);

module.exports = router;
