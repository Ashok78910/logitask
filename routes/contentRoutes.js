const express = require('express');
const router = express.Router()
const {getContent,getContentById,updateContent,createContent} =  require('../controllers/contentController')
const protect = require('../middleware/authMiddleware')

router.route('/').get(getContent).post(protect,createContent)
router.route('/:id').get(getContentById).put(protect,updateContent)

module.exports = router;