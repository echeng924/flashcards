const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  terms: {
    all: sql('./sql/term/all.sql'),
    find: sql('./sql/term/find.sql'),
    create: sql('./sql/term/create.sql'),
    delete: sql('./sql/term/delete.sql'),
  },
};

module.exports = sqlProvider;
