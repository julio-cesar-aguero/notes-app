const express = require("express");
const bodyParser = require("body-parser");

const cors = require('cors');
const app = express();

// Settings
app.use(bodyParser.json());
const { db } = require("./db");
app.use(cors());
//Routes
//Nuevo Usuario
app.post("/api/users", (req, res) => {
  let data = req.body;
  db.addUser(res, data);
});

//Login
app.post("/api/login", (req, res) => {
  let data = req.body;
  db.login(res, data);
});

//Actualizar Usuario
app.put("/api/users/:id", (req, res) => {
  let { id } = req.params;
  let data = req.body;
  db.updateUser(res, id, data);
});

//Consultar Usuario
app.get("/api/users/:id", (req, res) => {
  let { id } = req.params;
  db.getUser(res, id);
});

// Borrar Usuario
app.delete("/api/users/:id", (req, res) => {
  let { id } = req.params;
  db.deleteUser(res, id);
});

/* Rutas de Notas */

// Agregar nota
app.post('/api/notes/:userId',(req, res)=>{
    let data=req.body;
    let {userId} = req.params;
    data.id_user = userId;
    db.addNote(res,data)
})

// Obtener nota
app.get('/api/notes/:userId',(req, res)=>{
  let {userId} = req.params;
  db.getNotes(res, userId);

})

//Actualizar Nota
app.put('/api/notes/:id',(req, res)=>{
  let {id} = req.params;
  let data = req.body;
  db.updateNote(res, id, data);
})

//Borrar Nota
app.delete('/api/notes/:id',(req, res)=>{
  let {id} = req.params;
  db.deleteNote(res, id);
})
exports.app = app;
