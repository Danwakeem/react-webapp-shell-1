const express = require('express');

const router = new express.Router();

router.get('/', (_, res) => res.status(200).send({
  success: true,
  message: 'Hi mom 👋',
}));

module.exports = router;
