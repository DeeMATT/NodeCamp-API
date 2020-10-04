const express = require('express');
const { 
  getBootcamps,
  getSingleBootcamp,
  createBootcamp,
  updateSingleBootcamp,
  deleteSingleBootcamp
} = require('../controlllers/bootcamps');

const router = express.Router();

router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp);

router
  .route('/:id')
  .get(getSingleBootcamp)
  .put(updateSingleBootcamp)
  .delete(deleteSingleBootcamp);

module.exports = router;
