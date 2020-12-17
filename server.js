const express = require('express')
const cors = require('cors')
const https = require('https')
import app from './app'

const port = process.env.PORT || 8443

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

