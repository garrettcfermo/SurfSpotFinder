const surfspotArray = require('../data/surfspots')
var randNum = 0

module.exports = function (app) {

  app.post('/surfspot', (req, res) => {
    res.sendStatus(200)
    randNum = req.body.randNum
    var userSurfLevel = req.body.userSurfLevel
    var userSurboard = req.body.userSurboard
    var userFoot = req.body.userFoot
    var userDirection = req.body.userDirection
    var userWaveType = req.body.userWaveType
    var userBreakType = req.body.userBreakType
  })
  
  app.get('/surfspot', (req, res) => res.json(surfspotArray[randNum]))
}
  
