import app from './app'
import * as http from 'http'
const PORT = process.env.PORT || 3000
const server = http.createServer(app)

app.get('/', function (req, res) {
  res.send('Server is running ..');
});

server.listen(PORT, () => {
  const timeZone = +5
  const serverRunTime = new Date(new Date().getTime() + timeZone * 3600 * 1000).toUTCString().replace(/ GMT$/, '')

  console.log('Server is running on port: ' + PORT + ' ---> ' + serverRunTime)
})
