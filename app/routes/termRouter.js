const express = require('express');

const TermController = require('../controllers/TermController');

const router = express.Router();

router.get('/', TermController.get);
router.post('/', TermController.create);
router.put('/', TermController.update);
router.delete('/', TermController.delete);

module.exports = router;
