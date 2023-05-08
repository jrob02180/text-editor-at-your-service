const path = require('path');

// Joins the path of the current directory with the path of the index.html file
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
