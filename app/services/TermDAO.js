const db = require('../config/db');
const sql = require('../config/sqlProvider');
const Term = require('../models/Term');

class TermDAO {
  static all() {
    return db.map(sql.all, [], (row) => new Term(row));
  }

  static create({ term, definition }) {
    return db.one(sql.create, [term, definition])
             .then((row) => new Term(row));
  }

  static update({ term, definition, id }) {
    return db.one(sql.update, [term, definition, id])
             .then((row) => new Term(row));
  }

  static delete(id) {
    return db.none(sql.delete, [id]);
  }
}

module.exports = TermDAO;
