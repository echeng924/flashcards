const TermDAO = require('../services/TermDAO');

class TermController {
  static get(req, res) {
    TermDAO.all().then((term) => {
      res.status(200).json(term);
    });
  }

  static create(req, res) {
    const termData = {
      term: req.body.term,
      definition: req.body.definition,
    };
    TermDAO.create(termData)
           .then((term) => res.status(200).json(term));
  }

  static update(req, res) {
    const updateData = {
      id: req.params.id,
      term: req.body.term,
      definition: req.body.definition,
    }
    TermDAO.update(updateData).then((term) => res.status(200).json(term))
  }

  static delete(req, res) {
    TermDAO.delete(req.params.id).then(() => {
      res.status(204).end();
    });
  }
}

module.exports = TermController;
