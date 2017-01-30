const path = require('path');
const multer = require('multer');
const upload = multer();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/upload', (req,res) => {
  res.send('No file has been uploaded');
})

app.post('/upload', upload.single('file'), (req,res) => {
  res.send({"size": req.file.size});
})

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
