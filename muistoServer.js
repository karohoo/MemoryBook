const express = require('express');
const app = express();

var helmet = require('helmet')
app.use(helmet())

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('muistot.db');

app.listen(8080, function () {
    console.log('Node toimii localhost:8080');
});

app.get('/', function (req, res) {
    return res.send({ error: false, message: 'Toimii' })
});

app.get('/muisto/all', function (req, res) {
  db.all('SELECT * FROM muisto', function(error, results) {
    if (error) throw error;
    return res.status(200).json(results);
  }) // db.all
})

app.get('/muisto/one/:id', function (req, res) {
  let id = req.params.id;

  db.get('SELECT * FROM muisto where id=?', [id], function (error, result) {
      if (error) throw error;

      if (typeof(result) == 'undefined')  {
        return res.status(200).send({});
      }

      return res.status(200).json(result);
  })  // db.get
})

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads')
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

app.post('/muisto/add', upload.none(), function (req, res) {
  let tap = req.body;
  db.run('INSERT INTO muisto (ika, paivamaara, tilanne, sanonta) VALUES (?, ?, ?, ?)',
    [tap.ika, tap.paivamaara, tap.tilanne, tap.sanonta], function (error, result, fields) {
    if (error) throw error;

    return res.status(200).json({count: 1});
  })

})

app.get('/muisto/delete/:id', function (req, res) {
    let id = req.params.id;

    db.run('DELETE FROM muisto WHERE id = ?', [id], function (error, result) {
      if (error) throw error;

      if (this.changes === 0) {
        return res.status(200).json({count: 0});
      }

      return res.status(200).json({count: 1});
    })
})

app.get('/kuva/all', function (req, res) {
  db.all('SELECT * FROM kuva', function(error, results) {
    if (error) throw error;
    return res.status(200).json(results);
  }) // db.all
})

app.get('/kuva/one/:id', function (req, res) {
  let id = req.params.id;

  db.get('SELECT * FROM kuva where id=?', [id], function (error, result) {
      if (error) throw error;

      if (typeof(result) == 'undefined')  {
        return res.status(200).send({});
      }

      return res.status(200).json(result);
  })  // db.get
})

app.post('/kuva/add', upload.single('kuva'), function (req, res) {
    let tap = req.body;
    let kuva = null;
    
    if(req.file) {
        kuva = req.file.originalname
    }
  db.run('INSERT INTO kuva (kuva, teksti) VALUES (?, ?)',
    [kuva, tap.teksti], function (error, result, fields) {
        if (error) throw error;

        return res.status(200).json({count: 1});
  })

})

app.get('/kuva/delete/:id', function (req, res) {
    let id = req.params.id;

    db.run('DELETE FROM kuva WHERE id = ?', [id], function (error, result) {
      if (error) throw error;

      if (this.changes === 0) {
        return res.status(200).json({count: 0});
      }

      return res.status(200).json({count: 1});
    })
})

app.get('/download/:nimi', function(req, res){
  var file = './uploads/' + req.params.nimi;
  res.download(file);
});


app.get('*', function (req, res) {
  return res.status(404).json({ error: true, message: 'Ei pyydettyä palvelua' })
})
