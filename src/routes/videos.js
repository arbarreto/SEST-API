const { Router } = require('express')
const videoController = require('../controllers/videosController.js')
const LocaleController = require('../controllers/localeController')

const router = Router()

router.get('/getVideos', videoController.getVideos)
router.post('/createVideos', videoController.postVideos)
router.put('/updateVideo/:id', videoController.putVideo)
router.delete('/deleteVideo/:id', videoController.deleteVideo)
router.put('/updateVideoView/:id', videoController.putVideoNumberView)

router.get('/getByIP/:ip', LocaleController.getByIP)
router.post('/creatUserLocale', LocaleController.postUserLocale)

module.exports = router