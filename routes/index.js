const { Router } = require('express');
const { getAll, getById, getByCode, create } = require('../controllers');

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.get('/code/:code', getByCode);
router.post('/', create);

module.exports = router;
 