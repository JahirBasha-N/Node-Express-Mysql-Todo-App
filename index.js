const { log, error } = require("console");
const express = require("express");
const cors = require("cors");
const con = require("./helper/db");

const app = express();
const { json } = express;

app.use(json());
app.use(cors());

// create
app.post("/todo", async (req, res) => {
  try {
    let {
      body: { description },
    } = req;
    let query = `INSERT INTO todo_app(description) VALUES("${description}")`;
    con.query(query, (error, result) => {
      if (error) throw error;
      else {
        let lastInsertId = result.insertId;
        let selectQuery = `SELECT * FROM todo_app where todo_id <= ${lastInsertId}`;
        con.query(selectQuery, (error, result) => {
          if (error) throw error;
          else res.json({ success: true, data: result });
        });
      }
    });
  } catch (error) {
    log(error);
    res.json({ success: false, data: {} });
  }
});

// list
app.get("/todo", async (req, res) => {
  try {
    let selectQuery = `SELECT * FROM todo_app`;
    con.query(selectQuery, (error, result) => {
      if (error) throw error;
      else res.json({ success: true, data: result });
    });
  } catch (error) {
    log(error);
    res.json({ success: false, data: {} });
  }
});

// get
app.get("/todo/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let selectQuery = `SELECT * FROM todo_app where todo_id = ${id}`;
    con.query(selectQuery, (error, result) => {
      if (error) throw error;
      else res.json({ success: true, data: result });
    });
  } catch (error) {
    log(error);
    res.json({ success: false, data: {} });
  }
});

//update
app.patch("/todo/:id", async (req, res) => {
  try {
    let {
      body: { description },
    } = req;
    let { id } = req.params;
    let updateQuery = `Update todo_app set description = "${description}" where todo_id = ${id}`;
    con.query(updateQuery, (error, result) => {
      if (error) throw error;
      else {
        let selectQuery = `SELECT * FROM todo_app`;
        con.query(selectQuery, (error, result) => {
          if (error) throw error;
          else res.json({ success: true, data: result });
        });
      }
    });
  } catch (error) {
    log(error);
    res.json({ success: false, data: {} });
  }
});

// delete
app.delete("/todo/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deleteQuery = `delete from todo_app where todo_id = ${id}`;
    con.query(deleteQuery, (error, result) => {
      if (error) throw error;
      else {
        let selectQuery = `SELECT * FROM todo_app`;
        con.query(selectQuery, (error, result) => {
          if (error) throw error;
          else res.json({ success: true, data: result });
        });
      }
    });
  } catch (error) {
    log(error);
    res.json({ success: false, data: {} });
  }
});

app.listen(8081, () => {
  log("node connected to localhost:8081");
});
