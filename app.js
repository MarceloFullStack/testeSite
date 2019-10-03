const express = require('express')
const app = express()
const path = require('path')
const port = 3031

app.use(express.static('./public'));
app.use(express.static('./public/assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
  })


  app.get('/hire-me.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/hire-me.html'))
  })
 
 
  app.get('/projects-grid-cards.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/projects-grid-cards.html'))
  })


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})