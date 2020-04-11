'strict mode'

var serveStatic = require('serve-static')
var express = require('express')
var path = require('path')
var cors = require('cors')
var data = require('../data/projects.json')

var app = express()
var port = process.env.PORT || 8001
var corsOptions = {
  origin: '*',
  credentials: true,
}

app.use(cors(corsOptions))

app.use('/', serveStatic(path.resolve(__dirname, '../../dist')))

app.get('/api/v1/projects', function(_, res, _) {
  try {
    res.json({ code: 200, ...data })
  } catch (error) {
    if ('response' in error) {
      res.json(error.response.body)
    } else res.json(error)
  }
})

app.get('/api/v1/projects/:id', function(req, res, _) {
  try {
    const requestValue = req.params.id

    const toFind = data.projects.find(project => {
      return project.id === requestValue
    })

    if (toFind) {
      res.json(toFind)
    }
  } catch (error) {
    if ('response' in error) {
      res.json(error.response.body)
    } else {
      res.json(error)
    }
  }
})

app.listen(port, () => {
  console.log(`🚀Server listening on port http://localhost:${port}`)
})
